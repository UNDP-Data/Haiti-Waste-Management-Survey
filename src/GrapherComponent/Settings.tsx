import { useContext } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';
import {
  DEPARTMENTS, EDUCATION, FUNCTIONS, GENDERS,
} from '../Constants';
import '../style/selectStyle.css';
import { Translations } from '../Data/Translations';

interface DropdownUnitProps {
  width?: string;
}

const DrowdownEl = styled.div<DropdownUnitProps>`
  width: ${(props) => props.width || '100%'};
  margin-bottom: 2rem;
`;

export const Settings = () => {
  const {
    language,
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
        width={selectedSubjectType === 'dumpingSites' ? '100%' : selectedSubjectType === 'households' ? 'calc(33.33% - 1rem)' : 'calc(50%  - 1rem)'}
      >
        <p className='label'>
          {Translations[Translations.findIndex((el) => el.key === 'Select Department')][language]}
        </p>
        <Select
          className='undp-select'
          placeholder={Translations[Translations.findIndex((el) => el.key === 'All Departments')][language]}
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
              width='calc(33.33% - 1rem)'
            >
              <p className='label'>
                Select Gender
              </p>
              <Select
                className='undp-select'
                placeholder={Translations[Translations.findIndex((el) => el.key === 'All Genders')][language]}
                value={selectedGenders}
                onChange={(value) => { updateSelectedGenders(value); }}
              >
                {
                  GENDERS.map((d) => <Select.Option className='undp-select-option' key={d.value}>{Translations[Translations.findIndex((el) => el.key === d.label)][language]}</Select.Option>)
                }
              </Select>
            </DrowdownEl>
            <DrowdownEl
              width='calc(33.33% - 1rem)'
            >
              <p className='label'>
                {Translations[Translations.findIndex((el) => el.key === 'Select Education Level')][language]}
              </p>
              <Select
                className='undp-select'
                placeholder={Translations[Translations.findIndex((el) => el.key === 'All Education Levels')][language]}
                value={selectedEducations}
                showSearch
                allowClear
                mode='multiple'
                maxTagCount='responsive'
                clearIcon={<div className='clearIcon' />}
                onChange={(values) => { updateSelectedEducations(values); }}
              >
                {
                  EDUCATION.map((d) => <Select.Option className='undp-select-option' key={d.value}>{Translations[Translations.findIndex((el) => el.key === d.label)][language]}</Select.Option>)
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
          width='calc(50% - 1rem)'
        >
          <p className='label'>
            {Translations[Translations.findIndex((el) => el.key === 'Select Function')][language]}
          </p>
          <Select
            className='undp-select'
            placeholder={Translations[Translations.findIndex((el) => el.key === 'All Functions')][language]}
            value={selectedFunctions}
            showSearch
            allowClear
            clearIcon={<div className='clearIcon' />}
            mode='multiple'
            maxTagCount='responsive'
            onChange={(values) => { updateSelectedFunctions(values); }}
          >
            {
              FUNCTIONS.map((d) => <Select.Option className='undp-select-option' key={d.value}>{Translations[Translations.findIndex((el) => el.key === d.label)][language]}</Select.Option>)
            }
          </Select>
        </DrowdownEl>
        )
      }
    </div>
  );
};
