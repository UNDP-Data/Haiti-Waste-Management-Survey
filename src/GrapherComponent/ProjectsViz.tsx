import countBy from 'lodash.countby';
import { BarGraph } from './BarGraph';
import { DonutChart } from './DonutChart';
import { StackedBarGraph } from './StackedBarGraph';
import { getValue } from '../utils/getValue';

interface Props {
  data: any;
}

export const ProjectsViz = (props: Props) => {
  const {
    data,
  } = props;
  const Q1 = countBy(data, (d) => d.n_people);
  const Q2 = countBy(data, (d) => d.n_men);
  const Q3 = countBy(data, (d) => d.n_women);
  const Q4 = countBy(data, (d) => d.budget);
  const Q5_1 = countBy(data, (d) => d['central government']);
  const Q5_2 = countBy(data, (d) => d['National donors']);
  const Q5_3 = countBy(data, (d) => d['International donors']);
  const Q5_4 = countBy(data, (d) => d['Notables of the area']);
  const Q5_5 = countBy(data, (d) => d['Decentralized cooperation...25']);
  const Q5_6 = countBy(data, (d) => d['Others...26']);
  const Q6 = countBy(data, (d) => d['Are there other actors involved in solid waste management in your area of interv']);
  const Q7_1 = countBy(data, (d) => d['Town hall...35']);
  const Q7_2 = countBy(data, (d) => d['Private companies...36']);
  const Q7_3 = countBy(data, (d) => d['NGO...38']);
  const Q7_4 = countBy(data, (d) => d['Community organizations...39']);
  const Q7_5 = countBy(data, (d) => d['SNGRS...40']);
  const Q7_6 = countBy(data, (d) => d['Other state institutions...41']);
  const Q7_7 = countBy(data, (d) => d['UNEP...42']);
  const Q7_8 = countBy(data, (d) => d['UNDP...43']);
  const Q7_9 = countBy(data, (d) => d['Other UN institutions...44']);
  const Q7_10 = countBy(data, (d) => d['Decentralized cooperation...45']);
  const Q8_1 = countBy(data, (d) => d['Town hall...81']);
  const Q8_2 = countBy(data, (d) => d['Private companies...82']);
  const Q8_3 = countBy(data, (d) => d['NGO...83']);
  const Q8_4 = countBy(data, (d) => d['Community organizations...84']);
  const Q8_5 = countBy(data, (d) => d['SNGRS...85']);
  const Q8_6 = countBy(data, (d) => d['Other state institutions...86']);
  const Q8_7 = countBy(data, (d) => d['UNEP...87']);
  const Q8_8 = countBy(data, (d) => d['UNDP...88']);
  const Q8_9 = countBy(data, (d) => d['Other UN institutions...89']);
  const Q8_10 = countBy(data, (d) => d['Decentralized cooperation...90']);
  const Q9_1 = countBy(data, (d) => d['Town hall...118']);
  const Q9_2 = countBy(data, (d) => d['Private companies...119']);
  const Q9_3 = countBy(data, (d) => d['NGO...120']);
  const Q9_4 = countBy(data, (d) => d['Community organizations...121']);
  const Q9_5 = countBy(data, (d) => d['SNGRS...122']);
  const Q9_6 = countBy(data, (d) => d['Other state institutions...123']);
  const Q9_7 = countBy(data, (d) => d['UNEP...124']);
  const Q9_8 = countBy(data, (d) => d['UNDP...125']);
  const Q9_9 = countBy(data, (d) => d['Other UN institutions...126']);
  const Q9_10 = countBy(data, (d) => d['Decentralized cooperation...127']);
  const Q10_1 = countBy(data, (d) => d['Agricultural waste']);
  const Q10_2 = countBy(data, (d) => d['plastic waste']);
  const Q10_3 = countBy(data, (d) => d['Metals scrap']);
  const Q10_4 = countBy(data, (d) => d['medical waste']);
  const Q10_5 = countBy(data, (d) => d['Paper/cardboard waste']);
  const Q10_6 = countBy(data, (d) => d['Glass waste']);
  const Q10_7 = countBy(data, (d) => d['Textile waste']);
  const Q11 = countBy(data, (d) => d['Have you detected recurrent cases of solid waste-related diseases in your munici']);
  const Q12_1 = countBy(data, (d) => d['Skin illness']);
  const Q12_2 = countBy(data, (d) => d['Breathing illness']);
  const Q12_3 = countBy(data, (d) => d.Malaria);
  const Q12_4 = countBy(data, (d) => d['Dengue fever']);
  const Q12_5 = countBy(data, (d) => d.Typhoid);
  const Q12_6 = countBy(data, (d) => d.Diarrhea);
  const Q12_7 = countBy(data, (d) => d['Vaginal infection']);
  const Q12_8 = countBy(data, (d) => d['Others...148']);
  const Q13 = countBy(data, (d) => d['Have you identified any environmental problems related to solid waste management']);
  const Q14_1 = countBy(data, (d) => d['Landfill sites are close to rivers, shores, water sources and people\'s places of']);
  const Q14_2 = countBy(data, (d) => d['Unsanitary road networks']);
  const Q14_3 = countBy(data, (d) => d['Obstruction of road networks']);
  const Q14_4 = countBy(data, (d) => d['Unsanitary public markets']);
  const Q14_5 = countBy(data, (d) => d['Unsanitary public beaches']);
  const Q14_6 = countBy(data, (d) => d['Destruction of mangroves']);
  const Q15 = countBy(data, (d) => d['According to you, what is the level of commitment of the town hall of your area']);
  const Q16 = countBy(data, (d) => d['According to you, what is the level of commitment of the population of your area']);
  const Q17 = countBy(data, (d) => d['According to you, what is the level of awareness of the population of your area']);
  const Q18 = countBy(data, (d) => d['Have you detected any innovations related to solid waste management in your area']);
  return (
    <div>
      <h3 className='undp-typography bold margin-bottom-07'>
        Human Resources
      </h3>
      <div className='margin-bottom-11'>
        How many people work in the project?
        <BarGraph
          data={[(getValue(Q1.undefined) * 100) / data.length, (getValue(Q1['Less than 5']) * 100) / data.length, ((getValue(Q1['5 - 10']) + getValue(Q1['10 - 15'])) * 100) / data.length, (getValue(Q1['15 - 20']) * 100) / data.length, (getValue(Q1['20 - 50']) * 100) / data.length, (getValue(Q1['50 - 100']) * 100) / data.length, (getValue(Q1['Over 100']) * 100) / data.length]}
          barLabel={
            [
              '0 or\nNo Response',
              '< 5',
              '5 - 15',
              '15 - 20',
              '20 - 50',
              '50 - 100',
              '>= 100',
            ]
          }
          maxValue={70}
          marginLeft={100}
          ticks={[0, 20, 40, 70]}
        />
      </div>
      <div className='margin-bottom-11'>
        How many men work in the project?
        <BarGraph
          data={[(getValue(Q2.undefined) * 100) / data.length, (getValue(Q2['Less than 5']) * 100) / data.length, ((getValue(Q2['5 - 10']) + getValue(Q2['10 - 15'])) * 100) / data.length, (getValue(Q2['15 - 20']) * 100) / data.length, (getValue(Q2['20 - 50']) * 100) / data.length, (getValue(Q2['50 - 100']) * 100) / data.length, (getValue(Q2['Over 100']) * 100) / data.length]}
          barLabel={
            [
              '0 or\nNo Response',
              '< 5',
              '5 - 15',
              '15 - 20',
              '20 - 50',
              '50 - 100',
              '>= 100',
            ]
          }
          maxValue={70}
          marginLeft={100}
          ticks={[0, 20, 40, 70]}
        />
      </div>
      <div className='margin-bottom-11'>
        How many women work in the project?
        <BarGraph
          data={[(getValue(Q3.undefined) * 100) / data.length, (getValue(Q3['Less than 5']) * 100) / data.length, ((getValue(Q3['5 - 10']) + getValue(Q3['10 - 15'])) * 100) / data.length, (getValue(Q3['15 - 20']) * 100) / data.length, (getValue(Q3['20 - 50']) * 100) / data.length, (getValue(Q3['50 - 100']) * 100) / data.length, (getValue(Q3['Over 100']) * 100) / data.length]}
          barLabel={
            [
              '0 or\nNo Response',
              '< 5',
              '5 - 15',
              '15 - 20',
              '20 - 50',
              '50 - 100',
              '>= 100',
            ]
          }
          maxValue={70}
          marginLeft={100}
          ticks={[0, 20, 40, 70]}
        />
      </div>
      <h3 className='undp-typography bold margin-bottom-07'>
        Finacial Resources
      </h3>
      <div className='margin-bottom-11'>
        Annual project budget (gourdes)
        <BarGraph
          data={[getValue(Q4['Less than 50 000']), getValue(Q4['50 000 - 100 000']), getValue(Q4['100 000 - 250 000']), getValue(Q4['250 000 - 500 000']), getValue(Q4['500 000 - 1M']), getValue(Q4['1M - 10M']), getValue(Q4['10M - 100M']), getValue(Q4['Over 100M']), getValue(Q4.undefined)]}
          barLabel={
            [
              '< 50K',
              '50K - 100K',
              '100K - 250K',
              '250K - 500K',
              '500K - 1M',
              '1M - 10M',
              '10M - 100M',
              '> 100M',
              'Not Available',
            ]
          }
          maxValue={100}
          marginLeft={100}
          ticks={[0, 25, 50, 75, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        Source and amount of funds allocated to the project by donors
        <StackedBarGraph
          data={[
            [(getValue(Q5_1.yes) * 100) / data.length, (getValue(Q5_1.No) * 100) / data.length, ((data.length - getValue(Q5_1.yes) - getValue(Q5_1.No)) * 100) / data.length],
            [(getValue(Q5_2.yes) * 100) / data.length, (getValue(Q5_2.No) * 100) / data.length, ((data.length - getValue(Q5_2.yes) - getValue(Q5_2.No)) * 100) / data.length],
            [(getValue(Q5_3.yes) * 100) / data.length, (getValue(Q5_3.No) * 100) / data.length, ((data.length - getValue(Q5_3.yes) - getValue(Q5_3.No)) * 100) / data.length],
            [(getValue(Q5_4.yes) * 100) / data.length, (getValue(Q5_4.No) * 100) / data.length, ((data.length - getValue(Q5_4.yes) - getValue(Q5_4.No)) * 100) / data.length],
            [(getValue(Q5_5.yes) * 100) / data.length, (getValue(Q5_5.No) * 100) / data.length, ((data.length - getValue(Q5_5.yes) - getValue(Q5_5.No)) * 100) / data.length],
            [(getValue(Q5_6.yes) * 100) / data.length, (getValue(Q5_6.No) * 100) / data.length, ((data.length - getValue(Q5_6.yes) - getValue(Q5_6.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q5_1.yes) * 100) / data.length, ((getValue(Q5_1.yes) + getValue(Q5_1.No)) * 100) / data.length],
            [0, (getValue(Q5_2.yes) * 100) / data.length, ((getValue(Q5_2.yes) + getValue(Q5_2.No)) * 100) / data.length],
            [0, (getValue(Q5_3.yes) * 100) / data.length, ((getValue(Q5_3.yes) + getValue(Q5_3.No)) * 100) / data.length],
            [0, (getValue(Q5_4.yes) * 100) / data.length, ((getValue(Q5_4.yes) + getValue(Q5_4.No)) * 100) / data.length],
            [0, (getValue(Q5_5.yes) * 100) / data.length, ((getValue(Q5_5.yes) + getValue(Q5_5.No)) * 100) / data.length],
            [0, (getValue(Q5_6.yes) * 100) / data.length, ((getValue(Q5_6.yes) + getValue(Q5_6.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              'National\nGovernment',
              'National\nDonors',
              'International\nDonors',
              'Notables of\nthe area',
              'Decentralised\ncooperation',
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
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Actors
      </h3>
      <div className='margin-bottom-11'>
        Are there other actors involved in solid waste management in your area of intervention?
        <DonutChart
          data={(getValue(Q6.yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Give the following details about the actors
        <StackedBarGraph
          data={[
            [(getValue(Q7_1.yes) * 100) / data.length, (getValue(Q7_1.No) * 100) / data.length, ((data.length - getValue(Q7_1.yes) - getValue(Q7_1.No)) * 100) / data.length],
            [(getValue(Q7_2.yes) * 100) / data.length, (getValue(Q7_2.No) * 100) / data.length, ((data.length - getValue(Q7_2.yes) - getValue(Q7_2.No)) * 100) / data.length],
            [(getValue(Q7_3.yes) * 100) / data.length, (getValue(Q7_3.No) * 100) / data.length, ((data.length - getValue(Q7_3.yes) - getValue(Q7_3.No)) * 100) / data.length],
            [(getValue(Q7_4.yes) * 100) / data.length, (getValue(Q7_4.No) * 100) / data.length, ((data.length - getValue(Q7_4.yes) - getValue(Q7_4.No)) * 100) / data.length],
            [(getValue(Q7_5.yes) * 100) / data.length, (getValue(Q7_5.No) * 100) / data.length, ((data.length - getValue(Q7_5.yes) - getValue(Q7_5.No)) * 100) / data.length],
            [(getValue(Q7_6.yes) * 100) / data.length, (getValue(Q7_6.No) * 100) / data.length, ((data.length - getValue(Q7_6.yes) - getValue(Q7_6.No)) * 100) / data.length],
            [(getValue(Q7_7.yes) * 100) / data.length, (getValue(Q7_7.No) * 100) / data.length, ((data.length - getValue(Q7_7.yes) - getValue(Q7_7.No)) * 100) / data.length],
            [(getValue(Q7_8.yes) * 100) / data.length, (getValue(Q7_8.No) * 100) / data.length, ((data.length - getValue(Q7_8.yes) - getValue(Q7_8.No)) * 100) / data.length],
            [(getValue(Q7_9.yes) * 100) / data.length, (getValue(Q7_9.No) * 100) / data.length, ((data.length - getValue(Q7_9.yes) - getValue(Q7_9.No)) * 100) / data.length],
            [(getValue(Q7_10.yes) * 100) / data.length, (getValue(Q7_10.No) * 100) / data.length, ((data.length - getValue(Q7_10.yes) - getValue(Q7_10.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q7_1.yes) * 100) / data.length, ((getValue(Q7_1.yes) + getValue(Q7_1.No)) * 100) / data.length],
            [0, (getValue(Q7_2.yes) * 100) / data.length, ((getValue(Q7_2.yes) + getValue(Q7_2.No)) * 100) / data.length],
            [0, (getValue(Q7_3.yes) * 100) / data.length, ((getValue(Q7_3.yes) + getValue(Q7_3.No)) * 100) / data.length],
            [0, (getValue(Q7_4.yes) * 100) / data.length, ((getValue(Q7_4.yes) + getValue(Q7_4.No)) * 100) / data.length],
            [0, (getValue(Q7_5.yes) * 100) / data.length, ((getValue(Q7_5.yes) + getValue(Q7_5.No)) * 100) / data.length],
            [0, (getValue(Q7_6.yes) * 100) / data.length, ((getValue(Q7_6.yes) + getValue(Q7_6.No)) * 100) / data.length],
            [0, (getValue(Q7_7.yes) * 100) / data.length, ((getValue(Q7_7.yes) + getValue(Q7_7.No)) * 100) / data.length],
            [0, (getValue(Q7_8.yes) * 100) / data.length, ((getValue(Q7_8.yes) + getValue(Q7_8.No)) * 100) / data.length],
            [0, (getValue(Q7_9.yes) * 100) / data.length, ((getValue(Q7_9.yes) + getValue(Q7_9.No)) * 100) / data.length],
            [0, (getValue(Q7_10.yes) * 100) / data.length, ((getValue(Q7_10.yes) + getValue(Q7_10.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Town hall',
              'Private\ncompanies',
              'NGO',
              'Community\norganizations',
              'SNGRC',
              'Other state\ninstitutes',
              'UNEP',
              'UNDP',
              'Other UN\nagencies',
              'Decentralised\ncooperation',
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
        Partnership Relations
      </h3>
      <div className='margin-bottom-11'>
        Are there partnerships between the town hall and the following actors in relation to solid waste?
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
            [(getValue(Q8_9.Yes) * 100) / data.length, (getValue(Q8_9.No) * 100) / data.length, ((data.length - getValue(Q8_9.Yes) - getValue(Q8_9.No)) * 100) / data.length],
            [(getValue(Q8_10.Yes) * 100) / data.length, (getValue(Q8_10.No) * 100) / data.length, ((data.length - getValue(Q8_10.Yes) - getValue(Q8_10.No)) * 100) / data.length],
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
            [0, (getValue(Q8_9.Yes) * 100) / data.length, ((getValue(Q8_9.Yes) + getValue(Q8_9.No)) * 100) / data.length],
            [0, (getValue(Q8_10.Yes) * 100) / data.length, ((getValue(Q8_10.Yes) + getValue(Q8_10.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Town hall',
              'Private\ncompanies',
              'NGO',
              'Community\norganizations',
              'SNGRC',
              'Other state\ninstitutes',
              'UNEP',
              'UNDP',
              'Other UN\nagencies',
              'Decentralised\ncooperation',
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
        What is your assessment of the quality or impact of the partnership between the project and the following actors?
        <StackedBarGraph
          data={[
            [(getValue(Q9_1.Raised) * 100) / data.length, (getValue(Q9_1.Medium) * 100) / data.length, (getValue(Q9_1.Weak) * 100) / data.length, ((getValue(Q9_1.undefined) + getValue(Q9_1['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_2.Raised) * 100) / data.length, (getValue(Q9_2.Medium) * 100) / data.length, (getValue(Q9_2.Weak) * 100) / data.length, ((getValue(Q9_2.undefined) + getValue(Q9_2['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_3.Raised) * 100) / data.length, (getValue(Q9_3.Medium) * 100) / data.length, (getValue(Q9_3.Weak) * 100) / data.length, ((getValue(Q9_3.undefined) + getValue(Q9_3['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_4.Raised) * 100) / data.length, (getValue(Q9_4.Medium) * 100) / data.length, (getValue(Q9_4.Weak) * 100) / data.length, ((getValue(Q9_4.undefined) + getValue(Q9_4['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_5.Raised) * 100) / data.length, (getValue(Q9_5.Medium) * 100) / data.length, (getValue(Q9_5.Weak) * 100) / data.length, ((getValue(Q9_5.undefined) + getValue(Q9_5['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_6.Raised) * 100) / data.length, (getValue(Q9_6.Medium) * 100) / data.length, (getValue(Q9_6.Weak) * 100) / data.length, ((getValue(Q9_6.undefined) + getValue(Q9_6['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_7.Raised) * 100) / data.length, (getValue(Q9_7.Medium) * 100) / data.length, (getValue(Q9_7.Weak) * 100) / data.length, ((getValue(Q9_7.undefined) + getValue(Q9_7['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_8.Raised) * 100) / data.length, (getValue(Q9_8.Medium) * 100) / data.length, (getValue(Q9_8.Weak) * 100) / data.length, ((getValue(Q9_8.undefined) + getValue(Q9_8['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_9.Raised) * 100) / data.length, (getValue(Q9_9.Medium) * 100) / data.length, (getValue(Q9_9.Weak) * 100) / data.length, ((getValue(Q9_9.undefined) + getValue(Q9_9['Not applicable'])) * 100) / data.length],
            [(getValue(Q9_10.Raised) * 100) / data.length, (getValue(Q9_10.Medium) * 100) / data.length, (getValue(Q9_10.Weak) * 100) / data.length, ((getValue(Q9_10.undefined) + getValue(Q9_10['Not applicable'])) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q9_1.Raised) * 100) / data.length, ((getValue(Q9_1.Raised) + getValue(Q9_1.Medium)) * 100) / data.length, ((getValue(Q9_1.Raised) + getValue(Q9_1.Medium) + getValue(Q9_1.Weak)) * 100) / data.length],
            [0, (getValue(Q9_2.Raised) * 100) / data.length, ((getValue(Q9_2.Raised) + getValue(Q9_2.Medium)) * 100) / data.length, ((getValue(Q9_2.Raised) + getValue(Q9_2.Medium) + getValue(Q9_2.Weak)) * 100) / data.length],
            [0, (getValue(Q9_3.Raised) * 100) / data.length, ((getValue(Q9_3.Raised) + getValue(Q9_3.Medium)) * 100) / data.length, ((getValue(Q9_3.Raised) + getValue(Q9_3.Medium) + getValue(Q9_3.Weak)) * 100) / data.length],
            [0, (getValue(Q9_4.Raised) * 100) / data.length, ((getValue(Q9_4.Raised) + getValue(Q9_4.Medium)) * 100) / data.length, ((getValue(Q9_4.Raised) + getValue(Q9_4.Medium) + getValue(Q9_4.Weak)) * 100) / data.length],
            [0, (getValue(Q9_5.Raised) * 100) / data.length, ((getValue(Q9_5.Raised) + getValue(Q9_5.Medium)) * 100) / data.length, ((getValue(Q9_5.Raised) + getValue(Q9_5.Medium) + getValue(Q9_5.Weak)) * 100) / data.length],
            [0, (getValue(Q9_6.Raised) * 100) / data.length, ((getValue(Q9_6.Raised) + getValue(Q9_6.Medium)) * 100) / data.length, ((getValue(Q9_6.Raised) + getValue(Q9_6.Medium) + getValue(Q9_6.Weak)) * 100) / data.length],
            [0, (getValue(Q9_7.Raised) * 100) / data.length, ((getValue(Q9_7.Raised) + getValue(Q9_7.Medium)) * 100) / data.length, ((getValue(Q9_7.Raised) + getValue(Q9_7.Medium) + getValue(Q9_7.Weak)) * 100) / data.length],
            [0, (getValue(Q9_8.Raised) * 100) / data.length, ((getValue(Q9_8.Raised) + getValue(Q9_8.Medium)) * 100) / data.length, ((getValue(Q9_8.Raised) + getValue(Q9_8.Medium) + getValue(Q9_8.Weak)) * 100) / data.length],
            [0, (getValue(Q9_9.Raised) * 100) / data.length, ((getValue(Q9_9.Raised) + getValue(Q9_9.Medium)) * 100) / data.length, ((getValue(Q9_9.Raised) + getValue(Q9_9.Medium) + getValue(Q9_9.Weak)) * 100) / data.length],
            [0, (getValue(Q9_10.Raised) * 100) / data.length, ((getValue(Q9_10.Raised) + getValue(Q9_10.Medium)) * 100) / data.length, ((getValue(Q9_10.Raised) + getValue(Q9_10.Medium) + getValue(Q9_10.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Town hall',
              'Private\ncompanies',
              'NGO',
              'Community\norganizations',
              'SNGRC',
              'Other state\ninstitutes',
              'UNEP',
              'UNDP',
              'Other UN\nagencies',
              'Decentralised\ncooperation',
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
              'Not Applicable or No response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Type of Wastes
      </h3>
      <div className='margin-bottom-11'>
        At what level do the following types of waste in your area of intervention meet?
        <StackedBarGraph
          data={[
            [(getValue(Q10_1.Raised) * 100) / data.length, (getValue(Q10_1.Medium) * 100) / data.length, (getValue(Q10_1.Weak) * 100) / data.length, (getValue(Q10_1.undefined) * 100) / data.length],
            [(getValue(Q10_2.Raised) * 100) / data.length, (getValue(Q10_2.Medium) * 100) / data.length, (getValue(Q10_2.Weak) * 100) / data.length, (getValue(Q10_2.undefined) * 100) / data.length],
            [(getValue(Q10_3.Raised) * 100) / data.length, (getValue(Q10_3.Medium) * 100) / data.length, (getValue(Q10_3.Weak) * 100) / data.length, (getValue(Q10_3.undefined) * 100) / data.length],
            [(getValue(Q10_4.Raised) * 100) / data.length, (getValue(Q10_4.Medium) * 100) / data.length, (getValue(Q10_4.Weak) * 100) / data.length, (getValue(Q10_4.undefined) * 100) / data.length],
            [(getValue(Q10_5.Raised) * 100) / data.length, (getValue(Q10_5.Medium) * 100) / data.length, (getValue(Q10_5.Weak) * 100) / data.length, (getValue(Q10_5.undefined) * 100) / data.length],
            [(getValue(Q10_6.Raised) * 100) / data.length, (getValue(Q10_6.Medium) * 100) / data.length, (getValue(Q10_6.Weak) * 100) / data.length, (getValue(Q10_6.undefined) * 100) / data.length],
            [(getValue(Q10_7.Raised) * 100) / data.length, (getValue(Q10_7.Medium) * 100) / data.length, (getValue(Q10_7.Weak) * 100) / data.length, (getValue(Q10_7.undefined) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q10_1.Raised) * 100) / data.length, ((getValue(Q10_1.Raised) + getValue(Q10_1.Medium)) * 100) / data.length, ((getValue(Q10_1.Raised) + getValue(Q10_1.Medium) + getValue(Q10_1.Weak)) * 100) / data.length],
            [0, (getValue(Q10_2.Raised) * 100) / data.length, ((getValue(Q10_2.Raised) + getValue(Q10_2.Medium)) * 100) / data.length, ((getValue(Q10_2.Raised) + getValue(Q10_2.Medium) + getValue(Q10_2.Weak)) * 100) / data.length],
            [0, (getValue(Q10_3.Raised) * 100) / data.length, ((getValue(Q10_3.Raised) + getValue(Q10_3.Medium)) * 100) / data.length, ((getValue(Q10_3.Raised) + getValue(Q10_3.Medium) + getValue(Q10_3.Weak)) * 100) / data.length],
            [0, (getValue(Q10_4.Raised) * 100) / data.length, ((getValue(Q10_4.Raised) + getValue(Q10_4.Medium)) * 100) / data.length, ((getValue(Q10_4.Raised) + getValue(Q10_4.Medium) + getValue(Q10_4.Weak)) * 100) / data.length],
            [0, (getValue(Q10_5.Raised) * 100) / data.length, ((getValue(Q10_5.Raised) + getValue(Q10_5.Medium)) * 100) / data.length, ((getValue(Q10_5.Raised) + getValue(Q10_5.Medium) + getValue(Q10_5.Weak)) * 100) / data.length],
            [0, (getValue(Q10_6.Raised) * 100) / data.length, ((getValue(Q10_6.Raised) + getValue(Q10_6.Medium)) * 100) / data.length, ((getValue(Q10_6.Raised) + getValue(Q10_6.Medium) + getValue(Q10_6.Weak)) * 100) / data.length],
            [0, (getValue(Q10_7.Raised) * 100) / data.length, ((getValue(Q10_7.Raised) + getValue(Q10_7.Medium)) * 100) / data.length, ((getValue(Q10_7.Raised) + getValue(Q10_7.Medium) + getValue(Q10_7.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Agricultural',
              'Plastic',
              'Metal',
              'Medical',
              'Paper/cardboard',
              'Glass',
              'Textile',
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
              'No response',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Negative Impact of Solid Waste
      </h3>
      <div className='margin-bottom-11'>
        Have you detected recurrent cases of solid waste-related diseases in your municipality?
        <DonutChart
          data={(getValue(Q11.Yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Specify whether you have observed the following diseases
        <StackedBarGraph
          data={[
            [(getValue(Q12_1.Yes) * 100) / data.length, (getValue(Q12_1.No) * 100) / data.length, ((data.length - getValue(Q12_1.Yes) - getValue(Q12_1.No)) * 100) / data.length],
            [(getValue(Q12_2.Yes) * 100) / data.length, (getValue(Q12_2.No) * 100) / data.length, ((data.length - getValue(Q12_2.Yes) - getValue(Q12_2.No)) * 100) / data.length],
            [(getValue(Q12_3.Yes) * 100) / data.length, (getValue(Q12_3.No) * 100) / data.length, ((data.length - getValue(Q12_3.Yes) - getValue(Q12_3.No)) * 100) / data.length],
            [(getValue(Q12_4.Yes) * 100) / data.length, (getValue(Q12_4.No) * 100) / data.length, ((data.length - getValue(Q12_4.Yes) - getValue(Q12_4.No)) * 100) / data.length],
            [(getValue(Q12_5.Yes) * 100) / data.length, (getValue(Q12_5.No) * 100) / data.length, ((data.length - getValue(Q12_5.Yes) - getValue(Q12_5.No)) * 100) / data.length],
            [(getValue(Q12_6.Yes) * 100) / data.length, (getValue(Q12_6.No) * 100) / data.length, ((data.length - getValue(Q12_6.Yes) - getValue(Q12_6.No)) * 100) / data.length],
            [(getValue(Q12_7.Yes) * 100) / data.length, (getValue(Q12_7.No) * 100) / data.length, ((data.length - getValue(Q12_7.Yes) - getValue(Q12_7.No)) * 100) / data.length],
            [(getValue(Q12_8.Yes) * 100) / data.length, (getValue(Q12_8.No) * 100) / data.length, ((data.length - getValue(Q12_8.Yes) - getValue(Q12_8.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q12_1.Yes) * 100) / data.length, ((getValue(Q12_1.Yes) + getValue(Q12_1.No)) * 100) / data.length],
            [0, (getValue(Q12_2.Yes) * 100) / data.length, ((getValue(Q12_2.Yes) + getValue(Q12_2.No)) * 100) / data.length],
            [0, (getValue(Q12_3.Yes) * 100) / data.length, ((getValue(Q12_3.Yes) + getValue(Q12_3.No)) * 100) / data.length],
            [0, (getValue(Q12_4.Yes) * 100) / data.length, ((getValue(Q12_4.Yes) + getValue(Q12_4.No)) * 100) / data.length],
            [0, (getValue(Q12_5.Yes) * 100) / data.length, ((getValue(Q12_5.Yes) + getValue(Q12_5.No)) * 100) / data.length],
            [0, (getValue(Q12_6.Yes) * 100) / data.length, ((getValue(Q12_6.Yes) + getValue(Q12_6.No)) * 100) / data.length],
            [0, (getValue(Q12_7.Yes) * 100) / data.length, ((getValue(Q12_7.Yes) + getValue(Q12_7.No)) * 100) / data.length],
            [0, (getValue(Q12_8.Yes) * 100) / data.length, ((getValue(Q12_8.Yes) + getValue(Q12_8.No)) * 100) / data.length],
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
        Have you detected any environmental problems related to solid waste management in your municipality?
        <DonutChart
          data={(getValue(Q13.Yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Specify if you have observed the following environmental problems
        <StackedBarGraph
          data={[
            [(getValue(Q14_1.Yes) * 100) / data.length, (getValue(Q14_1.No) * 100) / data.length, ((data.length - getValue(Q14_1.Yes) - getValue(Q14_1.No)) * 100) / data.length],
            [(getValue(Q14_2.Yes) * 100) / data.length, (getValue(Q14_2.No) * 100) / data.length, ((data.length - getValue(Q14_2.Yes) - getValue(Q14_2.No)) * 100) / data.length],
            [(getValue(Q14_3.Yes) * 100) / data.length, (getValue(Q14_3.No) * 100) / data.length, ((data.length - getValue(Q14_3.Yes) - getValue(Q14_3.No)) * 100) / data.length],
            [(getValue(Q14_4.Yes) * 100) / data.length, (getValue(Q14_4.No) * 100) / data.length, ((data.length - getValue(Q14_4.Yes) - getValue(Q14_4.No)) * 100) / data.length],
            [(getValue(Q14_5.Yes) * 100) / data.length, (getValue(Q14_5.No) * 100) / data.length, ((data.length - getValue(Q14_5.Yes) - getValue(Q14_5.No)) * 100) / data.length],
            [(getValue(Q14_6.Yes) * 100) / data.length, (getValue(Q14_6.No) * 100) / data.length, ((data.length - getValue(Q14_6.Yes) - getValue(Q14_6.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q14_1.Yes) * 100) / data.length, ((getValue(Q14_1.Yes) + getValue(Q14_1.No)) * 100) / data.length],
            [0, (getValue(Q14_2.Yes) * 100) / data.length, ((getValue(Q14_2.Yes) + getValue(Q14_2.No)) * 100) / data.length],
            [0, (getValue(Q14_3.Yes) * 100) / data.length, ((getValue(Q14_3.Yes) + getValue(Q14_3.No)) * 100) / data.length],
            [0, (getValue(Q14_4.Yes) * 100) / data.length, ((getValue(Q14_4.Yes) + getValue(Q14_4.No)) * 100) / data.length],
            [0, (getValue(Q14_5.Yes) * 100) / data.length, ((getValue(Q14_5.Yes) + getValue(Q14_5.No)) * 100) / data.length],
            [0, (getValue(Q14_6.Yes) * 100) / data.length, ((getValue(Q14_6.Yes) + getValue(Q14_6.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Landfill close\nto water',
              'Insalubrity of\nroad networks',
              'Obstruction of\nroad networks',
              'Insalubrity of\npublic market',
              'Insalubrity of\npublic beaches',
              'Destruction of\nmangroves',
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
        Community Commitment
      </h3>
      <div className='margin-bottom-11'>
        In your opinion, what is the level of commitment of the town hall of your area of intervention in the management of solid waste
        <DonutChart
          data={(getValue(Q15.Weak) * 100) / data.length}
          subText='says low'
          color='#D12800'
        />
      </div>
      <div className='margin-bottom-11'>
        In your opinion, what is the level of engagement of the population of your area of intervention in the management of solid waste
        <DonutChart
          data={(getValue(Q16.Weak) * 100) / data.length}
          subText='says low'
          color='#D12800'
        />
      </div>
      <div className='margin-bottom-11'>
        In your opinion, what is the level of awareness of the population in your area of intervention in terms of solid waste manageme
        <DonutChart
          data={(getValue(Q17.Weak) * 100) / data.length}
          subText='says low'
          color='#D12800'
        />
      </div>
      <div className='margin-bottom-11'>
        Have you detected any innovations related to solid waste management in your area of intervention?
        <DonutChart
          data={(getValue(Q18.No) * 100) / data.length}
          subText='says no'
          color='#D12800'
        />
      </div>
    </div>
  );
};
