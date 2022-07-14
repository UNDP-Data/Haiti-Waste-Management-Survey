import { useContext } from 'react';
import styled from 'styled-components';
import { CtxDataType, SurveyQuestionDataType } from '../Types';
import { Logo } from '../Icons';
import Context from '../Context/Context';
import { Settings } from './Settings';
import { Graph } from './Graph';

interface Props {
  data: any;
  indicators: SurveyQuestionDataType[];
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

export const GrapherComponent = (props: Props) => {
  const {
    data,
    indicators,
  } = props;
  const {
    selectedSubjectType,
    updateSelectedSubjectType,
  } = useContext(Context) as CtxDataType;
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
            <Settings />
            <Graph
              data={data}
              indicators={indicators}
              fullWidth
            />
          </GraphEl>
        </RootEl>
      </Container>
    </>
  );
};
