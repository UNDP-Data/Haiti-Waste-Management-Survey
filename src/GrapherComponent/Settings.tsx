import { useContext } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';

// interface Props {
//   indicators?: IndicatorMetaDataType[];
// }

const El = styled.div`
  width: 25%;
  box-shadow: var(--shadow-right);
  height: 74rem;
  padding: 2rem;
  border-right: 1px solid var(--black-400);
  overflow: auto;
  @media (max-width: 960px) {
    width: 100%;
    box-shadow: var(--shadow-bottom);
    border-right: 0px solid var(--black-400);
    padding-bottom: 0;
    height: auto;
  }  
`;

const FiltersEl = styled.div`
  padding: 1rem 0 0 0;
  border-top: 1px solid var(--black-400);
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

  const onChange = (checkedValues: CheckboxValueType[]) => {
    updateSelectedDepartments(checkedValues);
  };

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
  return (
    <El>
      <FiltersEl>
        <FilterTitle>
          Select Department
        </FilterTitle>
        <CheckboxContainer>
          <Checkbox.Group options={departments} defaultValue={selectedDepartments} onChange={onChange} />
          {/* <Checkbox checked={showLabel} onChange={(e) => { updateShowLabel(e.target.checked); }}>Show Label</Checkbox> */}
        </CheckboxContainer>
      </FiltersEl>
    </El>
  );
};
