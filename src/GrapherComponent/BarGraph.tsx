import styled from 'styled-components';
import { BAR_HEIGHT, BAR_PADDING, TEXT_DY } from '../Constants';

interface Props {
  data: number[];
  barLabel: string[];
  maxValue: number;
  ticks: number[]
  marginLeft: number;
}

const El = styled.div`
  width: 100%;
  max-width: 62rem;
  margin: 2rem auto;
`;

export const BarGraph = (props: Props) => {
  const {
    data,
    barLabel,
    maxValue,
    ticks,
    marginLeft,
  } = props;
  const svgWidth = window.innerWidth > 620 ? 620 : window.innerWidth;
  const svgHeight = (BAR_HEIGHT + (2 * BAR_PADDING)) * data.length + 25;
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {
          data.map((d, i) => (
            <g key={i} transform={`translate(${marginLeft},${((BAR_HEIGHT + (2 * BAR_PADDING)) * i) + BAR_PADDING})`}>
              <rect
                x={0}
                y={0}
                height={BAR_HEIGHT}
                width={svgWidth - marginLeft}
                fill='#006EB5'
                opacity={0.2}
              />
              <rect
                x={0}
                y={0}
                height={BAR_HEIGHT}
                width={((svgWidth - marginLeft) * d) / maxValue}
                fill='#006EB5'
              />
              <text
                fill='#006EB5'
                fontSize={16}
                textAnchor='start'
                x={((svgWidth - marginLeft) * d) / maxValue}
                y={0}
                dx={5}
                dy={TEXT_DY}
                fontWeight='bold'
              >
                {d.toFixed(1)}
                %
              </text>
              <text
                fill='#666'
                fontSize={12}
                textAnchor='end'
                x={0}
                y={0}
                dx={-5}
                dy={TEXT_DY}
                fontWeight='bold'
              >
                {
                  barLabel[i].split('\n').length > 1 ? (
                    <>
                      <tspan x={0} textAnchor='end' dx={-5} dy={22}>{barLabel[i].split('\n')[0]}</tspan>
                      <tspan x={0} textAnchor='end' dx={-5} dy={12}>{barLabel[i].split('\n')[1]}</tspan>
                    </>
                  )
                    : (
                      <>
                        <tspan>{barLabel[i]}</tspan>
                      </>
                    )
                }
              </text>
            </g>
          ))
        }
        {
          ticks.map((d, i) => (
            <g key={i} transform={`translate(${marginLeft},0)`}>
              <line
                x1={(d * (svgWidth - marginLeft)) / maxValue}
                x2={(d * (svgWidth - marginLeft)) / maxValue}
                y1={0}
                y2={svgHeight - 20}
                stroke='#fff'
                strokeWidth={1}
                opacity={0.4}
              />
              <text
                fill='#aaa'
                fontSize={12}
                textAnchor={d === 0 ? 'start' : d === maxValue ? 'end' : 'middle'}
                x={(d * (svgWidth - marginLeft)) / maxValue}
                y={svgHeight - 20}
                dy={10}
                fontWeight='bold'
              >
                {d}
                %
              </text>
            </g>
          ))
        }
        {
          data.map((d, i) => (
            <g key={i} transform={`translate(${marginLeft},${((BAR_HEIGHT + (2 * BAR_PADDING)) * i) + BAR_PADDING})`}>
              <text
                fill='#006EB5'
                fontSize={16}
                textAnchor='start'
                x={((svgWidth - marginLeft) * d) / maxValue}
                y={0}
                dx={5}
                dy={TEXT_DY}
                fontWeight='bold'
              >
                {d.toFixed(1)}
                %
              </text>
            </g>
          ))
        }
      </svg>
    </El>
  );
};
