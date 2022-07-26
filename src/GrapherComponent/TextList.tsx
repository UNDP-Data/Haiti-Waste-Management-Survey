import styled from 'styled-components';

interface Props {
  questionText: string;
  data: any;
  numRespondents: number;
}

const El = styled.div`
  width: 100%;
  font-size: 14px;
`;

const GraphTitle = styled.p`
  line-height: 1.5
`;

export const TextList = (props: Props) => {
  const {
    questionText,
    data,
    numRespondents,
  } = props;

  return (
    <El>
      <GraphTitle>
        {questionText}
        {' '}
        (
        {numRespondents}
        {' '}
        respondents)
      </GraphTitle>
      <ul>
        {
          data.sort().map((d:any) => <li>{d}</li>)
        }
      </ul>
    </El>
  );
};
