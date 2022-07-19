import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { createContext } from 'react';
import { CtxDataType } from '../Types';

const Context = createContext<CtxDataType>({
  selectedSubjectType: 'households',
  selectedDepartments: [],
  selectedGenders: [],
  selectedEducations: [],
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => {},
  updateSelectedDepartments: (_d: CheckboxValueType[]) => {},
  updateSelectedGenders: (_d: CheckboxValueType[]) => {},
  updateSelectedEducations: (_d: CheckboxValueType[]) => {},
});

export default Context;
