import countBy from 'lodash.countby';
import { BarGraph } from './BarGraph';
import { DonutChart } from './DonutChart';
import { StackedBarGraph } from './StackedBarGraph';
import { getValue } from '../utils/getValue';
import { GroupBarGraph } from './GroupBarGraph';

interface Props {
  data: any;
}

export const HealthFacilityViz = (props: Props) => {
  const {
    data,
  } = props;
  const Q1 = countBy(data, (d) => d['Does your H/CS have a dedicated budget for DBM management?']);
  const Q2 = countBy(data, (d) => d['Has this fund increased or decreased over the past five years?']);
  const Q3_1 = countBy(data, (d) => d['Human ressources']);
  const Q3_2 = countBy(data, (d) => d['Financial ressources']);
  const Q3_3 = countBy(data, (d) => d['Material resources']);
  const Q4 = countBy(data, (d) => d['Have your H/CS staff been trained in DBM management?']);
  const Q5 = countBy(data, (d) => d['Have you personally attended training sessions on DBM management during your aca']);
  const Q6 = countBy(data, (d) => d['Do you consider the subject of BDM important for your work as a medical profess']);
  const Q7 = countBy(data, (d) => d['Is there a manual giving the main guidelines for DBM management within your H/CS']);
  const Q8 = countBy(data, (d) => d['Have your H/CS staff been made aware of the risks associated with handling DBM?']);
  const Q9 = countBy(data, (d) => d['Does your H/CS have an employee(s) responsible for managing DBM?']);
  const Q10 = countBy(data, (d) => d['Can you make an estimate (in kg) of the quantity (kg) of DBM produced by your H/']);
  const Q11_1 = countBy(data, (d) => d['Sharps/sharps waste']);
  const Q11_2 = countBy(data, (d) => d['Anatomical waste']);
  const Q11_3 = countBy(data, (d) => d['Pharmaceutical waste']);
  const Q11_4 = countBy(data, (d) => d['Radioactive waste']);
  const Q11_5 = countBy(data, (d) => d['Chemical waste']);
  const Q12_1 = countBy(data, (d) => d.Gloves);
  const Q12_2 = countBy(data, (d) => d.Boots);
  const Q12_3 = countBy(data, (d) => d.Aprons);
  const Q12_4 = countBy(data, (d) => d.Masks);
  const Q12_5 = countBy(data, (d) => d.Glasses);
  const Q12_6 = countBy(data, (d) => d['None of these materials']);
  const Q13 = countBy(data, (d) => d['Have you detected recurrent cases of illnesses/symptoms related to poor manageme']);
  const Q14_1 = countBy(data, (d) => d['Skin illness']);
  const Q14_2 = countBy(data, (d) => d['Breathing illness']);
  const Q14_3 = countBy(data, (d) => d.Malaria);
  const Q14_4 = countBy(data, (d) => d['Dengue fever']);
  const Q14_5 = countBy(data, (d) => d.Typhoid);
  const Q14_6 = countBy(data, (d) => d.Diarrhea);
  const Q14_7 = countBy(data, (d) => d['Vaginal infection']);
  const Q15 = countBy(data, (d) => d['Do you sort waste according to its nature or its level of danger within your H/C']);
  const Q16 = countBy(data, (d) => d['Is there a space/warehouse dedicated specifically to the storage of DBM?']);
  const Q17 = countBy(data, (d) => d['Is the DBM storage space accessible to everyone?']);
  const Q18_1 = countBy(data, (d) => d['Does this institution provide transportation services for DBMs produced by your...91']);
  const Q18_2 = countBy(data, (d) => d['Does this institution provide transportation services for DBMs produced by your...92']);
  const Q18_3 = countBy(data, (d) => d['Does this institution provide transportation services for DBMs produced by your...93']);
  const Q18_4 = countBy(data, (d) => d['Does this institution provide transportation services for DBMs produced by your...94']);
  const Q18_5 = countBy(data, (d) => d['Does this institution provide transportation services for DBMs produced by your...95']);
  const Q18_6 = countBy(data, (d) => d['Does this institution provide transportation services for DBMs produced by your...96']);
  const Q19_1 = countBy(data, (d) => d['Specify whether these means are used to transport HMD from your H/CS to landfill...98']);
  const Q19_2 = countBy(data, (d) => d['Specify whether these means are used to transport HMD from your H/CS to landfill...99']);
  const Q19_3 = countBy(data, (d) => d['Specify whether these means are used to transport HMD from your H/CS to landfill...100']);
  const Q20 = countBy(data, (d) => d['Do you think the methods of collecting and transporting HBMs are safe?']);
  const Q21 = countBy(data, (d) => d['Have you ever recorded any cases of injury in the last 12 months during the coll']);
  const Q22 = countBy(data, (d) => d['Do you have a clear idea of the route and final destination of the DBMs produced']);
  const Q23_1 = countBy(data, (d) => d['Are there partnership relations between your H/CS and the following actors in re...122']);
  const Q23_2 = countBy(data, (d) => d['NGOs - Are there partnership relations between your H/CS and the following actor']);
  const Q23_3 = countBy(data, (d) => d['Community organizations']);
  const Q23_4 = countBy(data, (d) => d.SNGRS);
  const Q23_5 = countBy(data, (d) => d.UNDP);
  const Q23_6 = countBy(data, (d) => d.UNEP);
  const Q23_7 = countBy(data, (d) => d['Other UN Agencies']);
  console.log(Q3_1);
  return (
    <div>
      <h3 className='undp-typography bold margin-bottom-07'>
        Characteristics of the Health Care Establishment
      </h3>
      <div className='margin-bottom-11'>
        Does your H/HC have a dedicated budget for biomedical waste management?
        <DonutChart
          data={(getValue(Q1.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Does the town hall have adequate materials for waste collection?
        <BarGraph
          data={[(getValue(Q2.Increases) * 100) / data.length, (getValue(Q2.Steady) * 100) / data.length, (getValue(Q2.Decreases) * 100) / data.length, (getValue(Q2.undefined) * 100) / data.length]}
          barLabel={
            [
              'Increased',
              'Steady',
              'Decreased',
              'No response',
            ]
          }
          maxValue={70}
          marginLeft={100}
          ticks={[0, 20, 40, 70]}
        />
      </div>
      <div className='margin-bottom-11'>
        Give us your assessment of the availability of resources dedicated to the management of DBMs within your H/CS
        <StackedBarGraph
          data={[
            [(getValue(Q3_1.Raised) * 100) / data.length, (getValue(Q3_1.Medium) * 100) / data.length, (getValue(Q3_1.Weak) * 100) / data.length, ((getValue(Q3_1.undefined) + getValue(Q3_1['Draw/total absence'])) * 100) / data.length],
            [(getValue(Q3_2.Raised) * 100) / data.length, (getValue(Q3_2.Medium) * 100) / data.length, (getValue(Q3_2.Weak) * 100) / data.length, ((getValue(Q3_2.undefined) + getValue(Q3_2['Draw/total absence'])) * 100) / data.length],
            [(getValue(Q3_3.Raised) * 100) / data.length, (getValue(Q3_3.Medium) * 100) / data.length, (getValue(Q3_3.Weak) * 100) / data.length, ((getValue(Q3_3.undefined) + getValue(Q3_3['Draw/total absence'])) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q3_1.Raised) * 100) / data.length, ((getValue(Q3_1.Raised) + getValue(Q3_1.Medium)) * 100) / data.length, ((getValue(Q3_1.Raised) + getValue(Q3_1.Medium) + getValue(Q3_1.Weak)) * 100) / data.length],
            [0, (getValue(Q3_2.Raised) * 100) / data.length, ((getValue(Q3_2.Raised) + getValue(Q3_2.Medium)) * 100) / data.length, ((getValue(Q3_2.Raised) + getValue(Q3_2.Medium) + getValue(Q3_2.Weak)) * 100) / data.length],
            [0, (getValue(Q3_3.Raised) * 100) / data.length, ((getValue(Q3_3.Raised) + getValue(Q3_3.Medium)) * 100) / data.length, ((getValue(Q3_3.Raised) + getValue(Q3_3.Medium) + getValue(Q3_3.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Human resource',
              'Financial resource',
              'Material resource',
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#006EB5', '#4F95DD', '#94C4F5', '#AAA']}
          colorKey={
            [
              'High',
              'Medium',
              'Low',
              'Absence or No response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Personnel
      </h3>
      <div className='margin-bottom-11'>
        Does your H/HC have a dedicated budget for biomedical waste management?
        <DonutChart
          data={(getValue(Q4.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Have you personally attended training sessions on biomedical waste management during your academic and professional journey?
        <DonutChart
          data={(getValue(Q5.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Do you consider the subject of biomedical waste important for your work as a medical professional?
        <DonutChart
          data={((getValue(Q6['Very important']) + getValue(Q6.Important)) * 100) / data.length}
          subText='says important'
        />
      </div>
      <div className='margin-bottom-11'>
        Is there a manual giving the main guidelines for biomedical waste management within your H/HC?
        <DonutChart
          data={(getValue(Q7.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Have your H/HC staff been made aware of the risks associated with handling biomedical waste?
        <DonutChart
          data={(getValue(Q8.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Does your H/HC have an employee(s) responsible for managing biomedical waste?
        <DonutChart
          data={(getValue(Q9.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Production of Biomedical Waste
      </h3>
      <div className='margin-bottom-11'>
        Can you make an estimate (in kg) of the quantity (kg) of biomedical waste produced by your H/CS per day?
        <DonutChart
          data={(getValue(Q10.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Do we have an estimate of the amount of the following waste produced by your H/CS?
        <GroupBarGraph
          data={[
            [getValue(Q11_1['Less than 5kg']), getValue(Q11_2['Less than 5kg']), getValue(Q11_3['Less than 5kg']), getValue(Q11_4['Less than 5kg']), getValue(Q11_5['Less than 5kg'])],
            [getValue(Q11_1['5 - 10kg']), getValue(Q11_2['5 - 10kg']), getValue(Q11_3['5 - 10kg']), getValue(Q11_4['5 - 10kg']), getValue(Q11_5['5 - 10kg'])],
            [getValue(Q11_1['10 - 20kg']), getValue(Q11_2['10 - 20kg']), getValue(Q11_3['10 - 20kg']), getValue(Q11_4['10 - 20kg']), getValue(Q11_5['10 - 20kg'])],
            [getValue(Q11_1['20 - 50kg']), getValue(Q11_2['20 - 50kg']), getValue(Q11_3['20 - 50kg']), getValue(Q11_4['20 - 50kg']), getValue(Q11_5['20 - 50kg'])],
            [getValue(Q11_1['50 - 100kg']), getValue(Q11_2['50 - 100kg']), getValue(Q11_3['50 - 100kg']), getValue(Q11_4['50 - 100kg']), getValue(Q11_5['50 - 100kg'])],
            [getValue(Q11_1['Over 100kg']), getValue(Q11_2['Over 100kg']), getValue(Q11_3['Over 100kg']), getValue(Q11_4['Over 100kg']), getValue(Q11_5['Over 100kg'])],
          ]}
          barLabel={
            [
              '< 5Kgs',
              '5 - 10Kg',
              '10 - 20Kg',
              '20 - 50Kg',
              '50 - 100Kg',
              '>= 100Kg',
            ]
          }
          maxValue={50}
          marginLeft={100}
          color={['#7fc97f', '#beaed4', '#fdc086', '#bf5b17', '#386cb0']}
          colorKey={
            [
              'Pointed/sharp',
              'Anatomical',
              'Pharmaceutical',
              'Radioactive',
              'Chemical',
            ]
          }
          groupPadding={25}
          textDy={50}
        />
      </div>
      <div className='margin-bottom-11'>
        Indicate whether waste handling personnel use the following protective equipment
        <StackedBarGraph
          data={[
            [(getValue(Q12_1.yes) * 100) / data.length, (getValue(Q12_1.Nope) * 100) / data.length, ((data.length - getValue(Q12_1.yes) - getValue(Q12_1.Nope)) * 100) / data.length],
            [(getValue(Q12_2.yes) * 100) / data.length, (getValue(Q12_2.Nope) * 100) / data.length, ((data.length - getValue(Q12_2.yes) - getValue(Q12_2.Nope)) * 100) / data.length],
            [(getValue(Q12_3.yes) * 100) / data.length, (getValue(Q12_3.Nope) * 100) / data.length, ((data.length - getValue(Q12_3.yes) - getValue(Q12_3.Nope)) * 100) / data.length],
            [(getValue(Q12_4.yes) * 100) / data.length, (getValue(Q12_4.Nope) * 100) / data.length, ((data.length - getValue(Q12_4.yes) - getValue(Q12_4.Nope)) * 100) / data.length],
            [(getValue(Q12_5.yes) * 100) / data.length, (getValue(Q12_5.Nope) * 100) / data.length, ((data.length - getValue(Q12_5.yes) - getValue(Q12_5.Nope)) * 100) / data.length],
            [(getValue(Q12_6.yes) * 100) / data.length, (getValue(Q12_6.Nope) * 100) / data.length, ((data.length - getValue(Q12_6.yes) - getValue(Q12_6.Nope)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q12_1.yes) * 100) / data.length, ((getValue(Q12_1.yes) + getValue(Q12_1.Nope)) * 100) / data.length],
            [0, (getValue(Q12_2.yes) * 100) / data.length, ((getValue(Q12_2.yes) + getValue(Q12_2.Nope)) * 100) / data.length],
            [0, (getValue(Q12_3.yes) * 100) / data.length, ((getValue(Q12_3.yes) + getValue(Q12_3.Nope)) * 100) / data.length],
            [0, (getValue(Q12_4.yes) * 100) / data.length, ((getValue(Q12_4.yes) + getValue(Q12_4.Nope)) * 100) / data.length],
            [0, (getValue(Q12_5.yes) * 100) / data.length, ((getValue(Q12_5.yes) + getValue(Q12_5.Nope)) * 100) / data.length],
            [0, (getValue(Q12_6.yes) * 100) / data.length, ((getValue(Q12_6.yes) + getValue(Q12_6.Nope)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Gloves',
              'Boots',
              'Aprons',
              'Masks',
              'Glasses',
              'None',
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              'Yes',
              'No',
              'Don\'t know or no response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        Have you detected recurrent cases of illnesses/symptoms related to poor management of DBMs in your municipality or department?
        <DonutChart
          data={(getValue(Q13.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Specify whether you have observed the following diseases
        <StackedBarGraph
          data={[
            [(getValue(Q14_1.yes) * 100) / data.length, (getValue(Q14_1.Nope) * 100) / data.length, ((data.length - getValue(Q14_1.yes) - getValue(Q14_1.Nope)) * 100) / data.length],
            [(getValue(Q14_2.yes) * 100) / data.length, (getValue(Q14_2.Nope) * 100) / data.length, ((data.length - getValue(Q14_2.yes) - getValue(Q14_2.Nope)) * 100) / data.length],
            [(getValue(Q14_3.yes) * 100) / data.length, (getValue(Q14_3.Nope) * 100) / data.length, ((data.length - getValue(Q14_3.yes) - getValue(Q14_3.Nope)) * 100) / data.length],
            [(getValue(Q14_4.yes) * 100) / data.length, (getValue(Q14_4.Nope) * 100) / data.length, ((data.length - getValue(Q14_4.yes) - getValue(Q14_4.Nope)) * 100) / data.length],
            [(getValue(Q14_5.yes) * 100) / data.length, (getValue(Q14_5.Nope) * 100) / data.length, ((data.length - getValue(Q14_5.yes) - getValue(Q14_5.Nope)) * 100) / data.length],
            [(getValue(Q14_6.yes) * 100) / data.length, (getValue(Q14_6.Nope) * 100) / data.length, ((data.length - getValue(Q14_6.yes) - getValue(Q14_6.Nope)) * 100) / data.length],
            [(getValue(Q14_7.yes) * 100) / data.length, (getValue(Q14_7.Nope) * 100) / data.length, ((data.length - getValue(Q14_7.yes) - getValue(Q14_7.Nope)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q14_1.yes) * 100) / data.length, ((getValue(Q14_1.yes) + getValue(Q14_1.Nope)) * 100) / data.length],
            [0, (getValue(Q14_2.yes) * 100) / data.length, ((getValue(Q14_2.yes) + getValue(Q14_2.Nope)) * 100) / data.length],
            [0, (getValue(Q14_3.yes) * 100) / data.length, ((getValue(Q14_3.yes) + getValue(Q14_3.Nope)) * 100) / data.length],
            [0, (getValue(Q14_4.yes) * 100) / data.length, ((getValue(Q14_4.yes) + getValue(Q14_4.Nope)) * 100) / data.length],
            [0, (getValue(Q14_5.yes) * 100) / data.length, ((getValue(Q14_5.yes) + getValue(Q14_5.Nope)) * 100) / data.length],
            [0, (getValue(Q14_6.yes) * 100) / data.length, ((getValue(Q14_6.yes) + getValue(Q14_6.Nope)) * 100) / data.length],
            [0, (getValue(Q14_7.yes) * 100) / data.length, ((getValue(Q14_7.yes) + getValue(Q14_7.Nope)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Skin disease',
              'Respiratory\ndisease',
              'Malaria',
              'Dengue fever',
              'Typhoid',
              'Diarrhea',
              'Vaginal infection',
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              'Yes',
              'No',
              'Don\'t know or no response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Containers and Other Receptacles for DBM Storage
      </h3>
      <div className='margin-bottom-11'>
        Do you sort waste according to its nature or level of danger within your H/CS?
        <DonutChart
          data={(getValue(Q15.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        DBM Storage Spaces
      </h3>
      <div className='margin-bottom-11'>
        Is there a space/warehouse dedicated specifically to the storage of biomedical waste?
        <DonutChart
          data={(getValue(Q16.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Is the biomedical waste storage space accessible to everyone?
        <DonutChart
          data={(getValue(Q17.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Collection and Transport of DBMs
      </h3>
      <div className='margin-bottom-11'>
        Specify whether the following institutions provide DBM transportation services produced by your H/CS
        <StackedBarGraph
          data={[
            [(getValue(Q18_1.yes) * 100) / data.length, (getValue(Q18_1.Nope) * 100) / data.length, ((data.length - getValue(Q18_1.yes) - getValue(Q18_1.Nope)) * 100) / data.length],
            [(getValue(Q18_2.yes) * 100) / data.length, (getValue(Q18_2.Nope) * 100) / data.length, ((data.length - getValue(Q18_2.yes) - getValue(Q18_2.Nope)) * 100) / data.length],
            [(getValue(Q18_3.yes) * 100) / data.length, (getValue(Q18_3.Nope) * 100) / data.length, ((data.length - getValue(Q18_3.yes) - getValue(Q18_3.Nope)) * 100) / data.length],
            [(getValue(Q18_4.yes) * 100) / data.length, (getValue(Q18_4.Nope) * 100) / data.length, ((data.length - getValue(Q18_4.yes) - getValue(Q18_4.Nope)) * 100) / data.length],
            [(getValue(Q18_5.yes) * 100) / data.length, (getValue(Q18_5.Nope) * 100) / data.length, ((data.length - getValue(Q18_5.yes) - getValue(Q18_5.Nope)) * 100) / data.length],
            [(getValue(Q18_6.yes) * 100) / data.length, (getValue(Q18_6.Nope) * 100) / data.length, ((data.length - getValue(Q18_6.yes) - getValue(Q18_6.Nope)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q18_1.yes) * 100) / data.length, ((getValue(Q18_1.yes) + getValue(Q18_1.Nope)) * 100) / data.length],
            [0, (getValue(Q18_2.yes) * 100) / data.length, ((getValue(Q18_2.yes) + getValue(Q18_2.Nope)) * 100) / data.length],
            [0, (getValue(Q18_3.yes) * 100) / data.length, ((getValue(Q18_3.yes) + getValue(Q18_3.Nope)) * 100) / data.length],
            [0, (getValue(Q18_4.yes) * 100) / data.length, ((getValue(Q18_4.yes) + getValue(Q18_4.Nope)) * 100) / data.length],
            [0, (getValue(Q18_5.yes) * 100) / data.length, ((getValue(Q18_5.yes) + getValue(Q18_5.Nope)) * 100) / data.length],
            [0, (getValue(Q18_6.yes) * 100) / data.length, ((getValue(Q18_6.yes) + getValue(Q18_6.Nope)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Town hall',
              'Formal private\ncompanies',
              'Informal private\ncompanies',
              'NGOs',
              'Community based\norganization',
              'Others',
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              'Yes',
              'No',
              'Don\'t know or no response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        Specify whether you use the following means to transport DBMs from your H/CS to landfill sites
        <StackedBarGraph
          data={[
            [(getValue(Q19_1.yes) * 100) / data.length, (getValue(Q19_1.Nope) * 100) / data.length, ((data.length - getValue(Q19_1.yes) - getValue(Q19_1.Nope)) * 100) / data.length],
            [(getValue(Q19_2.yes) * 100) / data.length, (getValue(Q19_2.Nope) * 100) / data.length, ((data.length - getValue(Q19_2.yes) - getValue(Q19_2.Nope)) * 100) / data.length],
            [(getValue(Q19_3.yes) * 100) / data.length, (getValue(Q19_3.Nope) * 100) / data.length, ((data.length - getValue(Q19_3.yes) - getValue(Q19_3.Nope)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q19_1.yes) * 100) / data.length, ((getValue(Q19_1.yes) + getValue(Q19_1.Nope)) * 100) / data.length],
            [0, (getValue(Q19_2.yes) * 100) / data.length, ((getValue(Q19_2.yes) + getValue(Q19_2.Nope)) * 100) / data.length],
            [0, (getValue(Q19_3.yes) * 100) / data.length, ((getValue(Q19_3.yes) + getValue(Q19_3.Nope)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Closed devices',
              'Open devices',
              'Others',
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              'Yes',
              'No',
              'Don\'t know or no response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        Do you think the methods of collecting and transporting HBMs are safe?
        <DonutChart
          data={(getValue(Q20.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Have you ever recorded any cases of injury in the last 12 months during DBM collection and transport activities?
        <DonutChart
          data={(getValue(Q21.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Treatment / Elimination of DBM
      </h3>
      <div className='margin-bottom-11'>
        Do you have a clear idea of the route and final destination of the biomedical wastes produced by your H/CS?
        <DonutChart
          data={(getValue(Q22.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Are there partnership relations between your H/CS and the following actors in relation to the management of DBMs?
        <StackedBarGraph
          data={[
            [(getValue(Q23_1.yes) * 100) / data.length, (getValue(Q23_1.Nope) * 100) / data.length, ((data.length - getValue(Q23_1.yes) - getValue(Q23_1.Nope)) * 100) / data.length],
            [(getValue(Q23_2.yes) * 100) / data.length, (getValue(Q23_2.Nope) * 100) / data.length, ((data.length - getValue(Q23_2.yes) - getValue(Q23_2.Nope)) * 100) / data.length],
            [(getValue(Q23_3.yes) * 100) / data.length, (getValue(Q23_3.Nope) * 100) / data.length, ((data.length - getValue(Q23_3.yes) - getValue(Q23_3.Nope)) * 100) / data.length],
            [(getValue(Q23_4.yes) * 100) / data.length, (getValue(Q23_4.Nope) * 100) / data.length, ((data.length - getValue(Q23_4.yes) - getValue(Q23_4.Nope)) * 100) / data.length],
            [(getValue(Q23_5.yes) * 100) / data.length, (getValue(Q23_5.Nope) * 100) / data.length, ((data.length - getValue(Q23_5.yes) - getValue(Q23_5.Nope)) * 100) / data.length],
            [(getValue(Q23_6.yes) * 100) / data.length, (getValue(Q23_6.Nope) * 100) / data.length, ((data.length - getValue(Q23_6.yes) - getValue(Q23_6.Nope)) * 100) / data.length],
            [(getValue(Q23_7.yes) * 100) / data.length, (getValue(Q23_7.Nope) * 100) / data.length, ((data.length - getValue(Q23_7.yes) - getValue(Q23_7.Nope)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q23_1.yes) * 100) / data.length, ((getValue(Q23_1.yes) + getValue(Q23_1.Nope)) * 100) / data.length],
            [0, (getValue(Q23_2.yes) * 100) / data.length, ((getValue(Q23_2.yes) + getValue(Q23_2.Nope)) * 100) / data.length],
            [0, (getValue(Q23_3.yes) * 100) / data.length, ((getValue(Q23_3.yes) + getValue(Q23_3.Nope)) * 100) / data.length],
            [0, (getValue(Q23_4.yes) * 100) / data.length, ((getValue(Q23_4.yes) + getValue(Q23_4.Nope)) * 100) / data.length],
            [0, (getValue(Q23_5.yes) * 100) / data.length, ((getValue(Q23_5.yes) + getValue(Q23_5.Nope)) * 100) / data.length],
            [0, (getValue(Q23_6.yes) * 100) / data.length, ((getValue(Q23_6.yes) + getValue(Q23_6.Nope)) * 100) / data.length],
            [0, (getValue(Q23_7.yes) * 100) / data.length, ((getValue(Q23_7.yes) + getValue(Q23_7.Nope)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Private\ncompanies',
              'NGOs',
              'Community based\norganization',
              'NRSS',
              'UNDP',
              'UNEP',
              'Others UN\nagencies',
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              'Yes',
              'No',
              'Don\'t know or no response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
    </div>
  );
};
