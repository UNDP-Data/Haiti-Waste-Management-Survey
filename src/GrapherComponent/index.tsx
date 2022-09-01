import { useContext } from 'react';
import styled from 'styled-components';
import { CtxDataType } from '../Types';
import { Logo } from '../Icons';
import Context from '../Context/Context';
import { Settings } from './Settings';
import { HouseHoldViz } from './HouseHoldViz';

interface Props {
  data: any;
}

const Container = styled.div`
  max-width: 132rem;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const RootEl = styled.div`
  background-color: var(--white);
  color: var(--black-600);
`;

const HeadingEl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
`;

const TitleEl = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-blue);
  line-height: 2rem;
  margin: 1rem 0 0.5rem 1rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const H3 = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 0 0 0.5rem 1rem;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const NotificationEl = styled.div`
  padding: 2rem;
  font-size: 2rem;
  background-color: var(--black-200);
  border: 1px solid var(--black-500);
  text-align: center;
  border-radius: 3px;
  margin: 2rem 0 5rem 0;
`;

interface ToggleContainerType {
  width?: string;
  margin?: string;
}

const ToggleContainer = styled.div<ToggleContainerType>`
  height: 5rem;
  border: 2px solid #000;
  display: flex;
  width: ${(props) => (props.width ? props.width : 'auto')};
  margin: ${(props) => (props.margin ? props.width : '0')};
`;

interface ToggleDataType {
  selected: boolean;
}

const ToggleEl = styled.div<ToggleDataType>`
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem 2rem;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  text-transform: uppercase;
  color: ${(props) => (props.selected ? 'var(--white)' : 'var(--black-700)')};
  cursor: pointer;
  border-right: 1px solid var(--black-500);
  &:last-of-type {
    border-right: 0;
  }
  background-color: ${(props) => (props.selected ? 'var(--primary-blue)' : 'var(--white)')};  
  &:hover {
    background-color: ${(props) => (props.selected ? 'var(--primary-blue)' : 'var(--blue-very-light)')}; 
    color: ${(props) => (props.selected ? 'var(--white)' : 'var(--primary-blue)')}; 
  }
`;

export const GrapherComponent = (props: Props) => {
  const {
    data,
  } = props;
  const {
    selectedSubjectType,
    selectedDepartments,
    selectedGenders,
    selectedEducations,
    selectedFunctions,
    language,
    updateSelectedSubjectType,
    updateLanguage,
  } = useContext(Context) as CtxDataType;

  const graphData = data[selectedSubjectType];

  let filteredData = selectedDepartments.length > 0 ? graphData.filter((d:any) => selectedDepartments.indexOf(d.Department) > -1) : graphData;
  if (selectedSubjectType === 'households') {
    filteredData = selectedGenders !== 'All Genders' ? filteredData.filter((d:any) => selectedGenders === d['Gender of respondent']) : filteredData;
    filteredData = selectedEducations.length > 0 ? filteredData.filter((d:any) => selectedEducations.indexOf(d['Level of education of the head of the household.']) > -1) : filteredData;
  }

  if (selectedSubjectType === 'enterprises' || selectedSubjectType === 'projects' || selectedSubjectType === 'healthFacilities' || selectedSubjectType === 'townHalls') {
    filteredData = selectedFunctions.length > 0 ? filteredData.filter((d:any) => selectedFunctions.indexOf(d.function_resp) > -1) : filteredData;
  }

  return (
    <>
      <Container>
        <HeadingEl>
          <TitleEl>
            <Logo height={50} />
            <div>
              <H1>Data Futures Platform</H1>
              <H3>Haiti Waste Management</H3>
            </div>
          </TitleEl>
          <ToggleContainer>
            <ToggleEl selected={language === 'en'} onClick={() => { updateLanguage('en'); }}>EN</ToggleEl>
            <ToggleEl selected={language === 'fr'} onClick={() => { updateLanguage('fr'); }}>FR</ToggleEl>
          </ToggleContainer>
        </HeadingEl>
        <p style={{ marginBottom: '2em' }}>As its first challenge, the UNDP Haiti Accelerator Lab is working on solid waste management. Solid waste is one of the major problems faced by the local authorities in Haiti. Despite the intervention of multiple actors such as the central government, the municipalities, private enterprises and NGOs, this problem remains unsolved particularly in the urban centres. To avail data for decision making and to deepen the knowledge on waste management in Haiti, the Accelerator Lab conducted a national survey to gather data on perceptions, local initiatives and public actions related to waste management. This page allows users to explore data and insights from this survey.</p>
        <RootEl>
          <ToggleContainer width='100%'>
            <ToggleEl selected={selectedSubjectType === 'households'} onClick={() => { updateSelectedSubjectType('households'); }}>Households</ToggleEl>
            <ToggleEl selected={selectedSubjectType === 'enterprises'} onClick={() => { updateSelectedSubjectType('enterprises'); }}>Enterprises</ToggleEl>
            <ToggleEl selected={selectedSubjectType === 'projects'} onClick={() => { updateSelectedSubjectType('projects'); }}>Projects</ToggleEl>
            <ToggleEl selected={selectedSubjectType === 'dumpingSites'} onClick={() => { updateSelectedSubjectType('dumpingSites'); }}>Dumping Sites</ToggleEl>
            <ToggleEl selected={selectedSubjectType === 'healthFacilities'} onClick={() => { updateSelectedSubjectType('healthFacilities'); }}>Health Facilities</ToggleEl>
            <ToggleEl selected={selectedSubjectType === 'townHalls'} onClick={() => { updateSelectedSubjectType('townHalls'); }}>Town Halls</ToggleEl>
          </ToggleContainer>
          <Settings />
          <NotificationEl>
            Showing results for
            {' '}
            <span className='bold'>{filteredData.length}</span>
            {' '}
            {selectedSubjectType}
            {' '}
          </NotificationEl>
          {
            selectedSubjectType === 'households' ? <HouseHoldViz data={filteredData} /> : null
          }
        </RootEl>
      </Container>
    </>
  );
};
