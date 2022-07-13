// import { useContext } from 'react';
import styled from 'styled-components';
import maxBy from 'lodash.maxby';
// import orderBy from 'lodash.orderby';
// import { format } from 'd3-format';
import { scaleLinear } from 'd3-scale';
// import Context from '../Context/Context';
// import { COLOR_SCALES } from '../Constants';

interface Props {
  questionText: string;
  data: any;
  numRespondents: number;
}

const El = styled.div`
  height: calc(100% - 71px);
`;

export const HorizontalBarChart = (props: Props) => {
  const {
    questionText,
    data,
    numRespondents,
  } = props;
  // const {
  //   selectedSubjectType
  // } = useContext(Context) as CtxDataType;
  const svgWidth = window.innerWidth > 960 ? 500 : window.innerWidth;
  const margin = {
    top: 80,
    bottom: 10,
    left: 125,
    right: 40,
  };
  const graphWidth = svgWidth - margin.left - margin.right;
  const svgHeight = data.length * 25 + margin.top + margin.bottom;
  const xMaxValue = maxBy(data, (d:any) => d.xVal) ? maxBy(data, (d:any) => d.xVal)?.xVal as number : 0;

  const widthScale = scaleLinear().domain([0, xMaxValue]).range([0, graphWidth]).nice();

  return (
    <El>
      <p>{questionText}</p>
      <p>{numRespondents}</p>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <text
          x={25}
          y={50}
          fontSize={18}
          fill='#212121'
        >
          Test
        </text>
        <g
          transform={`translate(${margin.left},${margin.top})`}
        >
          {
            data.map((d:any, i:number) => {
              if (d.xVal === undefined) return null;
              return (
                <g
                  key={i}
                >
                  <text
                    fill='#212121'
                    y={i * 25}
                    x={0}
                    dx={-50}
                    dy={14}
                    fontSize={12}
                    textAnchor='end'
                  >
                    {d.label}
                  </text>
                  <rect
                    y={i * 25}
                    x={widthScale(Math.min(0, d.xVal))}
                    height={20}
                    fill='#666'
                    width={Math.abs(widthScale(d.xVal) - widthScale(0))}
                    rx={3}
                    ry={3}
                  />
                  <text
                    fill='#212121'
                    fontWeight='bold'
                    y={i * 25}
                    x={d.xVal < 0 ? widthScale(Math.min(0, d.xVal)) : widthScale(d.xVal)}
                    dx={d.xVal < 0 ? -5 : 5}
                    textAnchor={d.xVal < 0 ? 'end' : 'start'}
                    dy={14}
                    fontSize={12}
                  >
                    {d.xVal}
                  </text>
                </g>
              );
            })
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
