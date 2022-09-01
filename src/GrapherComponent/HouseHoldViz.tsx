import flatten from 'lodash.flatten';
import countBy from 'lodash.countby';
import { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context/Context';
import { HouseHoldLanguage } from '../Data/Language/household';
import { CtxDataType } from '../Types';
import { BarGraph } from './BarGraph';
import { DonutChart } from './DonutChart';
import { StackedBarGraph } from './StackedBarGraph';
import { GroupBarGraph } from './GroupBarGraph';
import { getValue } from '../utils/getValue';

interface Props {
  data: any;
}

const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  color: var(--primary-blue);
  margin-bottom: 2rem;
`;

const QueTitleEl = styled.div`
  margin-bottom: 4rem;
  font-size: 1.8rem;
  color: var(--black-550);
`;

export const HouseHoldViz = (props: Props) => {
  const {
    data,
  } = props;
  const {
    language,
  } = useContext(Context) as CtxDataType;
  const Q1 = countBy(data, (d) => d['What is your assessment of the volume of solid waste  produced by your household?']);
  const Q2_1 = countBy(data, (d) => d['Organic waste']);
  const Q2_2 = countBy(data, (d) => d['Plastic waste...16']);
  const Q2_3 = countBy(data, (d) => d['Metals...17']);
  const Q2_4 = countBy(data, (d) => d['Medical waste...18']);
  const Q2_5 = countBy(data, (d) => d['Other...19']);
  const Q3_1 = countBy(data, (d) => d['Throwing into public garbage cans/dumpsters...25']);
  const Q3_2 = countBy(data, (d) => d.Burning);
  const Q3_3 = countBy(data, (d) => d['Use/Purchase of town hall services/SNGRS...22']);
  const Q3_4 = countBy(data, (d) => d['Purchase of servicesfrom a private company or an individual']);
  const Q3_5 = countBy(data, (d) => d['Throwing into a ravine, the river, the sea...26']);
  const Q3_6 = countBy(data, (d) => d['Throwing into an empty lot/landfill...28']);
  const Q3_7 = countBy(data, (d) => d['Recycling (manure, handicrafts)']);
  const Q3_8 = countBy(data, (d) => d['Throwing into the plot ("jaden") or free land']);
  const Q3_9 = countBy(data, (d) => d['Throwing into the street, sewers...24']);
  const Q4 = countBy(data, (d) => d['How often does your household empty its poubels of solid waste?']);
  const Q5_1 = countBy(data, (d) => d['Use/Purchase of town hall services/SNGRS...32']);
  const Q5_2 = countBy(data, (d) => d['Purchase of services from a private company or an individual']);
  const Q5_3 = countBy(data, (d) => d['Throwing into the street, sewers...34']);
  const Q5_4 = countBy(data, (d) => d['Throwing into public garbage cans/dumpsters...35']);
  const Q5_5 = countBy(data, (d) => d['Throwing into a ravine, the river, the sea...36']);
  const Q5_6 = countBy(data, (d) => d['Throwing into the plot ("jaden")']);
  const Q5_7 = countBy(data, (d) => d['Throwing into an empty lot/landfill...38']);
  const Q5_8 = countBy(data, (d) => d.Brulage);
  const Q5_9 = countBy(data, (d) => d['Composting (Manure)']);
  const Q6 = countBy(data, (d) => d['Does your household sort solid waste (organic, inorganic) at home?']);
  const Q7 = countBy(data, (d) => d['Are you ready to sort the waste before disposing of it to facilitate its recovery?']);
  const Q8 = countBy(data, (d) => d['Does your household store its solid waste  in sachets?']);
  const Q9 = countBy(data, (d) => d['In your opinion, what is the level of responsibility of households in the management of solid waste in your municipality?']);
  const Q10 = countBy(data, (d) => d['Who do you think is responsible for solid waste management in your municipality?']);
  const Q11 = countBy(data, (d) => d['Does your household buy garbage collection services?']);
  const Q12_1 = countBy(flatten(data.map((d: any) => d['Private companies...62']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q12_2 = countBy(flatten(data.map((d: any) => d.SpecifywhethertheTownHallis_n?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q12_3 = countBy(flatten(data.map((d: any) => d['Community-based organizations...65']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_1 = countBy(data, (d) => d.Households);
  const Q13_2 = countBy(data, (d) => d.Procurement);
  const Q13_3 = countBy(data, (d) => d.Enterprises);
  const Q13_4 = countBy(data, (d) => d.Schools);
  const Q13_5 = countBy(data, (d) => d['Hospitals/Health Centres']);
  const Q14 = countBy(data, (d) => d['Have you detected recurrent cases of solid waste-related diseases in your municipality?']);
  const Q15 = countBy(data, (d) => d['Have you detected any environmental problems related to solid waste management in your municipality?']);
  const Q16_1 = countBy(data, (d) => d['In your opinion, what is the level of commitment of the population of your municipality in the management of solid waste']);
  const Q16_2 = countBy(data, (d) => d['In your opinion, what is the level of commitment of the town hall of your area of intervention in the management of solid waste']);
  const Q17 = countBy(data, (d) => d['In your opinion, what is the level of awareness of the population of your municipality in terms of solid waste management']);
  const Q18 = countBy(data, (d) => d['Have you observed any changes in household behaviour in the area of solid waste management over the past three years?']);
  const Q19 = countBy(data, (d) => d['Have you detected any innovations related to solid waste management in your municipality?']);
  return (
    <div>
      <H2>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'wasteGeneration')][language]}
      </H2>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'What is your assessment of the volume of solid waste  produced by your household?')][language]}
        <BarGraph
          data={[(getValue(Q1.Raised) * 100) / data.length, (getValue(Q1.Medium) * 100) / data.length, (getValue(Q1.Weak) * 100) / data.length, ((getValue(Q1['I do not know']) + getValue(Q1.undefined)) * 100) / data.length]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Raised')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Medium')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Weak')][language],
              `${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'I do not know')][language]} or\n${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language]}`,
            ]
          }
          maxValue={60}
          marginLeft={100}
          ticks={[0, 20, 40, 60]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'At what level does your household produce the following waste?')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q2_1.Raised) * 100) / data.length, (getValue(Q2_1.Medium) * 100) / data.length, (getValue(Q2_1.Weak) * 100) / data.length, ((getValue(Q2_1['I do not know']) + getValue(Q2_1.undefined)) * 100) / data.length],
            [(getValue(Q2_2.Raised) * 100) / data.length, (getValue(Q2_2.Medium) * 100) / data.length, (getValue(Q2_2.Weak) * 100) / data.length, ((getValue(Q2_2['I do not know']) + getValue(Q2_2.undefined)) * 100) / data.length],
            [(getValue(Q2_3.Raised) * 100) / data.length, (getValue(Q2_3.Medium) * 100) / data.length, (getValue(Q2_3.Weak) * 100) / data.length, ((getValue(Q2_3['I do not know']) + getValue(Q2_3.undefined)) * 100) / data.length],
            [(getValue(Q2_4.Raised) * 100) / data.length, (getValue(Q2_4.Medium) * 100) / data.length, (getValue(Q2_4.Weak) * 100) / data.length, ((getValue(Q2_4['I do not know']) + getValue(Q2_4.undefined)) * 100) / data.length],
            [(getValue(Q2_5.Raised) * 100) / data.length, (getValue(Q2_5.Medium) * 100) / data.length, (getValue(Q2_5.Weak) * 100) / data.length, ((getValue(Q2_5['I do not know']) + getValue(Q2_5.undefined)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q2_1.Raised) * 100) / data.length, ((getValue(Q2_1.Raised) + getValue(Q2_1.Medium)) * 100) / data.length, ((getValue(Q2_1.Raised) + getValue(Q2_1.Medium) + getValue(Q2_1.Weak)) * 100) / data.length],
            [0, (getValue(Q2_2.Raised) * 100) / data.length, ((getValue(Q2_2.Raised) + getValue(Q2_2.Medium)) * 100) / data.length, ((getValue(Q2_2.Raised) + getValue(Q2_2.Medium) + getValue(Q2_2.Weak)) * 100) / data.length],
            [0, (getValue(Q2_3.Raised) * 100) / data.length, ((getValue(Q2_3.Raised) + getValue(Q2_3.Medium)) * 100) / data.length, ((getValue(Q2_3.Raised) + getValue(Q2_3.Medium) + getValue(Q2_3.Weak)) * 100) / data.length],
            [0, (getValue(Q2_4.Raised) * 100) / data.length, ((getValue(Q2_4.Raised) + getValue(Q2_4.Medium)) * 100) / data.length, ((getValue(Q2_4.Raised) + getValue(Q2_4.Medium) + getValue(Q2_4.Weak)) * 100) / data.length],
            [0, (getValue(Q2_5.Raised) * 100) / data.length, ((getValue(Q2_5.Raised) + getValue(Q2_5.Medium)) * 100) / data.length, ((getValue(Q2_5.Raised) + getValue(Q2_5.Medium) + getValue(Q2_5.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'organicWaste')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'plasticWaste')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'metals')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'medicalWaste')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'others')][language],
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#006EB5', '#4F95DD', '#94C4F5', '#AAA']}
          colorKey={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Raised')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Medium')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Weak')][language],
              `${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'I do not know')][language]} or ${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language]}`,
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </QueTitleEl>
      <H2>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'wasteDisposal')][language]}
      </H2>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'What is your household doing to get rid of/manage its waste?')][language]}
        <BarGraph
          data={[(getValue(Q3_1.Yes) * 100) / data.length, (getValue(Q3_2.Yes) * 100) / data.length, (getValue(Q3_3.Yes) * 100) / data.length, (getValue(Q3_4.Yes) * 100) / data.length, (getValue(Q3_5.Yes) * 100) / data.length, (getValue(Q3_6.Yes) * 100) / data.length, (getValue(Q3_7.Yes) * 100) / data.length, (getValue(Q3_8.Yes) * 100) / data.length, (getValue(Q3_9.Yes) * 100) / data.length]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into public garbage cans/dumpsters')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'burning')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Use/Purchase of town hall services/SNGRS')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Purchase of servicesfrom a private company or an individual')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into a ravine, the river, the sea')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into an empty lot/landfil')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'recycling')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into the plot ("jaden") or empty land')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into the street, sewers')][language],
            ]
          }
          maxValue={60}
          marginLeft={100}
          ticks={[0, 20, 40, 60]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'How often does your household empty its bin of solid waste?')][language]}
        <BarGraph
          data={[(getValue(Q4['3 times every 15 days']) * 100) / data.length, (getValue(Q4['2 times every 15 days']) * 100) / data.length, (getValue(Q4['Once every 15 days']) * 100) / data.length, ((getValue(Q4['Not applicable']) + getValue(Q4.undefined)) * 100) / data.length]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === '3 times every 15 days')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === '2 times every 15 days')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Once every 15 days')][language],
              `${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Not applicable')][language]} or\n${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language]}`,
            ]
          }
          maxValue={40}
          marginLeft={100}
          ticks={[0, 10, 20, 30, 40]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'How often does your household use the following methods to dispose of its waste?')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q5_1.Raised) * 100) / data.length, (getValue(Q5_1.Medium) * 100) / data.length, (getValue(Q5_1.Weak) * 100) / data.length, ((getValue(Q5_1['Not applicable']) + getValue(Q5_1.undefined)) * 100) / data.length],
            [(getValue(Q5_2.Raised) * 100) / data.length, (getValue(Q5_2.Medium) * 100) / data.length, (getValue(Q5_2.Weak) * 100) / data.length, ((getValue(Q5_2['Not applicable']) + getValue(Q5_2.undefined)) * 100) / data.length],
            [(getValue(Q5_3.Raised) * 100) / data.length, (getValue(Q5_3.Medium) * 100) / data.length, (getValue(Q5_3.Weak) * 100) / data.length, ((getValue(Q5_3['Not applicable']) + getValue(Q5_3.undefined)) * 100) / data.length],
            [(getValue(Q5_4.Raised) * 100) / data.length, (getValue(Q5_4.Medium) * 100) / data.length, (getValue(Q5_4.Weak) * 100) / data.length, ((getValue(Q5_4['Not applicable']) + getValue(Q5_4.undefined)) * 100) / data.length],
            [(getValue(Q5_5.Raised) * 100) / data.length, (getValue(Q5_5.Medium) * 100) / data.length, (getValue(Q5_5.Weak) * 100) / data.length, ((getValue(Q5_5['Not applicable']) + getValue(Q5_5.undefined)) * 100) / data.length],
            [(getValue(Q5_6.Raised) * 100) / data.length, (getValue(Q5_6.Medium) * 100) / data.length, (getValue(Q5_6.Weak) * 100) / data.length, ((getValue(Q5_6['Not applicable']) + getValue(Q5_6.undefined)) * 100) / data.length],
            [(getValue(Q5_7.Raised) * 100) / data.length, (getValue(Q5_7.Medium) * 100) / data.length, (getValue(Q5_7.Weak) * 100) / data.length, ((getValue(Q5_7['Not applicable']) + getValue(Q5_7.undefined)) * 100) / data.length],
            [(getValue(Q5_8.Raised) * 100) / data.length, (getValue(Q5_8.Medium) * 100) / data.length, (getValue(Q5_8.Weak) * 100) / data.length, ((getValue(Q5_8['Not applicable']) + getValue(Q5_8.undefined)) * 100) / data.length],
            [(getValue(Q5_9.Raised) * 100) / data.length, (getValue(Q5_9.Medium) * 100) / data.length, (getValue(Q5_9.Weak) * 100) / data.length, ((getValue(Q5_9['Not applicable']) + getValue(Q5_9.undefined)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q5_1.Raised) * 100) / data.length, ((getValue(Q5_1.Raised) + getValue(Q5_1.Medium)) * 100) / data.length, ((getValue(Q5_1.Raised) + getValue(Q5_1.Medium) + getValue(Q5_1.Weak)) * 100) / data.length],
            [0, (getValue(Q5_2.Raised) * 100) / data.length, ((getValue(Q5_2.Raised) + getValue(Q5_2.Medium)) * 100) / data.length, ((getValue(Q5_2.Raised) + getValue(Q5_2.Medium) + getValue(Q5_2.Weak)) * 100) / data.length],
            [0, (getValue(Q5_3.Raised) * 100) / data.length, ((getValue(Q5_3.Raised) + getValue(Q5_3.Medium)) * 100) / data.length, ((getValue(Q5_3.Raised) + getValue(Q5_3.Medium) + getValue(Q5_3.Weak)) * 100) / data.length],
            [0, (getValue(Q5_4.Raised) * 100) / data.length, ((getValue(Q5_4.Raised) + getValue(Q5_4.Medium)) * 100) / data.length, ((getValue(Q5_4.Raised) + getValue(Q5_4.Medium) + getValue(Q5_4.Weak)) * 100) / data.length],
            [0, (getValue(Q5_5.Raised) * 100) / data.length, ((getValue(Q5_5.Raised) + getValue(Q5_5.Medium)) * 100) / data.length, ((getValue(Q5_5.Raised) + getValue(Q5_5.Medium) + getValue(Q5_5.Weak)) * 100) / data.length],
            [0, (getValue(Q5_6.Raised) * 100) / data.length, ((getValue(Q5_6.Raised) + getValue(Q5_6.Medium)) * 100) / data.length, ((getValue(Q5_6.Raised) + getValue(Q5_6.Medium) + getValue(Q5_6.Weak)) * 100) / data.length],
            [0, (getValue(Q5_7.Raised) * 100) / data.length, ((getValue(Q5_7.Raised) + getValue(Q5_7.Medium)) * 100) / data.length, ((getValue(Q5_7.Raised) + getValue(Q5_7.Medium) + getValue(Q5_7.Weak)) * 100) / data.length],
            [0, (getValue(Q5_8.Raised) * 100) / data.length, ((getValue(Q5_8.Raised) + getValue(Q5_8.Medium)) * 100) / data.length, ((getValue(Q5_8.Raised) + getValue(Q5_8.Medium) + getValue(Q5_8.Weak)) * 100) / data.length],
            [0, (getValue(Q5_9.Raised) * 100) / data.length, ((getValue(Q5_9.Raised) + getValue(Q5_9.Medium)) * 100) / data.length, ((getValue(Q5_9.Raised) + getValue(Q5_9.Medium) + getValue(Q5_9.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Use/Purchase of town hall services/SNGRS')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Purchase of servicesfrom a private company or an individual')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into the street, sewers')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into public garbage cans/dumpsters')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into a ravine, the river, the sea')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into the plot ("jaden") or empty land')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Throwing into an empty lot/landfil')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'burning')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'recycling')][language],
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#006EB5', '#4F95DD', '#94C4F5', '#AAA']}
          colorKey={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Raised')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Medium')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Weak')][language],
              `${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Not applicable')][language]} or ${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language]}`,
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Does your household sort solid waste (organic, inorganic) at home?')][language]}
        <DonutChart
          data={(getValue(Q6.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Are you ready to sort the waste before disposing of it to facilitate its recycling?')][language]}
        <DonutChart
          data={(getValue(Q7.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Does your household store its solid waste  in sachets?')][language]}
        <DonutChart
          data={(getValue(Q8.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
      <H2>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'purchaseOfService')][language]}
      </H2>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Does your household buy garbage collection services?')][language]}
        <DonutChart
          data={(getValue(Q11.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
      <H2>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'actorsInvolved')][language]}
      </H2>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'In your opinion, what is the level of responsibility of households in the management of solid waste in your municipality?')][language]}
        <BarGraph
          data={[(getValue(Q9['Important role to play']) * 100) / data.length, (getValue(Q9['Not important role to play']) * 100) / data.length, (getValue(Q9['No role']) * 100) / data.length, ((getValue(Q9['I do not know']) + getValue(Q4.undefined)) * 100) / data.length]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Important role to play')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Not important role to play')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No role')][language],
              `${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'I do not know')][language]} or\n${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language]}`,
            ]
          }
          maxValue={100}
          marginLeft={100}
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Who do you think is responsible for solid waste management in your municipality?')][language]}
        <BarGraph
          data={[(getValue(Q10.Households) * 100) / data.length, (getValue(Q10['Private companies']) * 100) / data.length, (getValue(Q10['The state']) * 100) / data.length, (getValue(Q10['The town hall']) * 100) / data.length, ((getValue(Q10['I do not know']) + getValue(Q10.undefined)) * 100) / data.length]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Households')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Private companies')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'The state')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'The town hall')][language],
              `${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'I do not know')][language]} or\n${HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language]}`,
            ]
          }
          maxValue={100}
          marginLeft={100}
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Does your household buy garbage collection services?')][language]}
        <DonutChart
          data={(getValue(Q11.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'What is the main projects/activities the following actors are involved?')][language]}
        <GroupBarGraph
          data={[
            [getValue(Q12_1['waste collection']), getValue(Q12_2['waste collection']), getValue(Q12_3['waste collection'])],
            [getValue(Q12_1.sorting), getValue(Q12_2.sorting), getValue(Q12_3.sorting)],
            [getValue(Q12_1.treatment), getValue(Q12_2.treatment), getValue(Q12_3.treatment)],
            [getValue(Q12_1.storage), getValue(Q12_2.storage), getValue(Q12_3.storage)],
            [getValue(Q12_1['incineration/destruction']), getValue(Q12_2['incineration/destruction']), getValue(Q12_3['incineration/destruction'])],
            [getValue(Q12_1['recycling (including crafts)']), getValue(Q12_2['recycling (including crafts)']) + getValue(Q12_2['recycling (including handicrafts)']), getValue(Q12_3['recycling (including crafts)']) + getValue(Q12_3['recycling (including handicrafts)'])],
          ]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'wasteCollection')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'sorting')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'treatment')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'storage')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'incineration/destruction')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'recycling')][language],
            ]
          }
          maxValue={175}
          marginLeft={100}
          color={['#006EB5', '#59BA47', '#FBC412']}
          colorKey={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'privateCompanies')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'The town hall')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'communityOrg')][language],
            ]
          }
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Assessments regarding the level of waste generation of the following spaces/institutions')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q13_1.Raised) * 100) / data.length, (getValue(Q13_1.Medium) * 100) / data.length, (getValue(Q13_1.Weak) * 100) / data.length, (getValue(Q13_1.undefined) * 100) / data.length],
            [(getValue(Q13_2.Raised) * 100) / data.length, (getValue(Q13_2.Medium) * 100) / data.length, (getValue(Q13_2.Weak) * 100) / data.length, (getValue(Q13_2.undefined) * 100) / data.length],
            [(getValue(Q13_3.Raised) * 100) / data.length, (getValue(Q13_3.Medium) * 100) / data.length, (getValue(Q13_3.Weak) * 100) / data.length, (getValue(Q13_3.undefined) * 100) / data.length],
            [(getValue(Q13_4.Raised) * 100) / data.length, (getValue(Q13_4.Medium) * 100) / data.length, (getValue(Q13_4.Weak) * 100) / data.length, (getValue(Q13_4.undefined) * 100) / data.length],
            [(getValue(Q13_5.Raised) * 100) / data.length, (getValue(Q13_5.Medium) * 100) / data.length, (getValue(Q13_5.Weak) * 100) / data.length, (getValue(Q13_5.undefined) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q13_1.Raised) * 100) / data.length, ((getValue(Q13_1.Raised) + getValue(Q13_1.Medium)) * 100) / data.length, ((getValue(Q13_1.Raised) + getValue(Q13_1.Medium) + getValue(Q13_1.Weak)) * 100) / data.length],
            [0, (getValue(Q13_2.Raised) * 100) / data.length, ((getValue(Q13_2.Raised) + getValue(Q13_2.Medium)) * 100) / data.length, ((getValue(Q13_2.Raised) + getValue(Q13_2.Medium) + getValue(Q13_2.Weak)) * 100) / data.length],
            [0, (getValue(Q13_3.Raised) * 100) / data.length, ((getValue(Q13_3.Raised) + getValue(Q13_3.Medium)) * 100) / data.length, ((getValue(Q13_3.Raised) + getValue(Q13_3.Medium) + getValue(Q13_3.Weak)) * 100) / data.length],
            [0, (getValue(Q13_4.Raised) * 100) / data.length, ((getValue(Q13_4.Raised) + getValue(Q13_4.Medium)) * 100) / data.length, ((getValue(Q13_4.Raised) + getValue(Q13_4.Medium) + getValue(Q13_4.Weak)) * 100) / data.length],
            [0, (getValue(Q13_5.Raised) * 100) / data.length, ((getValue(Q13_5.Raised) + getValue(Q13_5.Medium)) * 100) / data.length, ((getValue(Q13_5.Raised) + getValue(Q13_5.Medium) + getValue(Q13_5.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Households')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'publicSector')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'enterprises')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'schools')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'hospitals')][language],
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#006EB5', '#4F95DD', '#94C4F5', '#AAA']}
          colorKey={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Raised')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Medium')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Weak')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </QueTitleEl>
      <H2>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'negativeImpact')][language]}
      </H2>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Have you detected recurrent cases of solid waste-related diseases in your municipality?')][language]}
        <DonutChart
          data={(getValue(Q14.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Have you detected any environmental problems related to solid waste management in your municipality?')][language]}
        <DonutChart
          data={(getValue(Q15.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
      <H2>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'communityCommitments')][language]}
      </H2>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'In your opinion, what is the level of commitment of the following actors in the management of solid waste?')][language]}
        <StackedBarGraph
          data={[
            [(getValue(Q16_1.Raised) * 100) / data.length, (getValue(Q16_1.Medium) * 100) / data.length, (getValue(Q16_1.Weak) * 100) / data.length, ((getValue(Q16_1['Not applicable']) + getValue(Q16_1.undefined)) * 100) / data.length],
            [(getValue(Q16_2.Raised) * 100) / data.length, (getValue(Q16_2.Medium) * 100) / data.length, (getValue(Q16_2.Weak) * 100) / data.length, ((getValue(Q16_2['Not applicable']) + getValue(Q16_2.undefined)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q16_1.Raised) * 100) / data.length, ((getValue(Q16_1.Raised) + getValue(Q16_1.Medium)) * 100) / data.length, ((getValue(Q16_1.Raised) + getValue(Q16_1.Medium) + getValue(Q16_1.Weak)) * 100) / data.length],
            [0, (getValue(Q16_2.Raised) * 100) / data.length, ((getValue(Q16_2.Raised) + getValue(Q16_2.Medium)) * 100) / data.length, ((getValue(Q16_2.Raised) + getValue(Q16_2.Medium) + getValue(Q16_2.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'municipality')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'The town hall')][language],
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#006EB5', '#4F95DD', '#94C4F5', '#AAA']}
          colorKey={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Raised')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Medium')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Weak')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language],
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'In your opinion, what is the level of awareness of the population of your municipality in terms of solid waste management?')][language]}
        <BarGraph
          data={[(getValue(Q17.Raised) * 100) / data.length, (getValue(Q17.Medium) * 100) / data.length, (getValue(Q17.Weak) * 100) / data.length, (getValue(Q17.undefined) * 100) / data.length]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Raised')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Medium')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Weak')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language],
            ]
          }
          maxValue={80}
          marginLeft={100}
          ticks={[0, 20, 40, 60, 80]}
        />
      </QueTitleEl>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Have you observed any changes in household behaviour in the area of solid waste management over the past three years?')][language]}
        <BarGraph
          data={[(getValue(Q18.Raised) * 100) / data.length, (getValue(Q18.Medium) * 100) / data.length, (getValue(Q18.Weak) * 100) / data.length, (getValue(Q18.undefined) * 100) / data.length]}
          barLabel={
            [
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Raised')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Medium')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Weak')][language],
              HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'No response')][language],
            ]
          }
          maxValue={80}
          marginLeft={100}
          ticks={[0, 20, 40, 60, 80]}
        />
      </QueTitleEl>
      <H2>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'innovativeSolutions')][language]}
      </H2>
      <QueTitleEl>
        {HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'Have you detected any innovations related to solid waste management in your municipality?')][language]}
        <DonutChart
          data={(getValue(Q19.Yes) * 100) / data.length}
          subText={HouseHoldLanguage[HouseHoldLanguage.findIndex((el) => el.key === 'yes')][language]}
        />
      </QueTitleEl>
    </div>
  );
};
