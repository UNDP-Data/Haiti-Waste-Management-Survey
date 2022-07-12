import { useContext } from 'react';
import styled from 'styled-components';
import maxBy from 'lodash.maxby';
import orderBy from 'lodash.orderby';
import { format } from 'd3-format';
import {
  scaleOrdinal, scaleLinear, scaleThreshold,
} from 'd3-scale';
import minBy from 'lodash.minby';
import {
  CtxDataType, DataType, IndicatorMetaDataWithYear,
} from '../Types';
import Context from '../Context/Context';
import {
  COLOR_SCALES, CONTINENTS, INCOME_GROUPS,
} from '../Constants';

interface Props {
  data: DataType[];
  indicators: IndicatorMetaDataWithYear[];
}

const El = styled.div`
  height: calc(100% - 71px);
`;

export const HorizontalBarChart = (props: Props) => {
  const {
    data,
    indicators,
  } = props;
  const {
    year,
    xAxisIndicator,
    showMostRecentData,
    colorIndicator,
    selectedCountries,
    selectedRegions,
    selectedIncomeGroups,
    selectedCountryGroup,
    reverseOrder,
  } = useContext(Context) as CtxDataType;
  const queryParams = new URLSearchParams(window.location.search);
  const svgWidth = queryParams.get('showSettings') === 'false' && window.innerWidth > 960 ? 1280 : 960;
  const margin = {
    top: 80,
    bottom: 10,
    left: 225,
    right: 40,
  };
  const graphWidth = svgWidth - margin.left - margin.right;
  const xIndicatorMetaData = indicators[indicators.findIndex((indicator) => indicator.IndicatorLabelTable === xAxisIndicator)];
  const colorIndicatorMetaData = indicators[indicators.findIndex((indicator) => indicator.IndicatorLabelTable === colorIndicator)];

  const dataFormatted = orderBy(
    data.map((d) => {
      const xIndicatorIndex = d.indicators.findIndex((el) => xIndicatorMetaData.DataKey === el.indicator);
      const colorIndicatorIndex = colorIndicator === 'Human Development Index' ? d.indicators.findIndex((el) => el.indicator === 'Human development index (HDI)') : d.indicators.findIndex((el) => colorIndicatorMetaData?.DataKey === el.indicator);

      const xVal = xIndicatorIndex === -1 ? undefined
        : year !== -1 && !showMostRecentData ? d.indicators[xIndicatorIndex].yearlyData[d.indicators[xIndicatorIndex].yearlyData.findIndex((el) => el.year === year)]?.value
          : d.indicators[xIndicatorIndex].yearlyData[d.indicators[xIndicatorIndex].yearlyData.length - 1]?.value;
      const colorVal = colorIndicator === 'Continents' ? d['Group 1']
        : colorIndicator === 'Income Groups' ? d['Income group']
          : colorIndicator === 'Human Development Index' ? year !== -1 && !showMostRecentData ? d.indicators[colorIndicatorIndex].yearlyData[d.indicators[colorIndicatorIndex].yearlyData.findIndex((el) => el.year === year)]?.value
            : d.indicators[colorIndicatorIndex].yearlyData[d.indicators[colorIndicatorIndex].yearlyData.length - 1]?.value
            : colorIndicatorIndex === -1 ? undefined
              : year !== -1 && !showMostRecentData ? d.indicators[colorIndicatorIndex].yearlyData[d.indicators[colorIndicatorIndex].yearlyData.findIndex((el) => el.year === year)]?.value
                : d.indicators[colorIndicatorIndex].yearlyData[d.indicators[colorIndicatorIndex].yearlyData.length - 1]?.value;
      const countryGroup = selectedCountryGroup === 'All' ? true : d[selectedCountryGroup];
      const incomeGroup = !!(selectedIncomeGroups.length === 0 || selectedIncomeGroups.indexOf(d['Income group']) !== -1);
      const region = !!(selectedRegions.length === 0 || selectedRegions.indexOf(d['Group 2']) !== -1);
      const country = !!(selectedCountries.length === 0 || selectedCountries.indexOf(d['Country or Area']) !== -1);
      const xYear = year === -1 || showMostRecentData ? d.indicators[xIndicatorIndex].yearlyData[d.indicators[xIndicatorIndex].yearlyData.length - 1]?.year : year;
      const colorYear = (year === -1 || showMostRecentData) && colorIndicatorIndex !== -1 ? d.indicators[colorIndicatorIndex].yearlyData[d.indicators[colorIndicatorIndex].yearlyData.length - 1]?.year : year;
      return ({
        countryCode: d['Alpha-3 code-1'],
        countryName: d['Country or Area'],
        xVal,
        colorVal,
        region,
        countryGroup,
        incomeGroup,
        country,
        xYear,
        colorYear,
      });
    }).filter((d) => d.xVal !== undefined && d.country && d.countryGroup && d.incomeGroup && d.region), 'xVal', reverseOrder ? 'desc' : 'asc',
  );

  const svgHeight = dataFormatted.length * 25 + margin.top + margin.bottom;
  const xMaxValue = maxBy(dataFormatted, (d) => d.xVal) ? maxBy(dataFormatted, (d) => d.xVal)?.xVal as number : 0;
  const xMinValue = minBy(dataFormatted, (d) => d.xVal) ? minBy(dataFormatted, (d) => d.xVal)?.xVal as number : 0;

  const widthScale = scaleLinear().domain([xMinValue > 0 ? 0 : xMinValue, xMaxValue]).range([0, graphWidth]).nice();

  let colorList = colorIndicator === 'Income Groups' ? COLOR_SCALES.Divergent.Color4 : COLOR_SCALES.Categorical;

  if (colorIndicatorMetaData?.IsCategorical) {
    switch (colorIndicatorMetaData?.Categories.length) {
      case 5:
        colorList = COLOR_SCALES.Linear.RedColor5;
        break;
      case 6:
        colorList = COLOR_SCALES.Linear.RedColor6;
        break;
      case 7:
        colorList = COLOR_SCALES.Linear.RedColor7;
        break;
      case 8:
        colorList = COLOR_SCALES.Linear.RedColor8;
        break;
      case 9:
        colorList = COLOR_SCALES.Linear.RedColor9;
        break;
      default:
        colorList = COLOR_SCALES.Linear.RedColor10;
        break;
    }
  }

  if (colorIndicatorMetaData?.IsDivergent) {
    switch (colorIndicatorMetaData?.Categories.length) {
      case 4:
        colorList = COLOR_SCALES.Divergent.Color4;
        break;
      case 5:
        colorList = COLOR_SCALES.Divergent.Color5;
        break;
      case 7:
        colorList = COLOR_SCALES.Divergent.Color7;
        break;
      case 9:
        colorList = COLOR_SCALES.Divergent.Color9;
        break;
      default:
        colorList = COLOR_SCALES.Divergent.Color11;
        break;
    }
  }

  const colorDomain = colorIndicator === 'Continents' ? CONTINENTS
    : colorIndicator === 'Income Groups' ? INCOME_GROUPS
      : colorIndicator === 'Human Development Index' ? [0.55, 0.7, 0.8]
        : colorIndicatorMetaData?.Categories ? colorIndicatorMetaData?.Categories
          : [0, 0];
  const colorScale = colorIndicator === 'Human Development Index' ? scaleThreshold<string | number, string>().domain(colorDomain).range(COLOR_SCALES.Divergent.Color4).unknown('#666') : scaleOrdinal<string | number, string>().domain(colorDomain).range(colorList).unknown('#666');

  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <text
          x={25}
          y={50}
          fontSize={18}
          fill='#212121'
        >
          {xIndicatorMetaData.IndicatorLabelTable}
        </text>
        <g
          transform={`translate(${margin.left},${margin.top})`}
        >
          {
            dataFormatted.map((d, i) => {
              if (d.xVal === undefined) return null;
              return (
                <g
                  key={i}
                >
                  <text
                    fill={d.colorVal ? colorScale(d.colorVal) : '#212121'}
                    y={i * 25}
                    x={0}
                    dx={-50}
                    dy={14}
                    fontSize={12}
                    textAnchor='end'
                  >
                    {d.countryName.length < 25 ? d.countryName : `${d.countryName.substring(0, 25)}...`}
                  </text>
                  <rect
                    y={i * 25}
                    x={widthScale(Math.min(0, d.xVal))}
                    height={20}
                    fill={d.colorVal ? colorScale(d.colorVal) : '#666'}
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
                    {d.xVal < 1000000 ? format(',')(parseFloat(d.xVal.toFixed(2))).replace(',', ' ') : format('.3s')(d.xVal).replace('G', 'B')}
                  </text>
                </g>
              );
            })
          }
          <line
            x1={widthScale(0)}
            x2={widthScale(0)}
            y1={-2.5}
            y2={dataFormatted.length * 25 - 2.5}
            stroke='#212121'
            strokeWidth={1}
          />
        </g>
      </svg>
    </El>
  );
};
