import { CheckboxValueType } from 'antd/lib/checkbox/Group';

export interface OptionDataType {
  DataLabel: string;
  en: string;
  fr: string;
}

export interface SurveyQuestionDataType {
  Question: {
    en: string;
    fr: string;
  };
  DataLabel: string;
  Options: OptionDataType[];
  SubjectType: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls';
}

export interface CtxDataType {
  selectedSubjectType: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls';
  selectedDepartments: string[];
  selectedGenders: string[];
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => void;
  updateSelectedDepartments: (_d: CheckboxValueType[]) => void;
  updateSelectedGenders: (_d: CheckboxValueType[]) => void;
}
