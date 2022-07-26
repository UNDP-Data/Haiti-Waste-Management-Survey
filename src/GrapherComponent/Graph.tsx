import styled from 'styled-components';
import countBy from 'lodash.countby';
import uniq from 'lodash.uniq';
import { SurveyQuestionDataType } from '../Types';
import { HorizontalBarChart } from './HorizontalBarChart';
import { TextList } from './TextList';

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
    // console.log(question);
    const questionText = question.Question.en;
    let dataFormatted;
    const numRespondents = data.filter((d:any) => d[question.DataLabel] !== undefined).length;

    if (question.ResponseType === 'freeform text') {
      dataFormatted = uniq(data.filter((d: any) => d[question.DataLabel] !== undefined).map((d:any) => d[question.DataLabel]));
      return (
        {
          questionText,
          data: dataFormatted,
          numRespondents,
          chartType: 'textList',
        }
      );
    }

    const counts = countBy(data.filter((d:any) => d[question.DataLabel] !== undefined).map((d:any) => d[question.DataLabel]));
    dataFormatted = question.Options.map((option) => ({ label: option.en, xVal: counts[option.DataLabel] }));
    return (
      {
        questionText,
        data: dataFormatted,
        numRespondents,
        chartType: 'barChart',
      }
    );
  });
  // console.log(chartData);

  return (
    <El className='graph-node'>
      {
        chartData.map((d) => {
          if (d.chartType === 'textList') {
            return (
              <TextList
                questionText={d.questionText}
                data={d.data}
                numRespondents={d.numRespondents}
              />
            );
          }
          return (
            <HorizontalBarChart
              questionText={d.questionText}
              data={d.data}
              numRespondents={d.numRespondents}
            />
          );
        })
      }
    </El>
  );
};
