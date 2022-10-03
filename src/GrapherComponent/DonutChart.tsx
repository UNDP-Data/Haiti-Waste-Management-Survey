import styled from 'styled-components';
import { describeArc } from '../utils/getArc';

interface Props {
  data: number;
  subText: string;
  color?: string;
}

const Container = styled.div`
  width: 100%;
  max-width: 20rem;
  padding: 1.25rem 2.5rem;
  width: 100%;
  margin: auto;
`;

export const DonutChart = (props: Props) => {
  const {
    data,
    subText,
    color,
  } = props;
  return (
    <Container>
      <svg width='100%' viewBox='0 0 150 150'>
        <circle
          cx={75}
          cy={75}
          r={70}
          fill='none'
          stroke='#DDD'
          strokeWidth={10}
        />
        <path
          d={describeArc(75, 75, 70, 0, 360 * (data / 100))}
          fill='none'
          strokeWidth={10}
          style={{ stroke: color || '#006EB5' }}
        />
        <text
          x={75}
          y={75}
          textAnchor='middle'
          fontFamily='proxima-nova'
          fontWeight='bold'
          fontSize='30px'
          dy={0}
        >
          {data.toFixed(1)}
          %
        </text>
        <text
          x={75}
          y={75}
          textAnchor='middle'
          fontFamily='proxima-nova'
          fontWeight='bold'
          fontSize='20px'
          dy={20}
        >
          {subText}
        </text>
      </svg>
    </Container>
  );
};
