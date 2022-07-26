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

    if (question.ResponseType === 'multi select') {
      const responses = data.map((d:any) => d[question.DataLabel]).filter((d:any) => d !== undefined);
      const counts = question.Options.map((option) => {
        let count = 0;
        responses.forEach((response:any) => {
          if (response.indexOf(option.DataLabel) > -1) count += 1;
        });
        return ({ label: option.DataLabel, xVal: count });
      });
      return (
        {
          questionText,
          data: counts,
          numRespondents,
          chartType: 'barChart',
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
