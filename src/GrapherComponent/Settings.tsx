import { useContext } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';
import {
  DEPARTMENTS, EDUCATION, FUNCTIONS, GENDERS,
} from '../Constants';
import '../style/selectStyle.css';

interface DropdownUnitProps {
  width?: string;
}

const DrowdownEl = styled.div<DropdownUnitProps>`
  width: ${(props) => props.width || '100%'};
  margin-bottom: 2rem;
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
    <div className='flex-div margin-bottom-05 flex-space-between'>
      <DrowdownEl
        width={selectedSubjectType === 'dumpingSites' ? '100%' : selectedSubjectType === 'households' ? 'calc(50% - 1rem)' : 'calc(75%  - 1rem)'}
      >
        <p className='label'>
          Select Department
        </p>
        <Select
          className='undp-select'
          placeholder='All Departments'
          value={selectedDepartments}
          showSearch
          allowClear
          clearIcon={<div className='clearIcon' />}
          mode='multiple'
          maxTagCount='responsive'
          onChange={(values) => { updateSelectedDepartments(values); }}
        >
          {
            DEPARTMENTS.map((d) => <Select.Option className='undp-select-option' key={d.value}>{d.label}</Select.Option>)
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
              <p className='label'>
                Select Gender
              </p>
              <Select
                className='undp-select'
                placeholder='All Genders'
                value={selectedGenders}
                onChange={(value) => { updateSelectedGenders(value); }}
              >
                {
                  GENDERS.map((d) => <Select.Option className='undp-select-option' key={d.value}>{d.label}</Select.Option>)
                }
              </Select>
            </DrowdownEl>
            <DrowdownEl
              width='calc(25% - 1rem)'
            >
              <p className='label'>
                Select Education Level
              </p>
              <Select
                className='undp-select'
                placeholder='All Departments'
                value={selectedEducations}
                showSearch
                allowClear
                mode='multiple'
                maxTagCount='responsive'
                clearIcon={<div className='clearIcon' />}
                onChange={(values) => { updateSelectedEducations(values); }}
              >
                {
                  EDUCATION.map((d) => <Select.Option className='undp-select-option' key={d.value}>{d.label}</Select.Option>)
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
          <p className='label'>
            Select Function
          </p>
          <Select
            className='undp-select'
            placeholder='All Functions'
            value={selectedFunctions}
            showSearch
            allowClear
            mode='multiple'
            maxTagCount='responsive'
            onChange={(values) => { updateSelectedFunctions(values); }}
          >
            {
              FUNCTIONS.map((d) => <Select.Option className='undp-select-option' key={d.value}>{d.label}</Select.Option>)
            }
          </Select>
        </DrowdownEl>
        )
      }
    </div>
  );
};
