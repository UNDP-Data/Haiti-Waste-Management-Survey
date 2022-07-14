import styled from 'styled-components';
import maxBy from 'lodash.maxby';
// import orderBy from 'lodash.orderby';
// import { format } from 'd3-format';
import { scaleLinear } from 'd3-scale';
// import { COLOR_SCALES } from '../Constants';

interface Props {
  questionText: string;
  data: any;
  numRespondents: number;
}

const El = styled.div`
  width: 45%;
`;

export const HorizontalBarChart = (props: Props) => {
  const {
    questionText,
    data,
    numRespondents,
  } = props;

  const svgWidth = window.innerWidth > 400 ? 400 : window.innerWidth;
  const margin = {
    top: 10,
    bottom: 10,
    left: 150,
    right: 40,
  };
  const graphWidth = svgWidth - margin.left - margin.right;
  const svgHeight = data.length * 25 + margin.top + margin.bottom;
  const xMaxValue = maxBy(data, (d:any) => d.xVal) ? maxBy(data, (d:any) => d.xVal)?.xVal as number : 0;

  const widthScale = scaleLinear().domain([0, xMaxValue]).range([0, graphWidth]).nice();

  return (
    <El>
      <p>
        {questionText}
        {' '}
        (
        {numRespondents}
        {' '}
        respondents)
      </p>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <g
          transform={`translate(${margin.left},${margin.top})`}
        >
          {
            data.map((d:any, i:number) => (
              // if (d.xVal === undefined) return null;
              <g
                key={i}
              >
                <text
                  fill='#212121'
                  y={i * 25}
                  x={0}
                  dx={-5}
                  dy={14}
                  fontSize={12}
                  textAnchor='end'
                >
                  {d.label}
                </text>
                <rect
                  y={i * 25}
                  x={0}
                  height={20}
                  fill='#666'
                  width={d.xVal !== undefined ? widthScale(d.xVal) : 0}
                />
                <text
                  fill='#212121'
                  fontWeight='bold'
                  y={i * 25}
                  x={d.xVal !== undefined ? widthScale(d.xVal) : 0}
                  dx={5}
                  textAnchor='start'
                  dy={14}
                  fontSize={12}
                >
                  {d.xVal}
                </text>
              </g>
            ))
          }
          <line
            x1={widthScale(0)}
            x2={widthScale(0)}
            y1={-2.5}
            y2={data.length * 25 - 2.5}
            stroke='#212121'
            strokeWidth={1}
          />
        </g>
      </svg>
    </El>
  );
};
