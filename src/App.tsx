/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect, useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { json } from 'd3-request';
import { queue } from 'd3-queue';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { SurveyQuestionDataType } from './Types';
import { GrapherComponent } from './GrapherComponent';
import Reducer from './Context/Reducer';
import Context from './Context/Context';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --primary-blue: #006EB5;
    --blue-medium: #4F95DD;
    --blue-bg: #94C4F5;
    --navy: #082753;
    --black-100: #FAFAFA;
    --black-200: #f5f9fe;
    --black-300: #EDEFF0;
    --black-400: #E9ECF6;
    --black-450: #DDD;
    --black-500: #A9B1B7;
    --black-550: #666666;
    --black-600: #212121;
    --black-700: #000000;
    --blue-very-light: #F2F7FF;
    --yellow: #FBC412;
    --yellow-bg: #FFE17E;
    --red: #D12800;
    --red-bg: #FFBCB7;
    --shadow:0px 10px 30px -10px rgb(9 105 250 / 15%);
    --shadow-bottom: 0 10px 13px -3px rgb(9 105 250 / 5%);
    --shadow-top: 0 -10px 13px -3px rgb(9 105 250 / 15%);
    --shadow-right: 10px 0px 13px -3px rgb(9 105 250 / 5%);
    --shadow-left: -10px 0px 13px -3px rgb(9 105 250 / 15%);
  }
  
  html { 
    font-size: 62.5%; 
  }

  .react-dropdown-select-option{
    color:var(--black) !important;
    background-color:var(--primary-color-light) !important;
  }
  .react-dropdown-select-option-label, .react-dropdown-select-option-remove{
    font-weight: 400;
    background-color:var(--primary-color-light);
    padding: 0.5rem;
  }

  body {
    font-family: "proxima-nova", "Helvetica Neue", "sans-serif";
    color: var(--black-600);
    background-color: var(--white);
    margin: 0;
    padding: 1rem 0;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 2.56rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-blue);
  }

  h1 {
    color: var(--primary-blue);
    font-size: 3.2rem;
    font-weight: 700;
    
    @media (max-width: 760px) {
      font-size: 2.4rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  button.primary {
    border-radius: 0.2rem !important;
    font-size: 1.4rem !important;
    font-weight: normal !important;
    color: var(--white) !important;
    background-color: var(--primary-blue) !important;
    border: 1px solid var(--primary-blue) !important;
    cursor: pointer !important;
    padding: 0.4rem 1rem !important;
    &:hover {
      border: 1px solid var(--blue-medium) !important;
      background-color: var(--blue-medium) !important;
    }
    &:active{
      border: 1px solid var(--blue-medium) !important;
      background-color: var(--blue-medium) !important;
    }
  }

  button.secondary {
    border-radius: 0.2rem !important;
    font-size: 1.4rem !important;
    font-weight: normal !important;
    color: var(--black-600) !important;
    border: 1px solid var(--black-450) !important;
    cursor: pointer !important;
    padding: 0.4rem 1rem !important;
    background-color: var(--white) !important;
    &:hover {
      border: 1px solid var(--primary-blue) !important;
      color: var(--primary-blue) !important;
    }
    &:active{
      border: 1px solid var(--primary-blue) !important;
      color: var(--primary-blue) !important;
    }
  }

  a:hover {
    font-weight: bold;
  }

  .bold{
    font-weight: 700;
  }
  
  .italics{
    font-style: italic;
  }

  .ant-modal-close {
    display: none !important;
  }

  .ant-select-item-option-content {
    white-space: normal;
  }

  .ant-select-selector {
    border-radius: 0.5rem !important;
    background-color: var(--black-200) !important;
  }
  .ant-slider-mark-text {
    font-size: 1rem !important;
    display: none;
    &:first-of-type {
      display: inline;
    }
    &:last-of-type {
      display: inline;
    }
  }
  .ant-slider-tooltip{
    padding: 0 !important;
  }
  .ant-tooltip-inner{
    font-size: 1.4rem !important;
    background-color: var(--black-550) !important;
    border-radius: 0.4rem;
  }
  .ant-tooltip-arrow-content{
    background-color: var(--black-550) !important;
  }
`;

const VizAreaEl = styled.div`
  display: flex;
  max-width: 1220px;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 10rem;
`;

const App = () => {
  const [finalData, setFinalData] = useState<any | undefined>(undefined);
  const [indicatorsList, setIndicatorsList] = useState<SurveyQuestionDataType[] | undefined>(undefined);
  const initialState = {
    selectedSubjectType: 'households',
    selectedDepartments: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateSelectedSubjectType = (selectedSubjectType: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => {
    dispatch({
      type: 'UPDATE_SELECTED_SUBJECT_TYPE',
      payload: selectedSubjectType,
    });
  };

  const updateSelectedDepartments = (selectedDepartments: CheckboxValueType[]) => {
    dispatch({
      type: 'UPDATE_SELECTED_DEPARTMENTS',
      payload: selectedDepartments,
    });
  };

  useEffect(() => {
    queue()
      .defer(json, './data/households.json')
      .defer(json, './data/enterprises.json')
      .defer(json, './data/projects.json')
      .defer(json, './data/dumpingSites.json')
      .defer(json, './data/healthFacilities.json')
      .defer(json, './data/townhalls.json')
      .defer(json, './data/surveyQuestions.json')
      .await((err: any, householdsData: any[], enterprisesData: any[], projectsData: any[], dumpingSitesData: any[], healthFacilitiesData: any[], townHallsData: any[], surveyQuestions: SurveyQuestionDataType[]) => {
        if (err) throw err;

        const data = {
          households: householdsData,
          enterprises: enterprisesData,
          projects: projectsData,
          dumpingSites: dumpingSitesData,
          healthFacilities: healthFacilitiesData,
          townHalls: townHallsData,
        };

        setFinalData(data);
        setIndicatorsList(surveyQuestions);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      {
        finalData && indicatorsList
          ? (
            <>
              <Context.Provider
                value={{
                  ...state,
                  updateSelectedSubjectType,
                  updateSelectedDepartments,
                }}
              >
                <GrapherComponent
                  data={finalData}
                  indicators={indicatorsList}
                />
              </Context.Provider>
            </>
          )
          : (
            <VizAreaEl>
              <Spin size='large' />
            </VizAreaEl>
          )
      }
    </>
  );
};

export default App;
