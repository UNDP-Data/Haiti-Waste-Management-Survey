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
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => void;
}
