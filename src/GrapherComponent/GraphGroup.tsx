import styled from 'styled-components';
// import { SurveyQuestionGroupDataType } from '../Types';
import { Graph } from './Graph';

interface Props {
  data: any;
  questions: any;
}

const El = styled.div`
  flex: 3;
`;

const GraphGroupDiv = styled.div`
`;

export const GraphGroup = (props: Props) => {
  const {
    data,
    questions,
  } = props;
  return (
    <El>
      {
        questions.map((d:any) => {
          if (d.Type === 'multiquestion') {
            return (
              <GraphGroupDiv>
                <p>{ d.Label.en }</p>
                <Graph
                  questions={d.Subquestions}
                  data={data}
                />
              </GraphGroupDiv>
            );
          }
          return (
            <Graph
              questions={[d]}
              data={data}
            />
          );
        })
      }

    </El>
  );
};
