import { useContext } from 'react';
import styled from 'styled-components';
import countBy from 'lodash.countby';
import { CtxDataType, SurveyQuestionDataType } from '../Types';
import Context from '../Context/Context';
import { HorizontalBarChart } from './HorizontalBarChart';

interface Props {
  data: any;
  indicators: SurveyQuestionDataType[];
  fullWidth: boolean;
}

interface ElProps {
  fullWidth: boolean;
}

const El = styled.div<ElProps>`
  width: ${(props) => (props.fullWidth ? '100%' : '75%')};
  box-shadow: var(--shadow-right);
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 2em;
  @media (min-width: 961px) {
    height: 74rem;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Graph = (props: Props) => {
  const {
    data,
    indicators,
    fullWidth,
  } = props;
  const {
    selectedSubjectType,
  } = useContext(Context) as CtxDataType;

  const questions = indicators.filter((d) => d.SubjectType === selectedSubjectType);

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
    <El id='graph-node' fullWidth={fullWidth}>
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
