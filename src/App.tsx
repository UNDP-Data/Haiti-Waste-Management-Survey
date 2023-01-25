/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { json } from 'd3-request';
import { queue } from 'd3-queue';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { GrapherComponent } from './GrapherComponent';
import Reducer from './Context/Reducer';
import Context from './Context/Context';

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
  const initialState = {
    selectedSubjectType: 'households',
    selectedDepartments: [],
    selectedGenders: 'All Genders',
    selectedEducations: [],
    selectedFunctions: [],
    language: 'en',
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

  const updateSelectedGenders = (selectedGenders: CheckboxValueType[]) => {
    dispatch({
      type: 'UPDATE_SELECTED_GENDERS',
      payload: selectedGenders,
    });
  };

  const updateSelectedEducations = (selectedEducations: CheckboxValueType[]) => {
    dispatch({
      type: 'UPDATE_SELECTED_EDUCATIONS',
      payload: selectedEducations,
    });
  };

  const updateSelectedFunctions = (selectedFunctions: CheckboxValueType[]) => {
    dispatch({
      type: 'UPDATE_SELECTED_FUNCTIONS',
      payload: selectedFunctions,
    });
  };
  const updateLanguage = (selectedLanguage: 'en' | 'fr') => {
    dispatch({
      type: 'UPDATE_LANGUAGE',
      payload: selectedLanguage,
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
      .await((err: any, householdsData: any[], enterprisesData: any[], projectsData: any[], dumpingSitesData: any[], healthFacilitiesData: any[], townHallsData: any[]) => {
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
      });
  }, []);

  return (
    <>
      {
        finalData
          ? (
            <>
              <Context.Provider
                value={{
                  ...state,
                  updateSelectedSubjectType,
                  updateSelectedDepartments,
                  updateSelectedGenders,
                  updateSelectedEducations,
                  updateSelectedFunctions,
                  updateLanguage,
                }}
              >
                <GrapherComponent
                  data={finalData}
                />
              </Context.Provider>
            </>
          )
          : (
            <VizAreaEl>
              <div className='undp-loader' />
            </VizAreaEl>
          )
      }
    </>
  );
};

export default App;
