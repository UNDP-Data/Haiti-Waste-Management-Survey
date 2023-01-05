import { useContext } from 'react';
import countBy from 'lodash.countby';
import { BarGraph } from './BarGraph';
import { DonutChart } from './DonutChart';
import { StackedBarGraph } from './StackedBarGraph';
import { getValue } from '../utils/getValue';
import { Translations } from '../Data/Translations';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';

interface Props {
  data: any;
}

export const TownHallViz = (props: Props) => {
  const {
    data,
  } = props;
  const {
    language,
  } = useContext(Context) as CtxDataType;
  const Q1 = countBy(data, (d) => d['Does the town hall have a department in charge of SWM in your municipality?']);
  const Q2 = countBy(data, (d) => d['Does the town hall have adequate materials for waste collection?']);
  const Q3 = countBy(data, (d) => d['Does the town hall have solid waste dump sites of more than 1000 square meters?']);
  const Q4 = countBy(data, (d) => d.n_people);
  const Q5 = countBy(data, (d) => d.n_men);
  const Q6 = countBy(data, (d) => d.n_women);
  const Q7 = countBy(data, (d) => d['Does the town hall have a budget dedicated specifically to solid waste managemen']);
  const Q8_1 = countBy(data, (d) => d['Waste collection']);
  const Q8_2 = countBy(data, (d) => d.Sorting);
  const Q8_3 = countBy(data, (d) => d.Treatment);
  const Q8_4 = countBy(data, (d) => d.Transportation);
  const Q8_5 = countBy(data, (d) => d.landfilled);
  const Q8_6 = countBy(data, (d) => d.Burning);
  const Q8_7 = countBy(data, (d) => d['Recycling, composting']);
  const Q8_8 = countBy(data, (d) => d.Others);
  const Q9 = countBy(data, (d) => d['How many collection days per month does the town hall carry out?']);
  const Q10_1 = countBy(data, (d) => d['Waste collection2']);
  const Q10_2 = countBy(data, (d) => d.Sorting3);
  const Q10_3 = countBy(data, (d) => d.Treatment4);
  const Q10_4 = countBy(data, (d) => d.Transportation5);
  const Q10_5 = countBy(data, (d) => d.landfilled6);
  const Q10_6 = countBy(data, (d) => d.Burning7);
  const Q10_7 = countBy(data, (d) => d['Recycling, composting8']);
  const Q10_8 = countBy(data, (d) => d['Promotion for recycling (including crafts)']);
  const Q10_9 = countBy(data, (d) => d.Sensitization);
  const Q11 = countBy(data, (d) => d['Do we weigh the solid waste collected per day or per week?']);
  const Q12 = countBy(data, (d) => d['Are there other actors involved in solid waste management in your municipality?']);
  const Q14_1 = countBy(data, (d) => d['Private companies22']);
  const Q14_2 = countBy(data, (d) => d.NGO23);
  const Q14_3 = countBy(data, (d) => d['Community organizations25']);
  const Q14_4 = countBy(data, (d) => d.SNGRS27);
  const Q14_5 = countBy(data, (d) => d.UNDP);
  const Q14_6 = countBy(data, (d) => d.UNEP);
  const Q14_7 = countBy(data, (d) => d['Other UN Agencies']);
  const Q14_8 = countBy(data, (d) => d['Decentralized cooperation (with foreign municipalities)']);
  const Q15_1 = countBy(data, (d) => d.Households45);
  const Q15_2 = countBy(data, (d) => d['Public markets46']);
  const Q15_3 = countBy(data, (d) => d.Companies);
  const Q15_4 = countBy(data, (d) => d.Schools);
  const Q15_5 = countBy(data, (d) => d['Hospitals/Health Centers']);
  const Q16_1 = countBy(data, (d) => d['Agricultural waste']);
  const Q16_2 = countBy(data, (d) => d['plastic waste']);
  const Q16_3 = countBy(data, (d) => d['Metals (iron, aluminum)']);
  const Q16_4 = countBy(data, (d) => d['medical waste']);
  const Q16_5 = countBy(data, (d) => d['Textile waste']);
  const Q16_6 = countBy(data, (d) => d['Industrial waste']);
  const Q17 = countBy(data, (d) => d['Have you detected any recurrent cases of solid waste-related illnesses in your m']);
  const Q18_1 = countBy(data, (d) => d['Skin illness']);
  const Q18_2 = countBy(data, (d) => d['Breathing illness']);
  const Q18_3 = countBy(data, (d) => d.Malaria);
  const Q18_4 = countBy(data, (d) => d['Dengue fever']);
  const Q18_5 = countBy(data, (d) => d.Typhoid);
  const Q18_6 = countBy(data, (d) => d.Diarrhea);
  const Q18_7 = countBy(data, (d) => d['Vaginal infection']);
  const Q19 = countBy(data, (d) => d['Have you identified any environmental problems related to solid waste management']);
  const Q20_1 = countBy(data, (d) => d['Landfill sites are close to rivers, shores, water sources and people\'s places of']);
  const Q20_2 = countBy(data, (d) => d['Unsanitary road networks']);
  const Q20_3 = countBy(data, (d) => d['Obstruction of road networks']);
  const Q20_4 = countBy(data, (d) => d['Obstruction of rainwater drainage ditches']);
  const Q20_5 = countBy(data, (d) => d.floods);
  const Q20_6 = countBy(data, (d) => d['Unsanitary public markets']);
  const Q20_7 = countBy(data, (d) => d['Unsanitary public beaches']);
  const Q20_8 = countBy(data, (d) => d['Destruction of mangroves']);
  const Q20_9 = countBy(data, (d) => d['Animal mortality']);
  const Q21 = countBy(data, (d) => d['According to you, what is the level of commitment of the population of your muni']);
  const Q22 = countBy(data, (d) => d['In your opinion, what is the level of awareness of the population of your munici']);
  return (
    <div>
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Equipment and Infrastructure')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Does the town hall have a department in charge of SWM in your municipality?')][language]}
        <DonutChart
          data={(getValue(Q1.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Does the town hall have adequate materials for waste collection?')][language]}
        <DonutChart
          data={(getValue(Q2.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Does the town hall have solid waste dump sites of more than 1000 square meters?')][language]}
        <DonutChart
          data={(getValue(Q3.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Human Resources')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'How many employees of the company/CBO work in the solid waste sector?')][language]}
        <BarGraph
          data={[(getValue(Q4.undefined) * 100) / data.length, (getValue(Q4['Less than 5']) * 100) / data.length, ((getValue(Q4['5 - 10']) + getValue(Q4['10 - 15'])) * 100) / data.length, (getValue(Q4['15 - 20']) * 100) / data.length, (getValue(Q4['20 - 50']) * 100) / data.length, (getValue(Q4['50 - 100']) * 100) / data.length, (getValue(Q4['Over 100']) * 100) / data.length]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === '0 or No Response')][language],
              '<5',
              '5-15',
              '15-20',
              '20-50',
              '50-100',
              '>=100',
            ]
          }
          maxValue={70}
          marginLeft={125}
          ticks={[0, 20, 40, 70]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'How many male employees of the company/CBO work in the solid waste sector?')][language]}
        <BarGraph
          data={[(getValue(Q5.undefined) * 100) / data.length, (getValue(Q5['Less than 5']) * 100) / data.length, ((getValue(Q5['5 - 10']) + getValue(Q5['10 - 15'])) * 100) / data.length, (getValue(Q5['15 - 20']) * 100) / data.length, (getValue(Q5['20 - 50']) * 100) / data.length, (getValue(Q5['50 - 100']) * 100) / data.length, (getValue(Q5['Over 100']) * 100) / data.length]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === '0 or No Response')][language],
              '<5',
              '5-15',
              '15-20',
              '20-50',
              '50-100',
              '>=100',
            ]
          }
          maxValue={70}
          marginLeft={125}
          ticks={[0, 20, 40, 70]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'How many women employees of the company/CBO work in the solid waste sector?')][language]}
        <BarGraph
          data={[(getValue(Q6.undefined) * 100) / data.length, (getValue(Q6['Less than 5']) * 100) / data.length, ((getValue(Q6['5 - 10']) + getValue(Q6['10 - 15'])) * 100) / data.length, (getValue(Q6['15 - 20']) * 100) / data.length, (getValue(Q6['20 - 50']) * 100) / data.length, (getValue(Q6['50 - 100']) * 100) / data.length, (getValue(Q6['Over 100']) * 100) / data.length]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === '0 or No Response')][language],
              '<5',
              '5-15',
              '15-20',
              '20-50',
              '50-100',
              '>=100',
            ]
          }
          maxValue={70}
          marginLeft={125}
          ticks={[0, 20, 40, 70]}
        />
      </div>
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Finacial Resources')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Does the town hall have a budget dedicated specifically to solid waste management?')][language]}
        <DonutChart
          data={(getValue(Q7.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Activities Related to Solid Waste Collection at Town Hall Level')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Can you tell us if the town hall carries out the following activities related to solid waste?')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q8_1.Yes) * 100) / data.length, (getValue(Q8_1.No) * 100) / data.length, ((data.length - getValue(Q8_1.Yes) - getValue(Q8_1.No)) * 100) / data.length],
            [(getValue(Q8_2.Yes) * 100) / data.length, (getValue(Q8_2.No) * 100) / data.length, ((data.length - getValue(Q8_2.Yes) - getValue(Q8_2.No)) * 100) / data.length],
            [(getValue(Q8_3.Yes) * 100) / data.length, (getValue(Q8_3.No) * 100) / data.length, ((data.length - getValue(Q8_3.Yes) - getValue(Q8_3.No)) * 100) / data.length],
            [(getValue(Q8_4.Yes) * 100) / data.length, (getValue(Q8_4.No) * 100) / data.length, ((data.length - getValue(Q8_4.Yes) - getValue(Q8_4.No)) * 100) / data.length],
            [(getValue(Q8_5.Yes) * 100) / data.length, (getValue(Q8_5.No) * 100) / data.length, ((data.length - getValue(Q8_5.Yes) - getValue(Q8_5.No)) * 100) / data.length],
            [(getValue(Q8_6.Yes) * 100) / data.length, (getValue(Q8_6.No) * 100) / data.length, ((data.length - getValue(Q8_6.Yes) - getValue(Q8_6.No)) * 100) / data.length],
            [(getValue(Q8_7.Yes) * 100) / data.length, (getValue(Q8_7.No) * 100) / data.length, ((data.length - getValue(Q8_7.Yes) - getValue(Q8_7.No)) * 100) / data.length],
            [(getValue(Q8_8.Yes) * 100) / data.length, (getValue(Q8_8.No) * 100) / data.length, ((data.length - getValue(Q8_8.Yes) - getValue(Q8_8.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q8_1.Yes) * 100) / data.length, ((getValue(Q8_1.Yes) + getValue(Q8_1.No)) * 100) / data.length],
            [0, (getValue(Q8_2.Yes) * 100) / data.length, ((getValue(Q8_2.Yes) + getValue(Q8_2.No)) * 100) / data.length],
            [0, (getValue(Q8_3.Yes) * 100) / data.length, ((getValue(Q8_3.Yes) + getValue(Q8_3.No)) * 100) / data.length],
            [0, (getValue(Q8_4.Yes) * 100) / data.length, ((getValue(Q8_4.Yes) + getValue(Q8_4.No)) * 100) / data.length],
            [0, (getValue(Q8_5.Yes) * 100) / data.length, ((getValue(Q8_5.Yes) + getValue(Q8_5.No)) * 100) / data.length],
            [0, (getValue(Q8_6.Yes) * 100) / data.length, ((getValue(Q8_6.Yes) + getValue(Q8_6.No)) * 100) / data.length],
            [0, (getValue(Q8_7.Yes) * 100) / data.length, ((getValue(Q8_7.Yes) + getValue(Q8_7.No)) * 100) / data.length],
            [0, (getValue(Q8_8.Yes) * 100) / data.length, ((getValue(Q8_8.Yes) + getValue(Q8_8.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Waste collection')][language],
              Translations[Translations.findIndex((el) => el.key === 'Sorting')][language],
              Translations[Translations.findIndex((el) => el.key === 'Treatment')][language],
              Translations[Translations.findIndex((el) => el.key === 'Transportation')][language],
              Translations[Translations.findIndex((el) => el.key === 'Landfill')][language],
              Translations[Translations.findIndex((el) => el.key === 'Burning')][language],
              Translations[Translations.findIndex((el) => el.key === 'Recycling, composting')][language],
              Translations[Translations.findIndex((el) => el.key === 'Others')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              Translations[Translations.findIndex((el) => el.key === 'Yes')][language],
              Translations[Translations.findIndex((el) => el.key === 'No')][language],
              Translations[Translations.findIndex((el) => el.key === 'Don\'t know or no response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'How many collection days per month does the town hall carry out?')][language]}
        <BarGraph
          data={[(getValue(Q9['Three times a month']) * 100) / data.length, (getValue(Q9['Twice a month']) * 100) / data.length, (getValue(Q9['Once a month']) * 100) / data.length, ((getValue(Q9.None) + getValue(Q9.undefined)) * 100) / data.length]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Three days')][language],
              Translations[Translations.findIndex((el) => el.key === 'Two days')][language],
              Translations[Translations.findIndex((el) => el.key === 'One day')][language],
              Translations[Translations.findIndex((el) => el.key === 'None or no answer')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          ticks={[0, 25, 50, 75, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'What are the solid waste activities that consume the highest resources at the town hall level?')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q10_1.Yes) * 100) / data.length, (getValue(Q10_1.No) * 100) / data.length, ((data.length - getValue(Q10_1.Yes) - getValue(Q10_1.No)) * 100) / data.length],
            [(getValue(Q10_2.Yes) * 100) / data.length, (getValue(Q10_2.No) * 100) / data.length, ((data.length - getValue(Q10_2.Yes) - getValue(Q10_2.No)) * 100) / data.length],
            [(getValue(Q10_3.Yes) * 100) / data.length, (getValue(Q10_3.No) * 100) / data.length, ((data.length - getValue(Q10_3.Yes) - getValue(Q10_3.No)) * 100) / data.length],
            [(getValue(Q10_4.Yes) * 100) / data.length, (getValue(Q10_4.No) * 100) / data.length, ((data.length - getValue(Q10_4.Yes) - getValue(Q10_4.No)) * 100) / data.length],
            [(getValue(Q10_5.Yes) * 100) / data.length, (getValue(Q10_5.No) * 100) / data.length, ((data.length - getValue(Q10_5.Yes) - getValue(Q10_5.No)) * 100) / data.length],
            [(getValue(Q10_6.Yes) * 100) / data.length, (getValue(Q10_6.No) * 100) / data.length, ((data.length - getValue(Q10_6.Yes) - getValue(Q10_6.No)) * 100) / data.length],
            [(getValue(Q10_7.Yes) * 100) / data.length, (getValue(Q10_7.No) * 100) / data.length, ((data.length - getValue(Q10_7.Yes) - getValue(Q10_7.No)) * 100) / data.length],
            [(getValue(Q10_8.Yes) * 100) / data.length, (getValue(Q10_8.No) * 100) / data.length, ((data.length - getValue(Q10_8.Yes) - getValue(Q10_8.No)) * 100) / data.length],
            [(getValue(Q10_9.Yes) * 100) / data.length, (getValue(Q10_9.No) * 100) / data.length, ((data.length - getValue(Q10_9.Yes) - getValue(Q10_9.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q10_1.Yes) * 100) / data.length, ((getValue(Q10_1.Yes) + getValue(Q10_1.No)) * 100) / data.length],
            [0, (getValue(Q10_2.Yes) * 100) / data.length, ((getValue(Q10_2.Yes) + getValue(Q10_2.No)) * 100) / data.length],
            [0, (getValue(Q10_3.Yes) * 100) / data.length, ((getValue(Q10_3.Yes) + getValue(Q10_3.No)) * 100) / data.length],
            [0, (getValue(Q10_4.Yes) * 100) / data.length, ((getValue(Q10_4.Yes) + getValue(Q10_4.No)) * 100) / data.length],
            [0, (getValue(Q10_5.Yes) * 100) / data.length, ((getValue(Q10_5.Yes) + getValue(Q10_5.No)) * 100) / data.length],
            [0, (getValue(Q10_6.Yes) * 100) / data.length, ((getValue(Q10_6.Yes) + getValue(Q10_6.No)) * 100) / data.length],
            [0, (getValue(Q10_7.Yes) * 100) / data.length, ((getValue(Q10_7.Yes) + getValue(Q10_7.No)) * 100) / data.length],
            [0, (getValue(Q10_8.Yes) * 100) / data.length, ((getValue(Q10_8.Yes) + getValue(Q10_8.No)) * 100) / data.length],
            [0, (getValue(Q10_9.Yes) * 100) / data.length, ((getValue(Q10_9.Yes) + getValue(Q10_9.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Waste collection')][language],
              Translations[Translations.findIndex((el) => el.key === 'Sorting')][language],
              Translations[Translations.findIndex((el) => el.key === 'Treatment')][language],
              Translations[Translations.findIndex((el) => el.key === 'Transportation')][language],
              Translations[Translations.findIndex((el) => el.key === 'Landfill')][language],
              Translations[Translations.findIndex((el) => el.key === 'Burning')][language],
              Translations[Translations.findIndex((el) => el.key === 'Recycling, composting')][language],
              Translations[Translations.findIndex((el) => el.key === 'Promotion for recycling')][language],
              Translations[Translations.findIndex((el) => el.key === 'Raising Awareness')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              Translations[Translations.findIndex((el) => el.key === 'Yes')][language],
              Translations[Translations.findIndex((el) => el.key === 'No')][language],
              Translations[Translations.findIndex((el) => el.key === 'Don\'t know or no response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Is the solid waste collected weighted daily or weekly?')][language]}
        <DonutChart
          data={(getValue(Q11.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Actors')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Are there other actors involved in solid waste management in your municipality?')][language]}
        <DonutChart
          data={(getValue(Q12.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Partnership Relations')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Are there partnerships between the town hall and the following actors in relation to solid waste?')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q14_1.Yes) * 100) / data.length, (getValue(Q14_1.No) * 100) / data.length, ((data.length - getValue(Q14_1.Yes) - getValue(Q14_1.No)) * 100) / data.length],
            [(getValue(Q14_2.Yes) * 100) / data.length, (getValue(Q14_2.No) * 100) / data.length, ((data.length - getValue(Q14_2.Yes) - getValue(Q14_2.No)) * 100) / data.length],
            [(getValue(Q14_3.Yes) * 100) / data.length, (getValue(Q14_3.No) * 100) / data.length, ((data.length - getValue(Q14_3.Yes) - getValue(Q14_3.No)) * 100) / data.length],
            [(getValue(Q14_4.Yes) * 100) / data.length, (getValue(Q14_4.No) * 100) / data.length, ((data.length - getValue(Q14_4.Yes) - getValue(Q14_4.No)) * 100) / data.length],
            [(getValue(Q14_5.Yes) * 100) / data.length, (getValue(Q14_5.No) * 100) / data.length, ((data.length - getValue(Q14_5.Yes) - getValue(Q14_5.No)) * 100) / data.length],
            [(getValue(Q14_6.Yes) * 100) / data.length, (getValue(Q14_6.No) * 100) / data.length, ((data.length - getValue(Q14_6.Yes) - getValue(Q14_6.No)) * 100) / data.length],
            [(getValue(Q14_7.Yes) * 100) / data.length, (getValue(Q14_7.No) * 100) / data.length, ((data.length - getValue(Q14_7.Yes) - getValue(Q14_7.No)) * 100) / data.length],
            [(getValue(Q14_8.Yes) * 100) / data.length, (getValue(Q14_8.No) * 100) / data.length, ((data.length - getValue(Q14_8.Yes) - getValue(Q14_8.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q14_1.Yes) * 100) / data.length, ((getValue(Q14_1.Yes) + getValue(Q14_1.No)) * 100) / data.length],
            [0, (getValue(Q14_2.Yes) * 100) / data.length, ((getValue(Q14_2.Yes) + getValue(Q14_2.No)) * 100) / data.length],
            [0, (getValue(Q14_3.Yes) * 100) / data.length, ((getValue(Q14_3.Yes) + getValue(Q14_3.No)) * 100) / data.length],
            [0, (getValue(Q14_4.Yes) * 100) / data.length, ((getValue(Q14_4.Yes) + getValue(Q14_4.No)) * 100) / data.length],
            [0, (getValue(Q14_5.Yes) * 100) / data.length, ((getValue(Q14_5.Yes) + getValue(Q14_5.No)) * 100) / data.length],
            [0, (getValue(Q14_6.Yes) * 100) / data.length, ((getValue(Q14_6.Yes) + getValue(Q14_6.No)) * 100) / data.length],
            [0, (getValue(Q14_7.Yes) * 100) / data.length, ((getValue(Q14_7.Yes) + getValue(Q14_7.No)) * 100) / data.length],
            [0, (getValue(Q14_8.Yes) * 100) / data.length, ((getValue(Q14_8.Yes) + getValue(Q14_8.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Private companies')][language],
              Translations[Translations.findIndex((el) => el.key === 'NGO')][language],
              Translations[Translations.findIndex((el) => el.key === 'Community organizations')][language],
              Translations[Translations.findIndex((el) => el.key === 'SNGRC')][language],
              Translations[Translations.findIndex((el) => el.key === 'UNDP')][language],
              Translations[Translations.findIndex((el) => el.key === 'UNEP')][language],
              Translations[Translations.findIndex((el) => el.key === 'Other UN agencies')][language],
              Translations[Translations.findIndex((el) => el.key === 'Decentralised cooperation')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              Translations[Translations.findIndex((el) => el.key === 'Yes')][language],
              Translations[Translations.findIndex((el) => el.key === 'No')][language],
              Translations[Translations.findIndex((el) => el.key === 'Don\'t know or no response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Level of Waste Generation')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Give us your assessments regarding the level of waste generation of the following spaces/institutions')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q15_1.Raised) * 100) / data.length, (getValue(Q15_1.Medium) * 100) / data.length, (getValue(Q15_1.Weak) * 100) / data.length, (getValue(Q15_1.undefined) * 100) / data.length],
            [(getValue(Q15_2.Raised) * 100) / data.length, (getValue(Q15_2.Medium) * 100) / data.length, (getValue(Q15_2.Weak) * 100) / data.length, (getValue(Q15_2.undefined) * 100) / data.length],
            [(getValue(Q15_3.Raised) * 100) / data.length, (getValue(Q15_3.Medium) * 100) / data.length, (getValue(Q15_3.Weak) * 100) / data.length, (getValue(Q15_3.undefined) * 100) / data.length],
            [(getValue(Q15_4.Raised) * 100) / data.length, (getValue(Q15_4.Medium) * 100) / data.length, (getValue(Q15_4.Weak) * 100) / data.length, (getValue(Q15_4.undefined) * 100) / data.length],
            [(getValue(Q15_5.Raised) * 100) / data.length, (getValue(Q15_5.Medium) * 100) / data.length, (getValue(Q15_5.Weak) * 100) / data.length, (getValue(Q15_5.undefined) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q15_1.Raised) * 100) / data.length, ((getValue(Q15_1.Raised) + getValue(Q15_1.Medium)) * 100) / data.length, ((getValue(Q15_1.Raised) + getValue(Q15_1.Medium) + getValue(Q15_1.Weak)) * 100) / data.length],
            [0, (getValue(Q15_2.Raised) * 100) / data.length, ((getValue(Q15_2.Raised) + getValue(Q15_2.Medium)) * 100) / data.length, ((getValue(Q15_2.Raised) + getValue(Q15_2.Medium) + getValue(Q15_2.Weak)) * 100) / data.length],
            [0, (getValue(Q15_3.Raised) * 100) / data.length, ((getValue(Q15_3.Raised) + getValue(Q15_3.Medium)) * 100) / data.length, ((getValue(Q15_3.Raised) + getValue(Q15_3.Medium) + getValue(Q15_3.Weak)) * 100) / data.length],
            [0, (getValue(Q15_4.Raised) * 100) / data.length, ((getValue(Q15_4.Raised) + getValue(Q15_4.Medium)) * 100) / data.length, ((getValue(Q15_4.Raised) + getValue(Q15_4.Medium) + getValue(Q15_4.Weak)) * 100) / data.length],
            [0, (getValue(Q15_5.Raised) * 100) / data.length, ((getValue(Q15_5.Raised) + getValue(Q15_5.Medium)) * 100) / data.length, ((getValue(Q15_5.Raised) + getValue(Q15_5.Medium) + getValue(Q15_5.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Households')][language],
              Translations[Translations.findIndex((el) => el.key === 'Public markets')][language],
              Translations[Translations.findIndex((el) => el.key === 'Companies')][language],
              Translations[Translations.findIndex((el) => el.key === 'Schools')][language],
              Translations[Translations.findIndex((el) => el.key === 'Hospitals')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          color={['#006EB5', '#4F95DD', '#94C4F5', '#AAA']}
          colorKey={
            [
              Translations[Translations.findIndex((el) => el.key === 'High')][language],
              Translations[Translations.findIndex((el) => el.key === 'Medium')][language],
              Translations[Translations.findIndex((el) => el.key === 'Low')][language],
              Translations[Translations.findIndex((el) => el.key === 'No response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Type of Wastes')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'At what level are the following types of waste met in your municipality?')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q16_1.Raised) * 100) / data.length, (getValue(Q16_1.Medium) * 100) / data.length, (getValue(Q16_1.Weak) * 100) / data.length, (getValue(Q16_1.undefined) * 100) / data.length],
            [(getValue(Q16_2.Raised) * 100) / data.length, (getValue(Q16_2.Medium) * 100) / data.length, (getValue(Q16_2.Weak) * 100) / data.length, (getValue(Q16_2.undefined) * 100) / data.length],
            [(getValue(Q16_3.Raised) * 100) / data.length, (getValue(Q16_3.Medium) * 100) / data.length, (getValue(Q16_3.Weak) * 100) / data.length, (getValue(Q16_3.undefined) * 100) / data.length],
            [(getValue(Q16_4.Raised) * 100) / data.length, (getValue(Q16_4.Medium) * 100) / data.length, (getValue(Q16_4.Weak) * 100) / data.length, (getValue(Q16_4.undefined) * 100) / data.length],
            [(getValue(Q16_5.Raised) * 100) / data.length, (getValue(Q16_5.Medium) * 100) / data.length, (getValue(Q16_5.Weak) * 100) / data.length, (getValue(Q16_5.undefined) * 100) / data.length],
            [(getValue(Q16_6.Raised) * 100) / data.length, (getValue(Q16_6.Medium) * 100) / data.length, (getValue(Q16_6.Weak) * 100) / data.length, (getValue(Q16_6.undefined) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q16_1.Raised) * 100) / data.length, ((getValue(Q16_1.Raised) + getValue(Q16_1.Medium)) * 100) / data.length, ((getValue(Q16_1.Raised) + getValue(Q16_1.Medium) + getValue(Q16_1.Weak)) * 100) / data.length],
            [0, (getValue(Q16_2.Raised) * 100) / data.length, ((getValue(Q16_2.Raised) + getValue(Q16_2.Medium)) * 100) / data.length, ((getValue(Q16_2.Raised) + getValue(Q16_2.Medium) + getValue(Q16_2.Weak)) * 100) / data.length],
            [0, (getValue(Q16_3.Raised) * 100) / data.length, ((getValue(Q16_3.Raised) + getValue(Q16_3.Medium)) * 100) / data.length, ((getValue(Q16_3.Raised) + getValue(Q16_3.Medium) + getValue(Q16_3.Weak)) * 100) / data.length],
            [0, (getValue(Q16_4.Raised) * 100) / data.length, ((getValue(Q16_4.Raised) + getValue(Q16_4.Medium)) * 100) / data.length, ((getValue(Q16_4.Raised) + getValue(Q16_4.Medium) + getValue(Q16_4.Weak)) * 100) / data.length],
            [0, (getValue(Q16_5.Raised) * 100) / data.length, ((getValue(Q16_5.Raised) + getValue(Q16_5.Medium)) * 100) / data.length, ((getValue(Q16_5.Raised) + getValue(Q16_5.Medium) + getValue(Q16_5.Weak)) * 100) / data.length],
            [0, (getValue(Q16_6.Raised) * 100) / data.length, ((getValue(Q16_6.Raised) + getValue(Q16_6.Medium)) * 100) / data.length, ((getValue(Q16_6.Raised) + getValue(Q16_6.Medium) + getValue(Q16_6.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Agricultural')][language],
              Translations[Translations.findIndex((el) => el.key === 'Plastic')][language],
              Translations[Translations.findIndex((el) => el.key === 'Metal')][language],
              Translations[Translations.findIndex((el) => el.key === 'Medical')][language],
              Translations[Translations.findIndex((el) => el.key === 'Textile')][language],
              Translations[Translations.findIndex((el) => el.key === 'Industrial')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          color={['#006EB5', '#4F95DD', '#94C4F5', '#AAA']}
          colorKey={
            [
              Translations[Translations.findIndex((el) => el.key === 'High')][language],
              Translations[Translations.findIndex((el) => el.key === 'Medium')][language],
              Translations[Translations.findIndex((el) => el.key === 'Low')][language],
              Translations[Translations.findIndex((el) => el.key === 'No response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Negative Impact of Solid Waste')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Have you detected recurrent cases of solid waste-related diseases in your municipality?')][language]}
        <DonutChart
          data={(getValue(Q17.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Specify whether you have observed the following diseases')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q18_1.Yes) * 100) / data.length, (getValue(Q18_1.No) * 100) / data.length, ((data.length - getValue(Q18_1.Yes) - getValue(Q18_1.No)) * 100) / data.length],
            [(getValue(Q18_2.Yes) * 100) / data.length, (getValue(Q18_2.No) * 100) / data.length, ((data.length - getValue(Q18_2.Yes) - getValue(Q18_2.No)) * 100) / data.length],
            [(getValue(Q18_3.Yes) * 100) / data.length, (getValue(Q18_3.No) * 100) / data.length, ((data.length - getValue(Q18_3.Yes) - getValue(Q18_3.No)) * 100) / data.length],
            [(getValue(Q18_4.Yes) * 100) / data.length, (getValue(Q18_4.No) * 100) / data.length, ((data.length - getValue(Q18_4.Yes) - getValue(Q18_4.No)) * 100) / data.length],
            [(getValue(Q18_5.Yes) * 100) / data.length, (getValue(Q18_5.No) * 100) / data.length, ((data.length - getValue(Q18_5.Yes) - getValue(Q18_5.No)) * 100) / data.length],
            [(getValue(Q18_6.Yes) * 100) / data.length, (getValue(Q18_6.No) * 100) / data.length, ((data.length - getValue(Q18_6.Yes) - getValue(Q18_6.No)) * 100) / data.length],
            [(getValue(Q18_7.Yes) * 100) / data.length, (getValue(Q18_7.No) * 100) / data.length, ((data.length - getValue(Q18_7.Yes) - getValue(Q18_7.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q18_1.Yes) * 100) / data.length, ((getValue(Q18_1.Yes) + getValue(Q18_1.No)) * 100) / data.length],
            [0, (getValue(Q18_2.Yes) * 100) / data.length, ((getValue(Q18_2.Yes) + getValue(Q18_2.No)) * 100) / data.length],
            [0, (getValue(Q18_3.Yes) * 100) / data.length, ((getValue(Q18_3.Yes) + getValue(Q18_3.No)) * 100) / data.length],
            [0, (getValue(Q18_4.Yes) * 100) / data.length, ((getValue(Q18_4.Yes) + getValue(Q18_4.No)) * 100) / data.length],
            [0, (getValue(Q18_5.Yes) * 100) / data.length, ((getValue(Q18_5.Yes) + getValue(Q18_5.No)) * 100) / data.length],
            [0, (getValue(Q18_6.Yes) * 100) / data.length, ((getValue(Q18_6.Yes) + getValue(Q18_6.No)) * 100) / data.length],
            [0, (getValue(Q18_7.Yes) * 100) / data.length, ((getValue(Q18_7.Yes) + getValue(Q18_7.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Skin disease')][language],
              Translations[Translations.findIndex((el) => el.key === 'Respiratory disease')][language],
              Translations[Translations.findIndex((el) => el.key === 'Malaria')][language],
              Translations[Translations.findIndex((el) => el.key === 'Dengue fever')][language],
              Translations[Translations.findIndex((el) => el.key === 'Typhoid')][language],
              Translations[Translations.findIndex((el) => el.key === 'Diarrhea')][language],
              Translations[Translations.findIndex((el) => el.key === 'Vaginal infection')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              Translations[Translations.findIndex((el) => el.key === 'Yes')][language],
              Translations[Translations.findIndex((el) => el.key === 'No')][language],
              Translations[Translations.findIndex((el) => el.key === 'Don\'t know or no response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Have you detected any environmental problems related to solid waste management in your municipality?')][language]}
        <DonutChart
          data={(getValue(Q19.Yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'Specify if you have observed the following environmental problems')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q20_1.Yes) * 100) / data.length, (getValue(Q20_1.No) * 100) / data.length, ((data.length - getValue(Q20_1.Yes) - getValue(Q20_1.No)) * 100) / data.length],
            [(getValue(Q20_2.Yes) * 100) / data.length, (getValue(Q20_2.No) * 100) / data.length, ((data.length - getValue(Q20_2.Yes) - getValue(Q20_2.No)) * 100) / data.length],
            [(getValue(Q20_3.Yes) * 100) / data.length, (getValue(Q20_3.No) * 100) / data.length, ((data.length - getValue(Q20_3.Yes) - getValue(Q20_3.No)) * 100) / data.length],
            [(getValue(Q20_4.Yes) * 100) / data.length, (getValue(Q20_4.No) * 100) / data.length, ((data.length - getValue(Q20_4.Yes) - getValue(Q20_4.No)) * 100) / data.length],
            [(getValue(Q20_5.Yes) * 100) / data.length, (getValue(Q20_5.No) * 100) / data.length, ((data.length - getValue(Q20_5.Yes) - getValue(Q20_5.No)) * 100) / data.length],
            [(getValue(Q20_6.Yes) * 100) / data.length, (getValue(Q20_6.No) * 100) / data.length, ((data.length - getValue(Q20_6.Yes) - getValue(Q20_6.No)) * 100) / data.length],
            [(getValue(Q20_7.Yes) * 100) / data.length, (getValue(Q20_7.No) * 100) / data.length, ((data.length - getValue(Q20_7.Yes) - getValue(Q20_7.No)) * 100) / data.length],
            [(getValue(Q20_8.Yes) * 100) / data.length, (getValue(Q20_8.No) * 100) / data.length, ((data.length - getValue(Q20_8.Yes) - getValue(Q20_8.No)) * 100) / data.length],
            [(getValue(Q20_9.Yes) * 100) / data.length, (getValue(Q20_9.No) * 100) / data.length, ((data.length - getValue(Q20_9.Yes) - getValue(Q20_9.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q20_1.Yes) * 100) / data.length, ((getValue(Q20_1.Yes) + getValue(Q20_1.No)) * 100) / data.length],
            [0, (getValue(Q20_2.Yes) * 100) / data.length, ((getValue(Q20_2.Yes) + getValue(Q20_2.No)) * 100) / data.length],
            [0, (getValue(Q20_3.Yes) * 100) / data.length, ((getValue(Q20_3.Yes) + getValue(Q20_3.No)) * 100) / data.length],
            [0, (getValue(Q20_4.Yes) * 100) / data.length, ((getValue(Q20_4.Yes) + getValue(Q20_4.No)) * 100) / data.length],
            [0, (getValue(Q20_5.Yes) * 100) / data.length, ((getValue(Q20_5.Yes) + getValue(Q20_5.No)) * 100) / data.length],
            [0, (getValue(Q20_6.Yes) * 100) / data.length, ((getValue(Q20_6.Yes) + getValue(Q20_6.No)) * 100) / data.length],
            [0, (getValue(Q20_7.Yes) * 100) / data.length, ((getValue(Q20_7.Yes) + getValue(Q20_7.No)) * 100) / data.length],
            [0, (getValue(Q20_8.Yes) * 100) / data.length, ((getValue(Q20_8.Yes) + getValue(Q20_8.No)) * 100) / data.length],
            [0, (getValue(Q20_9.Yes) * 100) / data.length, ((getValue(Q20_9.Yes) + getValue(Q20_9.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              Translations[Translations.findIndex((el) => el.key === 'Landfill close to water')][language],
              Translations[Translations.findIndex((el) => el.key === 'Insalubrity of road networks')][language],
              Translations[Translations.findIndex((el) => el.key === 'Obstruction of road networks')][language],
              Translations[Translations.findIndex((el) => el.key === 'Obstruction of rainwater drains')][language],
              Translations[Translations.findIndex((el) => el.key === 'Floods')][language],
              Translations[Translations.findIndex((el) => el.key === 'Insalubrity of public market')][language],
              Translations[Translations.findIndex((el) => el.key === 'Insalubrity of public beaches')][language],
              Translations[Translations.findIndex((el) => el.key === 'Destruction of mangroves')][language],
              Translations[Translations.findIndex((el) => el.key === 'Animal Mortality')][language],
            ]
          }
          maxValue={100}
          marginLeft={125}
          color={['#59BA47', '#D12800', '#AAA']}
          colorKey={
            [
              Translations[Translations.findIndex((el) => el.key === 'Yes')][language],
              Translations[Translations.findIndex((el) => el.key === 'No')][language],
              Translations[Translations.findIndex((el) => el.key === 'Don\'t know or no response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        {Translations[Translations.findIndex((el) => el.key === 'Community Commitment')][language]}
      </h3>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'In your opinion, what is the level of commitment of the population of your municipality in the management of solid waste?')][language]}
        <DonutChart
          data={(getValue(Q21.Weak) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says low')][language]}
          color='#D12800'
        />
      </div>
      <div className='margin-bottom-11'>
        {Translations[Translations.findIndex((el) => el.key === 'In your opinion, what is the level of commitment of the population of your municipality in the management of solid waste?')][language]}
        <DonutChart
          data={(getValue(Q22.Weak) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says low')][language]}
          color='#D12800'
        />
      </div>
    </div>
  );
};
