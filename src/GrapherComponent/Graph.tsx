import styled from 'styled-components';
import countBy from 'lodash.countby';
import { SurveyQuestionDataType } from '../Types';
import { HorizontalBarChart } from './HorizontalBarChart';

interface Props {
  data: any;
  questions: SurveyQuestionDataType[];
}

const El = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;

export const Graph = (props: Props) => {
  const {
    data,
    questions,
  } = props;

  const chartData = questions.map((question) => {
    const questionText = question.Question.en;
    const counts = countBy(data.filter((d:any) => d[question.DataLabel] !== undefined).map((d:any) => d[question.DataLabel]));
    const dataFormatted = question.Options.map((option) => ({ label: option.en, xVal: counts[option.DataLabel] }));
    const numRespondents = data.filter((d:any) => d[question.DataLabel] !== undefined).length;
    return (
      { questionText, data: dataFormatted, numRespondents }
    );
  });

  return (
    <El className='graph-node'>
      {
        chartData.map((d) => (
          <HorizontalBarChart
            questionText={d.questionText}
            data={d.data}
            numRespondents={d.numRespondents}
          />
        ))
      }
    </El>
  );
};
