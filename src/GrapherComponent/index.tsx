import { useContext } from 'react';
import styled from 'styled-components';
import { CtxDataType } from '../Types';
import { Logo } from '../Icons';
import Context from '../Context/Context';
import { Settings } from './Settings';
import { GraphGroup } from './GraphGroup';

interface Props {
  data: any;
  questions: any;
}

interface SelectedSubjectType {
  selected: boolean;
}

const Container = styled.div`
  max-width: 132rem;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const RootEl = styled.div`
  background-color: var(--white);
  color: var(--black-600);
  box-shadow: var(--shadow);
`;

const TabsContainerEl = styled.div`
  background-color: var(--black-200);
  display: flex;
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

const TabsEl = styled.div<SelectedSubjectType>`
  font-size: 1.2rem;
  padding: 1rem 0;
  line-height: 1.4rem;
  min-width: 10rem;
  width: 15%;
  text-transform: uppercase;
  justify-content: center;
  background-color:${(props) => (props.selected ? 'var(--white)' : 'transparent')};
  color:${(props) => (props.selected ? 'var(--primary-blue)' : 'var(--black-600)')};
  text-align: center;
  border-right: 1px solid var(--black-450);
  &:last-of-type {
    border-right: none;
  }
  opacity :${(props) => (props.selected ? 1 : 0.6)};
  cursor: pointer;
  flex: 1;
  div{
    margin-bottom: 0.5rem;
  }
  &:hover {
    opacity: 1;
  }
  @media (max-width: 1172px) {
    width: 20%;
    &:last-of-type {
      border-right: 0 solid var(--black-450);
    }
  }
  @media (max-width: 900px) {
    width: fit-content;
    min-width: 0;
    padding: 1rem 2rem;
    &:last-of-type {
      border-right: 1px solid var(--black-450);
    }
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const GraphEl = styled.div`
  display: flex;
  align-items: stretch;
  @media (max-width: 960px) {
    display: inline;
  }  
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
const H2 = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 0 0 0.5rem 1rem;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  box-shadow: var(--shadow-right);
  border-right: 1px solid var(--black-400);
  @media (max-width: 960px) {
    width: 100%;
    box-shadow: var(--shadow-bottom);
    border-right: 0px solid var(--black-400);
    padding-bottom: 0;
    height: auto;
  } 
`;

const Card = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

export const GrapherComponent = (props: Props) => {
  const {
    data,
    questions,
  } = props;
  const {
    selectedSubjectType,
    selectedDepartments,
    selectedGenders,
    selectedEducations,
    updateSelectedSubjectType,
  } = useContext(Context) as CtxDataType;

  let graphData = data.households;
  let unit = 'households';
  switch (selectedSubjectType) {
    case 'households':
      graphData = data.households;
      unit = 'households';
      break;
    case 'enterprises':
      graphData = data.enterprises;
      unit = 'enterprises';
      break;
    case 'projects':
      graphData = data.projects;
      unit = 'projects';
      break;
    case 'dumpingSites':
      graphData = data.dumpingSites;
      unit = 'dumping sites';
      break;
    case 'healthFacilities':
      graphData = data.healthFacilities;
      unit = 'health facilities';
      break;
    case 'townHalls':
      graphData = data.townHalls;
      unit = 'town halls';
      break;
    default:
      graphData = data.households;
      unit = 'households';
      break;
  }

  // filter data based on checkbox selections
  let filteredData = selectedDepartments.length > 0 ? graphData.filter((d:any) => selectedDepartments.indexOf(d.Department) > -1) : graphData;
  if (selectedSubjectType === 'households') {
    filteredData = selectedGenders.length > 0 ? filteredData.filter((d:any) => selectedGenders.indexOf(d['Gender of respondent']) > -1) : filteredData;
    filteredData = selectedEducations.length > 0 ? filteredData.filter((d:any) => selectedEducations.indexOf(d['Level of education of the head of the household.']) > -1) : filteredData;
  }

  const numRespondents = filteredData.length;

  return (
    <>
      <Container>
        <HeadingEl>
          <TitleEl>
            <Logo height={50} />
            <div>
              <H1>Data Futures Platform</H1>
              <H2>Explore All Data</H2>
            </div>
          </TitleEl>
        </HeadingEl>
        <p style={{ marginBottom: '2em' }}>As its first challenge, the UNDP Haiti Accelerator Lab is working on solid waste management. Solid waste is one of the major problems faced by the local authorities in Haiti. Despite the intervention of multiple actors such as the central government, the municipalities, private enterprises and NGOs, this problem remains unsolved particularly in the urban centres. To avail data for decision making and to deepen the knowledge on waste management in Haiti, the Accelerator Lab conducted a national survey to gather data on perceptions, local initiatives and public actions related to waste management. This page allows users to explore data and insights from this survey.</p>
        <RootEl>
          <TabsContainerEl>
            <TabsEl selected={selectedSubjectType === 'households'} onClick={() => { updateSelectedSubjectType('households'); }}>
              <>Households</>
            </TabsEl>
            <TabsEl selected={selectedSubjectType === 'enterprises'} onClick={() => { updateSelectedSubjectType('enterprises'); }}>
              <>Enterprises</>
            </TabsEl>
            <TabsEl selected={selectedSubjectType === 'projects'} onClick={() => { updateSelectedSubjectType('projects'); }}>
              <>Projects</>
            </TabsEl>
            <TabsEl selected={selectedSubjectType === 'dumpingSites'} onClick={() => { updateSelectedSubjectType('dumpingSites'); }}>
              <>Dumping sites</>
            </TabsEl>
            <TabsEl selected={selectedSubjectType === 'healthFacilities'} onClick={() => { updateSelectedSubjectType('healthFacilities'); }}>
              <>Health facilities</>
            </TabsEl>
            <TabsEl selected={selectedSubjectType === 'townHalls'} onClick={() => { updateSelectedSubjectType('townHalls'); }}>
              <>Town halls</>
            </TabsEl>
          </TabsContainerEl>
          <GraphEl>
            <Wrapper>
              <Card>
                {numRespondents}
                {' '}
                {unit}
              </Card>
              <Settings />
            </Wrapper>
            <div id='graph-group-node' style={{ flex: 3, padding: '2em' }}>
              {
                questions[selectedSubjectType].questionGroups.map((group:any) => (
                  <div style={{ marginBottom: '4em' }}>
                    <h2>{group.en}</h2>
                    <GraphGroup
                      data={filteredData}
                      questions={group.questions}
                    />
                  </div>
                ))
              }
            </div>
          </GraphEl>
        </RootEl>
      </Container>
    </>
  );
};
