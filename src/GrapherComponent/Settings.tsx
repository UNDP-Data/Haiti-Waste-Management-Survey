import { useContext } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';

// interface Props {
//   indicators?: IndicatorMetaDataType[];
// }

const El = styled.div`
  width: 100%;
  height: 74rem;
  padding: 2rem;
  overflow: auto;
  border-top: 1px solid var(--black-400);
  @media (max-width: 960px) {
    width: 100%;
    /* box-shadow: var(--shadow-bottom); */
    /* border-right: 0px solid var(--black-400); */
    padding-bottom: 0;
    height: auto;
  }  
`;

const FiltersEl = styled.div`
  padding: 1rem 0;
  /* border-bottom: 1px solid var(--black-400); */
  @media (max-width: 960px) {
    padding: 2rem 0;
  }  
`;

const FilterTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: -5px;
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div` 
`;

// export const Settings = (props: Props) => {
export const Settings = () => {
  // const {
  //   indicators,
  // } = props;
  const {
    selectedDepartments,
    updateSelectedDepartments,
  } = useContext(Context) as CtxDataType;

  const departments = [
    { label: 'nipple', value: 'nipple' },
    { label: 'West', value: 'West' },
    { label: 'North', value: 'North' },
    { label: 'South', value: 'South' },
    { label: 'Northeast', value: 'Northeast' },
    { label: 'Center', value: 'Center' },
    { label: 'South East', value: 'South East' },
    { label: 'Grand Anse', value: 'Grand Anse' },
    { label: 'Artibonite', value: 'Artibonite' },
    { label: 'North West', value: 'North West' },
  ];

  // const genders = [
  //   { label: 'Woman', value: 'Women' },
  //   { label: 'Man', value: 'Man' }
  // ];

  return (
    <El>
      <FiltersEl>
        <FilterTitle>
          Select Department
        </FilterTitle>
        <CheckboxContainer>
          <Checkbox.Group options={departments} defaultValue={selectedDepartments} onChange={(e) => { updateSelectedDepartments(e); }} />
          {/* <Checkbox checked={showLabel} onChange={(e) => { updateShowLabel(e.target.checked); }}>Show Label</Checkbox> */}
        </CheckboxContainer>
      </FiltersEl>
      {/* <FiltersEl>
        <FilterTitle>
          Select Respondent Gender
        </FilterTitle>
        <CheckboxContainer>
          <Checkbox.Group options={genders} defaultValue={selectedDepartments} onChange={onChange} />
        </CheckboxContainer>
      </FiltersEl> */}
    </El>
  );
};
