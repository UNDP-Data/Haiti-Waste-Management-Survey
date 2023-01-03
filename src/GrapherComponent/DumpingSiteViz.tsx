import { useContext } from 'react';
import countBy from 'lodash.countby';
import { DonutChart } from './DonutChart';
import { getValue } from '../utils/getValue';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';
import { Translations } from '../Data/Translations';
import { BarGraph } from './BarGraph';
import { StackedBarGraph } from './StackedBarGraph';

interface Props {
  data: any;
}

export const DumpingSiteViz = (props: Props) => {
  const {
    data,
  } = props;
  const {
    language,
  } = useContext(Context) as CtxDataType;
  const Q1 = countBy(data, (d) => d['Is the landfill site recognized/tolerated by the town hall?']);
  const Q2 = countBy(data, (d) => d['Is the landfill site under the responsibility of the town hall?']);
  const Q3 = countBy(data, (d) => d['How do you categorize this dump site?']);
  const Q5_1 = countBy(data, (d) => d['Can you provide us with the following information on the use of the site?']);
  const Q5_2 = countBy(data, (d) => d['Specify the location(s):/Location near a water source or well']);
  const Q5_3 = countBy(data, (d) => d['Specify the location(s):/Location near a river']);
  const Q5_4 = countBy(data, (d) => d['Specify the location(s):/Location near the shore']);
  const Q5_5 = countBy(data, (d) => d['Specify the location(s):/Location near inhabited areas']);
  const Q5_6 = countBy(data, (d) => d['Specify the location(s):/Location near farms']);
  const Q5_7 = countBy(data, (d) => d['Specify the location(s):/Location near schools']);
  const Q5_8 = countBy(data, (d) => d['Specify the location(s):/Location near hospitals']);
  const Q6_1 = countBy(data, (d) => d['Who dumps the waste in the landfill site?/The town hall']);
  const Q6_2 = countBy(data, (d) => d['Who dumps the waste in the landfill site?/Private companies']);
  const Q6_3 = countBy(data, (d) => d['Who dumps waste in the landfill site?/Households']);
  const Q6_4 = countBy(data, (d) => d['Who dumps the waste in the landfill site?/Individuals']);
  const Q6_5 = countBy(data, (d) => d['Who dumps the waste in the landfill site?/Others']);
  const Q7 = countBy(data, (d) => d['What do you think is the approximate size of the landfill site?']);
  const Q8 = countBy(data, (d) => d['How often is solid waste dumped on the site?']);
  const Q9_1 = countBy(data, (d) => d['Skin illness']);
  const Q9_2 = countBy(data, (d) => d['Breathing illness']);
  const Q9_3 = countBy(data, (d) => d.Malaria);
  const Q9_4 = countBy(data, (d) => d['Dengue fever']);
  const Q9_5 = countBy(data, (d) => d.Typhoid);
  const Q9_6 = countBy(data, (d) => d.Diarrhea);
  const Q9_7 = countBy(data, (d) => d['Vaginal infection']);
  const Q9_8 = countBy(data, (d) => d.Others);
  const Q10_1 = countBy(data, (d) => d['Bad smell']);
  const Q10_2 = countBy(data, (d) => d['Spread of rats']);
  const Q10_3 = countBy(data, (d) => d['Spread of insects (cockroaches, turnips)']);
  const Q10_4 = countBy(data, (d) => d['Contamination of water sources']);
  const Q10_5 = countBy(data, (d) => d['sea pollution']);
  const Q10_6 = countBy(data, (d) => d['River pollution']);
  const Q10_7 = countBy(data, (d) => d['Unsanitary road networks']);
  const Q10_8 = countBy(data, (d) => d['Obstruction of road networks']);
  const Q10_9 = countBy(data, (d) => d['Unsanitary public markets']);
  const Q10_10 = countBy(data, (d) => d['Unsanitary public beaches']);
  const Q11 = countBy(data, (d) => d['Have you detected any innovations related to solid waste management in your area']);
  const Q12 = countBy(data, (d) => d['According to you, what is the level of commitment of the town hall of your area']);
  const Q13 = countBy(data, (d) => d['According to you, what is the level of commitment of the population of your area']);
  const Q14 = countBy(data, (d) => d['According to you, what is the level of awareness of the population of your area']);
  return (
    <div>
      {
        data.length > 0
          ? (
            <>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'Is the landfill site recognized/tolerated by the town hall?')][language]}
                <DonutChart
                  data={(getValue(Q1.yes) * 100) / data.length}
                  subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'Is the landfill site under the responsibility of the town hall?')][language]}
                <DonutChart
                  data={(getValue(Q2.yes) * 100) / data.length}
                  subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'How do you categorize this dump site?')][language]}
                <DonutChart
                  data={(getValue(Q3.Wild) * 100) / data.length}
                  subText={Translations[Translations.findIndex((el) => el.key === 'says wild')][language]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'Specify the location of the landfill site?')][language]}
                <BarGraph
                  data={[(getValue(Q5_2['1']) * 100) / data.length, (getValue(Q5_3['1']) * 100) / data.length, (getValue(Q5_4['1']) * 100) / data.length, (getValue(Q5_5['1']) * 100) / data.length, (getValue(Q5_6['1']) * 100) / data.length, (getValue(Q5_7['1']) * 100) / data.length, (getValue(Q5_8['1']) * 100) / data.length, ((getValue(Q5_1.No) + getValue(Q5_1.undefined)) * 100) / data.length]}
                  barLabel={
                [
                  Translations[Translations.findIndex((el) => el.key === 'Near a water source')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Near a river')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Near the shore')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Near inhabited areas')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Near farms')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Near schools')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Near hospitals')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Don\'t know or no response')][language],
                ]
              }
                  maxValue={60}
                  marginLeft={125}
                  ticks={[0, 20, 40, 60]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'Who dumps the waste in the landfill site?')][language]}
                <BarGraph
                  data={[(getValue(Q6_1['1']) * 100) / data.length, (getValue(Q6_2['1']) * 100) / data.length, (getValue(Q6_3['1']) * 100) / data.length, (getValue(Q6_4['1']) * 100) / data.length, (getValue(Q6_5['1']) * 100) / data.length]}
                  barLabel={
                [
                  Translations[Translations.findIndex((el) => el.key === 'Town hall')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Private companies')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Households')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Individuals')][language],
                  Translations[Translations.findIndex((el) => el.key === 'others')][language],
                ]
              }
                  maxValue={100}
                  marginLeft={125}
                  ticks={[0, 25, 50, 75, 100]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'What do you think is the approximate size of the landfill site?')][language]}
                <BarGraph
                  data={[(getValue(Q7['Less than 100 m2']) * 100) / data.length, (getValue(Q7['100 - 200 m2']) * 100) / data.length, (getValue(Q7['200 -300 m2']) * 100) / data.length, (getValue(Q7['300-400 m2']) * 100) / data.length, (getValue(Q7['400-500 m2']) * 100) / data.length, (getValue(Q7['More than 500 m2']) * 100) / data.length]}
                  barLabel={
                [
                  '< 100 m2',
                  '100 - 200 m2',
                  '200 -300 m2',
                  '300-400 m2',
                  '400-500 m2',
                  '> 500 m2',
                ]
              }
                  maxValue={60}
                  marginLeft={125}
                  ticks={[0, 20, 40, 60]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'How often is solid waste dumped on the site?')][language]}
                <BarGraph
                  data={[(getValue(Q8['Each day']) * 100) / data.length, (getValue(Q8['Every week']) * 100) / data.length, (getValue(Q8['every two weeks']) * 100) / data.length]}
                  barLabel={
                [
                  Translations[Translations.findIndex((el) => el.key === 'Everyday')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Every week')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Every 2 weeks')][language],
                ]
              }
                  maxValue={100}
                  marginLeft={125}
                  ticks={[0, 25, 50, 75, 100]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'Specify whether you have observed the following diseases')][language]}
                <StackedBarGraph
                  data={[
                    [(getValue(Q9_1.Yes) * 100) / data.length, (getValue(Q9_1.No) * 100) / data.length, ((data.length - getValue(Q9_1.Yes) - getValue(Q9_1.No)) * 100) / data.length],
                    [(getValue(Q9_2.Yes) * 100) / data.length, (getValue(Q9_2.No) * 100) / data.length, ((data.length - getValue(Q9_2.Yes) - getValue(Q9_2.No)) * 100) / data.length],
                    [(getValue(Q9_3.Yes) * 100) / data.length, (getValue(Q9_3.No) * 100) / data.length, ((data.length - getValue(Q9_3.Yes) - getValue(Q9_3.No)) * 100) / data.length],
                    [(getValue(Q9_4.Yes) * 100) / data.length, (getValue(Q9_4.No) * 100) / data.length, ((data.length - getValue(Q9_4.Yes) - getValue(Q9_4.No)) * 100) / data.length],
                    [(getValue(Q9_5.Yes) * 100) / data.length, (getValue(Q9_5.No) * 100) / data.length, ((data.length - getValue(Q9_5.Yes) - getValue(Q9_5.No)) * 100) / data.length],
                    [(getValue(Q9_6.Yes) * 100) / data.length, (getValue(Q9_6.No) * 100) / data.length, ((data.length - getValue(Q9_6.Yes) - getValue(Q9_6.No)) * 100) / data.length],
                    [(getValue(Q9_7.Yes) * 100) / data.length, (getValue(Q9_7.No) * 100) / data.length, ((data.length - getValue(Q9_7.Yes) - getValue(Q9_7.No)) * 100) / data.length],
                    [(getValue(Q9_8.Yes) * 100) / data.length, (getValue(Q9_8.No) * 100) / data.length, ((data.length - getValue(Q9_8.Yes) - getValue(Q9_8.No)) * 100) / data.length],
                  ]}
                  startingPos={[
                    [0, (getValue(Q9_1.Yes) * 100) / data.length, ((getValue(Q9_1.Yes) + getValue(Q9_1.No)) * 100) / data.length],
                    [0, (getValue(Q9_2.Yes) * 100) / data.length, ((getValue(Q9_2.Yes) + getValue(Q9_2.No)) * 100) / data.length],
                    [0, (getValue(Q9_3.Yes) * 100) / data.length, ((getValue(Q9_3.Yes) + getValue(Q9_3.No)) * 100) / data.length],
                    [0, (getValue(Q9_4.Yes) * 100) / data.length, ((getValue(Q9_4.Yes) + getValue(Q9_4.No)) * 100) / data.length],
                    [0, (getValue(Q9_5.Yes) * 100) / data.length, ((getValue(Q9_5.Yes) + getValue(Q9_5.No)) * 100) / data.length],
                    [0, (getValue(Q9_6.Yes) * 100) / data.length, ((getValue(Q9_6.Yes) + getValue(Q9_6.No)) * 100) / data.length],
                    [0, (getValue(Q9_7.Yes) * 100) / data.length, ((getValue(Q9_7.Yes) + getValue(Q9_7.No)) * 100) / data.length],
                    [0, (getValue(Q9_8.Yes) * 100) / data.length, ((getValue(Q9_8.Yes) + getValue(Q9_8.No)) * 100) / data.length],
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
                  Translations[Translations.findIndex((el) => el.key === 'others')][language],
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
                {Translations[Translations.findIndex((el) => el.key === 'Have you identified any environmental issues related to the landfill site in you')][language]}
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
                    [(getValue(Q10_10.Yes) * 100) / data.length, (getValue(Q10_10.No) * 100) / data.length, ((data.length - getValue(Q10_10.Yes) - getValue(Q10_10.No)) * 100) / data.length],
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
                    [0, (getValue(Q10_10.Yes) * 100) / data.length, ((getValue(Q10_10.Yes) + getValue(Q10_10.No)) * 100) / data.length],
                  ]}
                  barLabel={
                [
                  Translations[Translations.findIndex((el) => el.key === 'Bad smell')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Spread of rats')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Spread of insects')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Contamination of water sources')][language],
                  Translations[Translations.findIndex((el) => el.key === 'sea pollution')][language],
                  Translations[Translations.findIndex((el) => el.key === 'River pollution')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Unsanitary road networks')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Obstruction of road networks')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Unsanitary public markets')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Unsanitary public beaches')][language],
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
                {Translations[Translations.findIndex((el) => el.key === 'communityCommitments')][language]}
              </h3>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'According to you, what is the level of commitment of the town hall of your area')][language]}
                <BarGraph
                  data={[(getValue(Q12.Raised) * 100) / data.length, (getValue(Q12.Medium) * 100) / data.length, (getValue(Q12.Weak) * 100) / data.length, (getValue(Q12['']) * 100) / data.length]}
                  barLabel={
                [
                  Translations[Translations.findIndex((el) => el.key === 'Raised')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Medium')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Weak')][language],
                  Translations[Translations.findIndex((el) => el.key === 'No response')][language],
                ]
              }
                  maxValue={80}
                  marginLeft={125}
                  ticks={[0, 20, 40, 60, 80]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'According to you, what is the level of commitment of the population of your area')][language]}
                <BarGraph
                  data={[(getValue(Q13.Raised) * 100) / data.length, (getValue(Q13.Medium) * 100) / data.length, (getValue(Q13.Weak) * 100) / data.length, (getValue(Q13['']) * 100) / data.length]}
                  barLabel={
                [
                  Translations[Translations.findIndex((el) => el.key === 'Raised')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Medium')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Weak')][language],
                  Translations[Translations.findIndex((el) => el.key === 'No response')][language],
                ]
              }
                  maxValue={80}
                  marginLeft={125}
                  ticks={[0, 20, 40, 60, 80]}
                />
              </div>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'According to you, what is the level of awareness of the population of your area')][language]}
                <BarGraph
                  data={[(getValue(Q14.Raised) * 100) / data.length, (getValue(Q14.Medium) * 100) / data.length, (getValue(Q14.Weak) * 100) / data.length, (getValue(Q14['']) * 100) / data.length]}
                  barLabel={
                [
                  Translations[Translations.findIndex((el) => el.key === 'Raised')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Medium')][language],
                  Translations[Translations.findIndex((el) => el.key === 'Weak')][language],
                  Translations[Translations.findIndex((el) => el.key === 'No response')][language],
                ]
              }
                  maxValue={80}
                  marginLeft={125}
                  ticks={[0, 20, 40, 60, 80]}
                />
              </div>
              <hr className='undp-style margin-bottom-11' />
              <h3 className='undp-typography bold margin-bottom-07'>
                {Translations[Translations.findIndex((el) => el.key === 'innovativeSolutions')][language]}
              </h3>
              <div className='margin-bottom-11'>
                {Translations[Translations.findIndex((el) => el.key === 'Have you detected any innovations related to solid waste management in your municipality?')][language]}
                <DonutChart
                  data={(getValue(Q11.yes) * 100) / data.length}
                  subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
                />
              </div>
            </>
          ) : null
      }
    </div>
  );
};
