// import { useContext } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
// import { CtxDataType, IndicatorMetaDataType} from '../Types';
// import Context from '../Context/Context';

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

const CheckboxEl = styled.div`
  margin: 1rem 0;
  @media (max-width: 960px) {
    margin: 0 0.5rem;
  }  
`;

const CheckboxContainer = styled.div`
  display: inline;
  @media (max-width: 960px) {
    display: flex;
  }  
`;

// export const Settings = (props: Props) => {
export const Settings = () => {
  // const {
  //   indicators,
  // } = props;
  // const {
  //   selectedSubjectType,
  //   updateSelectedSubjectType,
  // } = useContext(Context) as CtxDataType;

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  return (
    <El>
      <FiltersEl>
        <CheckboxContainer>
          <CheckboxEl>
            <Checkbox.Group options={options} defaultValue={['Apple']} onChange={onChange} />
            {/* <Checkbox checked={showLabel} onChange={(e) => { updateShowLabel(e.target.checked); }}>Show Label</Checkbox> */}
          </CheckboxEl>
          <CheckboxEl>
            {/* <Checkbox checked={useSameRange} disabled={!yAxisIndicator} onChange={(e) => { updateUseSameRange(e.target.checked); }}>Use Same Range for Both Y-Axes</Checkbox> */}
          </CheckboxEl>
        </CheckboxContainer>
      </FiltersEl>
    </El>
  );
};
