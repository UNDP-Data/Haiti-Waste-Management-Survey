import styled from 'styled-components';
import {
  BAR_PADDING, GROUP_BAR_HEIGHT, GROUP_BAR_PADDING, GROUP_TEXT_DY,
} from '../Constants';

interface Props {
  data: number[][];
  barLabel: string[];
  maxValue: number;
  color: string[];
  colorKey: string[];
  marginLeft: number;
}

const El = styled.div`
  width: 100%;
  max-width: 62rem;
  margin: 2rem auto;
`;

const LegendEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const ColorKeyEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin: 0 1rem;
`;

interface ColorDataType {
  color: string;
}

const ColorBox = styled.div<ColorDataType>`
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color};
`;

export const GroupBarGraph = (props: Props) => {
  const {
    data,
    barLabel,
    maxValue,
    color,
    colorKey,
    marginLeft,
  } = props;
  const svgWidth = window.innerWidth > 620 ? 620 : window.innerWidth;
  const svgHeight = ((GROUP_BAR_HEIGHT * data[0].length) + (2 * GROUP_BAR_PADDING)) * data.length + 25;
  return (
    <El>
      <LegendEl>
        {
          color.map((d, i) => (
            <ColorKeyEl key={i}>
              <ColorBox color={d} />
              <div>{colorKey[i]}</div>
            </ColorKeyEl>
          ))
        }
      </LegendEl>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {
          data.map((d, i) => (
            <g key={i} transform={`translate(${marginLeft},${(((GROUP_BAR_HEIGHT * data[0].length) + (2 * GROUP_BAR_PADDING)) * i) + GROUP_BAR_PADDING})`}>
              {
                d.map((el, j) => (
                  <g transform={`translate(0,${j * (GROUP_BAR_HEIGHT + (2 * BAR_PADDING)) + BAR_PADDING})`}>
                    <rect
                      x={0}
                      y={0}
                      height={GROUP_BAR_HEIGHT}
                      width={((svgWidth - marginLeft) * el) / maxValue}
                      fill={color[j]}
                    />
                    <text
                      y={0}
                      x={((svgWidth - marginLeft) * el) / maxValue}
                      fill={color[j]}
                      dx={2}
                      dy={12}
                      fontSize={12}
                      fontWeight='bold'
                    >
                      {el}
                    </text>
                  </g>
                ))
              }
              <text
                fill='#666'
                fontSize={12}
                textAnchor='end'
                x={0}
                y={0}
                dx={-5}
                dy={GROUP_TEXT_DY}
                fontWeight='bold'
              >
                {
                  barLabel[i].split('\n').length > 1 ? (
                    <>
                      <tspan x={0} textAnchor='end' dx={-5} dy={25}>{barLabel[i].split('\n')[0]}</tspan>
                      <tspan x={0} textAnchor='end' dx={-5} dy={20}>{barLabel[i].split('\n')[1]}</tspan>
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
      </svg>
    </El>
  );
};
