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
    selectedSubjectType,
    selectedDepartments,
    selectedGenders,
    selectedEducations,
    updateSelectedDepartments,
    updateSelectedGenders,
    updateSelectedEducations,
  } = useContext(Context) as CtxDataType;

  const departments = [
    { label: 'Artibonite', value: 'Artibonite' },
    { label: 'Centre', value: 'Center' },
    { label: 'Grand\'Anse', value: 'Grand Anse' },
    { label: 'Nippes', value: 'nipple' },
    { label: 'Nord', value: 'North' },
    { label: 'Nord-Est', value: 'Northeast' },
    { label: 'Nord-Ouest', value: 'North West' },
    { label: 'Ouest', value: 'West' },
    { label: 'Sud-Est', value: 'South East' },
    { label: 'Sud', value: 'South' },
  ];

  const genders = [
    { label: 'Female', value: 'Women' },
    { label: 'Male', value: 'Man' },
  ];

  const education = [
    { label: 'University', value: 'University' },
    { label: 'Secondary school', value: 'Secondary' },
    { label: 'Primary school', value: 'Primary' },
    { label: 'Literacy program', value: 'Participated in a literacy program' },
    { label: 'No formal education', value: 'Unschooled' },
  ];

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
      {
        (selectedSubjectType === 'households')
        && (
          <>
            <FiltersEl>
              <FilterTitle>
                Select Respondent Gender
              </FilterTitle>
              <CheckboxContainer>
                <Checkbox.Group options={genders} defaultValue={selectedGenders} onChange={(e) => { updateSelectedGenders(e); }} />
              </CheckboxContainer>
            </FiltersEl>
            <FiltersEl>
              <FilterTitle>
                Select Head of Household&apos;s Education Level
              </FilterTitle>
              <CheckboxContainer>
                <Checkbox.Group options={education} defaultValue={selectedEducations} onChange={(e) => { updateSelectedEducations(e); }} />
              </CheckboxContainer>
            </FiltersEl>
          </>
        )
      }
    </El>
  );
};
