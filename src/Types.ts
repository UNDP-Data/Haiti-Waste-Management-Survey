export interface CountryGroupDataType {
  'Alpha-2 code': string;
  'Alpha-3 code-1': string;
  'Country or Area': string;
  'Development classification': string;
  'Group 1': string;
  'Group 2': string;
  'Group 3': string;
  'LDC': boolean;
  'LLDC': boolean;
  'Latitude (average)': number;
  'Longitude (average)': number;
  'Numeric code': number;
  'SIDS': boolean;
  'Income group': string;
}

export interface IndicatorDataType {
  indicator: string;
  yearAvailable: number[];
  yearlyData: {
      year: number;
      value?: number;
    }[];
}
export interface DataType extends CountryGroupDataType {
  indicators: IndicatorDataType[];
  indicatorAvailable: string[];
}

export interface IndicatorOptionsDataType {
  'Data source link': string;
  'Data source name': string;
  'Indicator': string;
  'Indicator Description': string;
  'Time period': string;
  'Year': string;
  'Categorical': boolean;
}

export interface IndicatorMetaDataType {
  Pillar: string[];
  Goal: string[];
  Indicator: string;
  IndicatorLabelTable: string;
  IndicatorDescription: string;
  DataKey: string;
  DataSourceName: string;
  DataSourceLink: string;
  LabelSuffix?: string;
  LabelPrefix?: string;
  LabelFormat?: string;
  BinningRange5: number[];
  BinningRangeLarge: number[];
  Categories: number[];
  CategorizeByRanking?: boolean;
  IsCategorical?: boolean;
  IsDivergent?: boolean;
  ScatterPlot?: boolean;
  Map?: boolean;
  BarGraph?: boolean;
  Sizing?: boolean;
  Color?: boolean;
}

export interface CtxDataType {
  selectedSubjectType: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls';
  updateSelectedSubjectType: (_d: 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls') => void;
}
