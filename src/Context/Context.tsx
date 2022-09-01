import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { createContext } from 'react';
import { CtxDataType } from '../Types';

const Context = createContext<CtxDataType>({
  selectedSubjectType: 'households',
  selectedDepartments: [],
  selectedGenders: 'All Genders',
  selectedEducations: [],
  selectedFunctions: [],
  language: 'en',
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => {},
  updateSelectedDepartments: (_d: CheckboxValueType[]) => {},
  updateLanguage: (_d: 'en' | 'fr') => {},
  updateSelectedGenders: (_d: string) => {},
  updateSelectedEducations: (_d: CheckboxValueType[]) => {},
  updateSelectedFunctions: (_d: CheckboxValueType[]) => {},
});

export default Context;
