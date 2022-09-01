import { useContext } from 'react';
import styled from 'styled-components';
import { HOUSEHOLD_TITLES_KEY } from '../Constants';
import Context from '../Context/Context';
import { HouseHoldLanguage } from '../Data/Language/household';
import { CtxDataType } from '../Types';

interface Props {
  noOfRes: number;
  data: any;
}

const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  color: var(--primary-blue);
`;

export const HouseHoldViz = (props: Props) => {
  const {
    noOfRes,
    data,
  } = props;
  const {
    language,
  } = useContext(Context) as CtxDataType;
  console.log(noOfRes, data);
  return (
    <div>
      {
        HOUSEHOLD_TITLES_KEY.map((d, i) => (
          <H2 key={i}>
            {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === d)][language]}
          </H2>
        ))
      }
    </div>
  );
};
