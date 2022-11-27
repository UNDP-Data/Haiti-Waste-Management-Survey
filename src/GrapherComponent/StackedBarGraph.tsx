import styled from 'styled-components';
import { BAR_HEIGHT, BAR_PADDING, TEXT_DY } from '../Constants';

interface Props {
  data: number[][];
  startingPos: number[][];
  barLabel: string[];
  maxValue: number;
  color: string[];
  colorKey: string[];
  ticks: number[];
  marginLeft: number;
}

const El = styled.div`
  width: 100%;
  max-width: 47.5rem;
  margin: 1.25rem auto;
`;

const ColorKeyEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
`;

interface ColorDataType {
  color: string;
}

const ColorBox = styled.div<ColorDataType>`
  width: 0.875rem;
  height: 0.875rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color};
`;

export const StackedBarGraph = (props: Props) => {
  const {
    data,
    barLabel,
    startingPos,
    maxValue,
    color,
    colorKey,
    ticks,
    marginLeft,
  } = props;
  const svgWidth = window.innerWidth > 760 ? 760 : window.innerWidth;
  const svgHeight = (BAR_HEIGHT + (2 * BAR_PADDING)) * data.length + 25;
  return (
    <El>
      <div className='flex-div flex-vert-align-center flex-hor-align-center margin-top-05 margin-bottom-05'>
        {
          color.map((d, i) => (
            <ColorKeyEl key={i}>
              <ColorBox color={d} />
              <div>{colorKey[i]}</div>
            </ColorKeyEl>
          ))
        }
      </div>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {
          data.map((d, i) => (
            <g key={i} transform={`translate(${marginLeft},${((BAR_HEIGHT + (2 * BAR_PADDING)) * i) + BAR_PADDING})`}>
              {
                d.map((el, j) => (
                  <rect
                    x={((svgWidth - marginLeft) * startingPos[i][j]) / maxValue}
                    y={0}
                    height={BAR_HEIGHT}
                    width={((svgWidth - marginLeft) * el) / maxValue}
                    fill={color[j]}
                  />
                ))
              }
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
                      <tspan x={0} textAnchor='end' dx={-5} dy={20}>{barLabel[i].split('\n')[0]}</tspan>
                      <tspan x={0} textAnchor='end' dx={-5} dy={16}>{barLabel[i].split('\n')[1]}</tspan>
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
              {
                d.map((el, j) => (((svgWidth - marginLeft) * el) / maxValue > 20 ? (
                  <text
                    fill='#fff'
                    fontSize={12}
                    textAnchor='middle'
                    x={(((svgWidth - marginLeft) * startingPos[i][j]) / maxValue) + (((svgWidth - marginLeft) * el) / (2 * maxValue))}
                    y={0}
                    dy={TEXT_DY}
                  >
                    {
                      el.toFixed(1)
                    }
                    %
                  </text>
                ) : null))
              }
            </g>
          ))
        }
      </svg>
    </El>
  );
};
