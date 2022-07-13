export interface SurveyQuestionDataType {
  Question: {
    en: string;
    fr: string;
  };
  DataLabel: string;
  Options: {
    en: string[];
    fr: string[];
  };
  SubjectType: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls';
}

export interface CtxDataType {
  selectedSubjectType: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls';
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => void;
}
