import styled from 'styled-components';
import { SurveyQuestionGroupDataType } from '../Types';
import { Graph } from './Graph';

interface Props {
  data: any;
  questionGroups: SurveyQuestionGroupDataType[];
}

const El = styled.div`
  flex: 3;
  padding: 2em;
`;

const GraphGroupDiv = styled.div`
  margin-bottom: 4em;
`;

export const GraphGroup = (props: Props) => {
  const {
    data,
    questionGroups,
  } = props;
  return (
    <El id='graph-group-node'>
      {
        questionGroups.map((d) => (
          <GraphGroupDiv>
            <h2>{d.en}</h2>
            <Graph
              questions={d.questions}
              data={data}
            />
          </GraphGroupDiv>
        ))
      }
    </El>
  );
};
