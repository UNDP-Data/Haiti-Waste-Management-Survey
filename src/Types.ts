import { CheckboxValueType } from 'antd/lib/checkbox/Group';

export interface OptionDataType {
  DataLabel: string;
  en: string;
  fr: string;
}

export interface CtxDataType {
  selectedSubjectType: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls';
  selectedDepartments: string[];
  selectedGenders: string;
  selectedEducations: string[];
  selectedFunctions: string[];
  language: 'en' | 'fr';
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => void;
  updateSelectedDepartments: (_d: CheckboxValueType[]) => void;
  updateSelectedGenders: (_d: string) => void;
  updateLanguage: (_d: 'en' | 'fr') => void;
  updateSelectedEducations: (_d: CheckboxValueType[]) => void;
  updateSelectedFunctions: (_d: CheckboxValueType[]) => void;
}

export interface OptionDataTypes {
  DataLabel: string;
  en: string;
  fr: string;
}

export interface QuestionDataType {
      'Type': 'single' | 'multiquestion';
      'Question': {
          'en': string;
          'fr': string;
      },
      'DataLabel': string;
      'Options': OptionDataTypes[];
      'SubjectType': 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls';
}

export interface QuestionGroupDataType {
  en: string;
  fr: string;
  questions: QuestionDataType[];
}

export interface SurveyQuestionDataType {
  households: QuestionGroupDataType[];
  enterprises: QuestionGroupDataType[];
  projects: QuestionGroupDataType[];
  dumpingSites: QuestionGroupDataType[];
  healthFacilities: QuestionGroupDataType[];
  townHalls: QuestionGroupDataType[];
}
