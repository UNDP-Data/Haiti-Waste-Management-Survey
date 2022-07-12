import {
  useContext, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { DataType, IndicatorMetaDataWithYear } from '../Types';
// import Context from '../Context/Context';
import { HorizontalBarChart } from './HorizontalBarChart';

interface Props {
  data: DataType[];
  indicators: IndicatorMetaDataWithYear[];
  fullWidth: boolean;
}

interface ElProps {
  fullWidth: boolean;
}

const El = styled.div<ElProps>`
  width: ${(props) => (props.fullWidth ? '100%' : '75%')};
  box-shadow: var(--shadow-right);
  overflow: auto;
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
  // const {
  //   year,
  // } = useContext(Context) as CtxDataType;

  return (
    <El id='graph-node' fullWidth={fullWidth}>
      <HorizontalBarChart
        data={data}
        indicators={indicators}
      />
    </El>
  );
};
