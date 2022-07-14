import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { createContext } from 'react';
import { CtxDataType } from '../Types';

const Context = createContext<CtxDataType>({
  selectedSubjectType: 'households',
  selectedDepartments: [],
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => {},
  updateSelectedDepartments: (_d: CheckboxValueType[]) => {},
});

export default Context;
