import { useContext } from 'react';
import { Segmented, Select } from 'antd';
import { CtxDataType } from '../Types';
import { Logo } from '../Icons';
import Context from '../Context/Context';
import { Settings } from './Settings';
import '../style/selectStyle.css';
import '../style/segmentedStyle.css';
import '../style/statCardStyle.css';
import { InsightText } from './InsightText';
import { HouseHoldViz } from './HouseHoldViz';
import { EnterprisesViz } from './EnterprisesViz';
import { TownHallViz } from './TownHallViz';
import { DumpingSiteViz } from './DumpingSiteViz';
import { ProjectsViz } from './ProjectsViz';
import { HealthFacilityViz } from './HealthFacilityViz';
import { Translations } from '../Data/Translations';

interface Props {
  data: any;
}
export const GrapherComponent = (props: Props) => {
  const {
    data,
  } = props;
  const {
    selectedSubjectType,
    selectedDepartments,
    selectedGenders,
    selectedEducations,
    selectedFunctions,
    language,
    updateSelectedSubjectType,
    updateLanguage,
  } = useContext(Context) as CtxDataType;

  const graphData = data[selectedSubjectType];

  let filteredData = selectedDepartments.length > 0 ? graphData.filter((d:any) => selectedDepartments.indexOf(d.Department) > -1) : graphData;
  if (selectedSubjectType === 'households') {
    filteredData = selectedGenders !== 'All Genders' ? filteredData.filter((d:any) => selectedGenders === d['Gender of respondent']) : filteredData;
    filteredData = selectedEducations.length > 0 ? filteredData.filter((d:any) => selectedEducations.indexOf(d['Level of education of the head of the household.']) > -1) : filteredData;
  }

  if (selectedSubjectType === 'enterprises' || selectedSubjectType === 'projects' || selectedSubjectType === 'healthFacilities' || selectedSubjectType === 'townHalls') {
    filteredData = selectedFunctions.length > 0 ? filteredData.filter((d:any) => selectedFunctions.indexOf(d.function_resp) > -1) : filteredData;
  }

  return (
    <>
      <div className='undp-container max-width'>
        <div className='flex-div flex-vert-align-center flex-space-between margin-bottom-07'>
          <div className='flex-div flex-vert-align-center'>
            <Logo height={75} />
            <div>
              <h4 className='undp-typography' style={{ color: 'var(--blue-600)', marginBottom: 0 }}>Data Futures Platform</h4>
              <h5 className='undp-typography' style={{ marginBottom: 0 }}>Haiti Waste Management</h5>
            </div>
          </div>
          <Select
            className='undp-select undp-language-select'
            defaultValue='en'
            value={language}
            onChange={(value) => { updateLanguage(value as 'en' | 'fr'); }}
          >
            <Select.Option className='undp-select-option' value='en'>English</Select.Option>
            <Select.Option className='undp-select-option' value='fr'>French</Select.Option>
          </Select>
        </div>
        <p className='undp-typography Ssmall-font margin-bottom-07 italics' style={{ color: 'var(--gray-600)' }}>
          {
            language === 'en'
              ? 'As its first challenge, the UNDP Haiti Accelerator Lab is working on solid waste management. Solid waste is one of the major problems faced by the local authorities in Haiti. Despite the intervention of multiple actors such as the central government, the municipalities, private enterprises and NGOs, this problem remains unsolved particularly in the urban centres. To avail data for decision making and to deepen the knowledge on waste management in Haiti, the Accelerator Lab conducted a national survey to gather data on perceptions, local initiatives and public actions related to waste management. This page allows users to explore data and insights from this survey.'
              : 'La gestion des déchets solides est définie comme l’enjeu principal de l’UNDP Haïti Accelerator Lab. En effet, les déchets solides représentent l\'une des difficultés majeures auxquelles sont confrontées les autorités locales en Haïti. Malgré l\'intervention de multiples acteurs tels que le gouvernement central, les municipalités, les entreprises privées ou encore les ONG, ce problème reste non résolu en particulier dans les centres urbains. Afin de disposer de données destinées à la prise de décisions et au développement des connaissances sur la gestion des déchets en Haïti, l\'Accelerator Lab a mené une enquête nationale. Cette dernière a pour but de recueillir des données sur les perceptions, les initiatives locales et les actions publiques liées à la gestion des déchets. Cette page permet aux utilisateurs d\'explorer les données et les résultats de cette enquête.'
          }
        </p>
        <hr className='undp-style dark' />
        <div>
          <div className='flex-div flex-hor-align-center margin-top-09 margin-bottom-09'>
            <Segmented
              className='undp-segmented'
              value={selectedSubjectType}
              onChange={(value) => { updateSelectedSubjectType(value as 'households' | 'enterprises' | 'projects' | 'dumpingSites' | 'healthFacilities' | 'townHalls'); }}
              options={
                [
                  {
                    label: Translations[Translations.findIndex((el) => el.key === 'Households')][language],
                    value: 'households',
                  },
                  {
                    label: Translations[Translations.findIndex((el) => el.key === 'enterprises')][language],
                    value: 'enterprises',
                  },
                  {
                    label: Translations[Translations.findIndex((el) => el.key === 'Projects')][language],
                    value: 'projects',
                  },
                  {
                    label: Translations[Translations.findIndex((el) => el.key === 'Dumping Sites')][language],
                    value: 'dumpingSites',
                  },
                  {
                    label: Translations[Translations.findIndex((el) => el.key === 'Health Facilities')][language],
                    value: 'healthFacilities',
                  },
                  {
                    label: Translations[Translations.findIndex((el) => el.key === 'Town Halls')][language],
                    value: 'townHalls',
                  },
                ]
              }
            />
          </div>
          <div className='margin-top-07 margin-bottom-09'>
            <InsightText />
          </div>
          <Settings />
          <div className='stat-card margin-bottom-10'>
            <h4 style={{ margin: 0, fontWeight: 'normal' }} className='align-center'>
              {language === 'en' ? 'Showing results for' : 'Affichage des résultats pour'}
              {' '}
              <span className='bold'>{filteredData.length}</span>
              {' '}
              {
                selectedSubjectType === 'households'
                  ? Translations[Translations.findIndex((el) => el.key === 'Households')][language].toLowerCase()
                  : selectedSubjectType === 'enterprises'
                    ? Translations[Translations.findIndex((el) => el.key === 'enterprises')][language].toLowerCase()
                    : selectedSubjectType === 'dumpingSites'
                      ? Translations[Translations.findIndex((el) => el.key === 'Dumping Sites')][language].toLowerCase()
                      : selectedSubjectType === 'healthFacilities'
                        ? Translations[Translations.findIndex((el) => el.key === 'Health Facilities')][language].toLowerCase()
                        : selectedSubjectType === 'projects'
                          ? Translations[Translations.findIndex((el) => el.key === 'Projects')][language].toLowerCase()
                          : Translations[Translations.findIndex((el) => el.key === 'Town Halls')][language].toLowerCase()
              }
            </h4>
          </div>
          {
            selectedSubjectType === 'households' ? <HouseHoldViz data={filteredData} /> : null
          }
          {
            selectedSubjectType === 'enterprises' ? <EnterprisesViz data={filteredData} /> : null
          }
          {
            selectedSubjectType === 'townHalls' ? <TownHallViz data={filteredData} /> : null
          }
          {
            selectedSubjectType === 'dumpingSites' ? <DumpingSiteViz data={filteredData} /> : null
          }
          {
            selectedSubjectType === 'projects' ? <ProjectsViz data={filteredData} /> : null
          }
          {
            selectedSubjectType === 'healthFacilities' ? <HealthFacilityViz data={filteredData} /> : null
          }
        </div>
      </div>
    </>
  );
};
