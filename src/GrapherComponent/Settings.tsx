import { useContext } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';
import {
  DEPARTMENTS, EDUCATION, FUNCTIONS, GENDERS,
} from '../Constants';

const El = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: space-between; 
`;

const FilterTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 0rem;
`;

interface DropdownUnitProps {
  width?: string;
}

const DrowdownEl = styled.div<DropdownUnitProps>`
  width: ${(props) => props.width || '100%'};
  margin-bottom: 2rem;
  min-width: 30rem;
`;

export const Settings = () => {
  const {
    selectedSubjectType,
    selectedDepartments,
    selectedGenders,
    selectedEducations,
    selectedFunctions,
    updateSelectedDepartments,
    updateSelectedGenders,
    updateSelectedEducations,
    updateSelectedFunctions,
  } = useContext(Context) as CtxDataType;
  return (
    <El>
      <DrowdownEl
        width={selectedSubjectType === 'dumpingSites' ? '100%' : selectedSubjectType === 'households' ? 'calc(50% - 1rem)' : 'calc(75%  - 1rem)'}
      >
        <FilterTitle>
          Select Department
        </FilterTitle>
        <Select
          className='select-box'
          placeholder='All Departments'
          value={selectedDepartments}
          showSearch
          allowClear
          mode='multiple'
          maxTagCount='responsive'
          onChange={(values) => { updateSelectedDepartments(values); }}
        >
          {
            DEPARTMENTS.map((d) => <Select.Option key={d.value}>{d.label}</Select.Option>)
          }
        </Select>
      </DrowdownEl>
      {
        (selectedSubjectType === 'households')
        && (
          <>
            <DrowdownEl
              width='calc(25% - 1rem)'
            >
              <FilterTitle>
                Select Gender
              </FilterTitle>
              <Select
                className='select-box single-select-box'
                placeholder='All Genders'
                value={selectedGenders}
                onChange={(value) => { updateSelectedGenders(value); }}
              >
                {
                  GENDERS.map((d) => <Select.Option key={d.value}>{d.label}</Select.Option>)
                }
              </Select>
            </DrowdownEl>
            <DrowdownEl
              width='calc(25% - 1rem)'
            >
              <FilterTitle>
                Select Education Level
              </FilterTitle>
              <Select
                className='select-box'
                placeholder='All Departments'
                value={selectedEducations}
                showSearch
                allowClear
                mode='multiple'
                maxTagCount='responsive'
                onChange={(values) => { updateSelectedEducations(values); }}
              >
                {
                  EDUCATION.map((d) => <Select.Option key={d.value}>{d.label}</Select.Option>)
                }
              </Select>
            </DrowdownEl>
          </>
        )
      }
      {
        (selectedSubjectType !== 'households' && selectedSubjectType !== 'dumpingSites')
        && (
        <DrowdownEl
          width='calc(25% - 1rem)'
        >
          <FilterTitle>
            Select Function
          </FilterTitle>
          <Select
            className='select-box'
            placeholder='All Functions'
            value={selectedFunctions}
            showSearch
            allowClear
            mode='multiple'
            maxTagCount='responsive'
            onChange={(values) => { updateSelectedFunctions(values); }}
          >
            {
              FUNCTIONS.map((d) => <Select.Option key={d.value}>{d.label}</Select.Option>)
            }
          </Select>
        </DrowdownEl>
        )
      }
    </El>
  );
};
