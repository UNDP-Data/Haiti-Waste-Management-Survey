/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import flatten from 'lodash.flatten';
import countBy from 'lodash.countby';
import { useContext } from 'react';
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

export const EnterprisesViz = (props: Props) => {
  const {
    data,
  } = props;
  const Q1 = countBy(data, (d) => d['Does the company/CBO have enough materials for the collection of solid waste?']);
  const Q2_1 = countBy(data, (d) => d['Garbage truck']);
  const Q2_2 = countBy(data, (d) => d['Dump truck']);
  const Q2_3 = countBy(data, (d) => d['three wheel motorcycle']);
  const Q2_4 = countBy(data, (d) => d.Wheelbarrows);
  const Q2_5 = countBy(data, (d) => d.Shovels);
  const Q3_0 = countBy(data, (d) => d['How many employees of the company /OCB work in the solid waste sector?'] === 0 || !d['How many employees of the company /OCB work in the solid waste sector?']);
  const Q3_1 = countBy(data, (d) => d['How many employees of the company /OCB work in the solid waste sector?'] < 5);
  const Q3_2 = countBy(data, (d) => d['How many employees of the company /OCB work in the solid waste sector?'] < 15 && d['How many employees of the company /OCB work in the solid waste sector?'] >= 5);
  const Q3_3 = countBy(data, (d) => d['How many employees of the company /OCB work in the solid waste sector?'] < 25 && d['How many employees of the company /OCB work in the solid waste sector?'] >= 15);
  const Q3_4 = countBy(data, (d) => d['How many employees of the company /OCB work in the solid waste sector?'] < 50 && d['How many employees of the company /OCB work in the solid waste sector?'] >= 25);
  const Q3_5 = countBy(data, (d) => d['How many employees of the company /OCB work in the solid waste sector?'] < 100 && d['How many employees of the company /OCB work in the solid waste sector?'] >= 50);
  const Q3_6 = countBy(data, (d) => d['How many employees of the company /OCB work in the solid waste sector?'] >= 100);
  const Q4_0 = countBy(data, (d) => d['How many men?'] === 0 || !d['How many men?']);
  const Q4_1 = countBy(data, (d) => d['How many men?'] < 5);
  const Q4_2 = countBy(data, (d) => d['How many men?'] < 15 && d['How many men?'] >= 5);
  const Q4_3 = countBy(data, (d) => d['How many men?'] < 25 && d['How many men?'] >= 15);
  const Q4_4 = countBy(data, (d) => d['How many men?'] < 50 && d['How many men?'] >= 25);
  const Q4_5 = countBy(data, (d) => d['How many men?'] < 100 && d['How many men?'] >= 50);
  const Q4_6 = countBy(data, (d) => d['How many men?'] >= 100);
  const Q5_0 = countBy(data, (d) => d['How many women?'] === 0 || !d['How many women?']);
  const Q5_1 = countBy(data, (d) => d['How many women?'] < 5);
  const Q5_2 = countBy(data, (d) => d['How many women?'] < 15 && d['How many women?'] >= 5);
  const Q5_3 = countBy(data, (d) => d['How many women?'] < 25 && d['How many women?'] >= 15);
  const Q5_4 = countBy(data, (d) => d['How many women?'] < 50 && d['How many women?'] >= 25);
  const Q5_5 = countBy(data, (d) => d['How many women?'] < 100 && d['How many women?'] >= 50);
  const Q5_6 = countBy(data, (d) => d['How many women?'] >= 100);
  const Q6 = countBy(data, (d) => d['The dominant types of employment in your company']);
  const Q7 = countBy(data, (d) => d['What are the main sources of funding for the company /OCB?']);
  const Q8_1 = countBy(data, (d) => d['Solid waste collection...45']);
  const Q8_2 = countBy(data, (d) => d['Collection and sale of organic waste...55']);
  const Q8_3 = countBy(data, (d) => d['Collection and sale of paper/cardboard waste...58']);
  const Q8_4 = countBy(data, (d) => d['Collection and sale of plastic waste...56']);
  const Q8_5 = countBy(data, (d) => d['Collection and sale of scrap metal...57']);
  const Q9_1 = countBy(data, (d) => d['Industrial or semi-industrial recycling of plastic waste...47']);
  const Q9_2 = countBy(data, (d) => d['Industrial or semi-industrial recycling of metal waste...49']);
  const Q9_3 = countBy(data, (d) => d['Industrial or semi-industrial recycling of paper/cardboard waste...51']);
  const Q9_4 = countBy(data, (d) => d['Industrial or semi-industrial recycling of glass waste...53']);
  const Q10_1 = countBy(data, (d) => d['Crafts with plastic waste...48']);
  const Q10_2 = countBy(data, (d) => d['Crafts with scrap metal...50']);
  const Q10_3 = countBy(data, (d) => d['Crafts with paper/cardboard waste...52']);
  const Q10_4 = countBy(data, (d) => d['Crafts with glass scraps...54']);
  const Q11_1 = countBy(data, (d) => d['Solid waste collection...64']);
  const Q11_2 = countBy(data, (d) => d['Composting organic waste...65']);
  const Q11_3 = countBy(data, (d) => d['Industrial or semi-industrial recycling of plastic waste...66']);
  const Q11_5 = countBy(data, (d) => d['Industrial or semi-industrial recycling of metal waste...68']);
  const Q11_7 = countBy(data, (d) => d['Industrial or semi-industrial recycling of paper/cardboard waste...70']);
  const Q11_9 = countBy(data, (d) => d['Industrial or semi-industrial recycling of glass waste...72']);
  const Q11_4 = countBy(data, (d) => d['Crafts with plastic waste...67']);
  const Q11_6 = countBy(data, (d) => d['Crafts with scrap metal...69']);
  const Q11_8 = countBy(data, (d) => d['Crafts with paper/cardboard waste...71']);
  const Q11_10 = countBy(data, (d) => d['Crafts with glass scraps...73']);
  const Q11_11 = countBy(data, (d) => d['Collection and sale of organic waste...74']);
  const Q11_12 = countBy(data, (d) => d['Collection and sale of plastic waste...75']);
  const Q11_13 = countBy(data, (d) => d['Collection and sale of scrap metal...76']);
  const Q11_14 = countBy(data, (d) => d['Collection and sale of paper/cardboard waste...77']);
  const Q12 = countBy(data, (d) => d['Are there other actors involved in solid waste management in your municipality?']);
  const Q13_1 = countBy(flatten(data.map((d: any) => d['Private companies...80']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_2 = countBy(flatten(data.map((d: any) => d['Town hall...79']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_3 = countBy(flatten(data.map((d: any) => d['Community organizations...84']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_4 = countBy(flatten(data.map((d: any) => d['NGO...82']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_5 = countBy(flatten(data.map((d: any) => d['Minister of the Environment...86']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_6 = countBy(flatten(data.map((d: any) => d['MTPTC...87']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_7 = countBy(flatten(data.map((d: any) => d['Other state institutions...88']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q13_8 = countBy(flatten(data.map((d: any) => d['UNDP...89']?.split(';'))).filter((d) => d !== '' && d !== undefined).map((d: any) => d.toLowerCase().trim()));
  const Q14_1 = countBy(data, (d) => d['Town hall...96']);
  const Q14_2 = countBy(data, (d) => d['Private companies...97']);
  const Q14_3 = countBy(data, (d) => d['NGO...98']);
  const Q14_4 = countBy(data, (d) => d['Community organizations...99']);
  const Q14_5 = countBy(data, (d) => d['SNGRS...100']);
  const Q14_6 = countBy(data, (d) => d['Minister of the Environment...101']);
  const Q14_7 = countBy(data, (d) => d['MTPTC...102']);
  const Q14_8 = countBy(data, (d) => d['Other state institutions...103']);
  const Q14_9 = countBy(data, (d) => d['UNDP...104']);
  const Q14_10 = countBy(data, (d) => d['UNEP...105']);
  const Q14_11 = countBy(data, (d) => d['Other UN Agencies...106']);
  const Q15_1 = countBy(data, (d) => d.Households);
  const Q15_2 = countBy(data, (d) => d['Public markets']);
  const Q15_3 = countBy(data, (d) => d.Companies);
  const Q15_4 = countBy(data, (d) => d.Schools);
  const Q15_5 = countBy(data, (d) => d['Hospitals/Health Centers']);
  const Q16_1 = countBy(data, (d) => d['Agricultural waste']);
  const Q16_2 = countBy(data, (d) => d['Organic waste']);
  const Q16_3 = countBy(data, (d) => d['plastic waste']);
  const Q16_4 = countBy(data, (d) => d['Metals lo']);
  const Q16_5 = countBy(data, (d) => d['medical waste']);
  const Q16_6 = countBy(data, (d) => d['Paper/cardboard waste']);
  const Q16_7 = countBy(data, (d) => d['Textile waste']);
  const Q16_8 = countBy(data, (d) => d.Others);
  const Q17 = countBy(data, (d) => d['Have you detected any recurrent cases of solid waste-related diseases in your mu']);
  const Q18_1 = countBy(data, (d) => d['Skin illness']);
  const Q18_2 = countBy(data, (d) => d['Breathing illness']);
  const Q18_3 = countBy(data, (d) => d.Malaria);
  const Q18_4 = countBy(data, (d) => d['Dengue fever']);
  const Q18_5 = countBy(data, (d) => d.Typhoid);
  const Q18_6 = countBy(data, (d) => d.Diarrhea);
  const Q18_7 = countBy(data, (d) => d['Vaginal infection']);
  const Q19 = countBy(data, (d) => d['According to you, what is the level of commitment of the population of your muni']);
  const Q20 = countBy(data, (d) => d['In your opinion, what is the level of awareness of the population of your munici']);
  const Q21 = countBy(data, (d) => d['Have you detected any innovations related to solid waste management in your muni']);
  const Q22_1 = countBy(data, (d) => d['Landfill sites are close to rivers, shores, water sources and people\'s places of']);
  const Q22_2 = countBy(data, (d) => d['Unsanitary road networks']);
  const Q22_3 = countBy(data, (d) => d['Obstruction of road networks']);
  const Q22_4 = countBy(data, (d) => d['Unsanitary public markets']);
  const Q22_5 = countBy(data, (d) => d['Unsanitary public beaches']);
  const Q22_6 = countBy(data, (d) => d['Destruction of mangroves']);
  return (
    <div>
      <h3 className='undp-typography bold margin-bottom-07'>
        Equipment and Infrastructure
      </h3>
      <div className='margin-bottom-11'>
        Does the company/CBO have enough materials for the collection of solid waste?
        <DonutChart
          data={(getValue(Q1.Yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Can you tell us if the company/OCB has the following solid waste collection machines?
        <StackedBarGraph
          data={[
            [(getValue(Q2_1.Yes) * 100) / data.length, ((getValue(Q2_1.No) + getValue(Q2_1.undefined)) * 100) / data.length],
            [(getValue(Q2_2.Yes) * 100) / data.length, ((getValue(Q2_2.No) + getValue(Q2_2.undefined)) * 100) / data.length],
            [(getValue(Q2_3.Yes) * 100) / data.length, ((getValue(Q2_3.No) + getValue(Q2_3.undefined)) * 100) / data.length],
            [(getValue(Q2_4.Yes) * 100) / data.length, ((getValue(Q2_4.No) + getValue(Q2_4.undefined)) * 100) / data.length],
            [(getValue(Q2_5.Yes) * 100) / data.length, ((getValue(Q2_5.No) + getValue(Q2_5.undefined)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q2_1.Yes) * 100) / data.length],
            [0, (getValue(Q2_2.Yes) * 100) / data.length],
            [0, (getValue(Q2_3.Yes) * 100) / data.length],
            [0, (getValue(Q2_4.Yes) * 100) / data.length],
            [0, (getValue(Q2_5.Yes) * 100) / data.length],
          ]}
          barLabel={
            [
              'Garbage truck',
              'Dump truck',
              'Three-wheeled\nmotorcycle',
              'Wheel barrows',
              'Shovels',
            ]
          }
          maxValue={100}
          marginLeft={100}
          color={['#006EB5', '#AAA']}
          colorKey={
            [
              'Yes',
              'No or Did not respond',
            ]
          }
          ticks={[0, 20, 40, 60, 80, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Human Resources
      </h3>
      <div className='margin-bottom-11'>
        How many employees of the company/OCB work in the solid waste sector?
        <BarGraph
          data={[(getValue(Q3_0.true) * 100) / data.length, (getValue(Q3_1.true) * 100) / data.length, (getValue(Q3_2.true) * 100) / data.length, (getValue(Q3_3.true) * 100) / data.length, (getValue(Q3_4.true) * 100) / data.length, (getValue(Q3_5.true) * 100) / data.length, (getValue(Q3_6.true) * 100) / data.length]}
          barLabel={
            [
              '0 or\nNo Response',
              '< 5',
              '5 - 15',
              '15 - 25',
              '25 - 50',
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
        How many male employees of the company/OCB work in the solid waste sector?
        <BarGraph
          data={[(getValue(Q4_0.true) * 100) / data.length, (getValue(Q4_1.true) * 100) / data.length, (getValue(Q4_2.true) * 100) / data.length, (getValue(Q4_3.true) * 100) / data.length, (getValue(Q4_4.true) * 100) / data.length, (getValue(Q4_5.true) * 100) / data.length, (getValue(Q4_6.true) * 100) / data.length]}
          barLabel={
            [
              '0 or\nNo Response',
              '< 5',
              '5 - 15',
              '15 - 25',
              '25 - 50',
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
        How many women employees of the company/OCB work in the solid waste sector?
        <BarGraph
          data={[(getValue(Q5_0.true) * 100) / data.length, (getValue(Q5_1.true) * 100) / data.length, (getValue(Q5_2.true) * 100) / data.length, (getValue(Q5_3.true) * 100) / data.length, (getValue(Q5_4.true) * 100) / data.length, (getValue(Q5_5.true) * 100) / data.length, (getValue(Q5_6.true) * 100) / data.length]}
          barLabel={
            [
              '0 or\nNo Response',
              '< 5',
              '5 - 15',
              '15 - 25',
              '25 - 50',
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
        The dominant types of employment in your company
        <BarGraph
          data={[(getValue(Q6.Permanent) * 100) / data.length, (getValue(Q6.Seasonal) * 100) / data.length, ((data.length - getValue(Q6.Seasonal) - getValue(Q6.Permanent)) * 100) / data.length]}
          barLabel={
            [
              'Permanent',
              'Seasonal',
              'No Response',
            ]
          }
          maxValue={60}
          marginLeft={100}
          ticks={[0, 20, 40, 60]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Finacial Resources
      </h3>
      <div className='margin-bottom-11'>
        What are the main sources of financing for the company/OCB?
        <BarGraph
          data={[(getValue(Q7.Equity) * 100) / data.length, (getValue(Q7['Equity Grant']) * 100) / data.length, (getValue(Q7.Don) * 100) / data.length, (getValue(Q7['Equity Credit']) * 100) / data.length, (getValue(Q7.Credit) * 100) / data.length, (getValue(Q7['Grant Equity']) * 100) / data.length, (getValue(Q7['Credit Donation']) * 100) / data.length, (getValue(Q7['Credit Equity']) * 100) / data.length, (getValue(Q7.undefined) * 100) / data.length]}
          barLabel={
            [
              'Own Funds',
              'Own Funds\nGrants',
              'Donation',
              'Own Funds\nCredits',
              'Credit',
              'Grant Own\nFunds',
              'Credit Donation',
              'Credit Own\nFunds',
              'No Response',
            ]
          }
          maxValue={50}
          marginLeft={100}
          ticks={[0, 10, 20, 30, 40, 50]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Activities related to solid waste collection at company level
      </h3>
      <div className='margin-bottom-11'>
        Percent of company/OCB offering the collection and sale of
        <BarGraph
          data={[(getValue(Q8_1.Yes) * 100) / data.length, (getValue(Q8_2.Yes) * 100) / data.length, (getValue(Q8_3.Yes) * 100) / data.length, (getValue(Q8_4.Yes) * 100) / data.length, (getValue(Q8_5.Yes) * 100) / data.length]}
          barLabel={
            [
              'Solid waste',
              'Organic waste',
              'Paper\n/cardboard waste',
              'Plastic waste',
              'Scrap metal',
            ]
          }
          maxValue={100}
          marginLeft={100}
          ticks={[0, 25, 50, 75, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        Percent of company/OCB offering industrial and semi-industrial recycling of
        <BarGraph
          data={[(getValue(Q9_1.Yes) * 100) / data.length, (getValue(Q9_2.Yes) * 100) / data.length, (getValue(Q9_3.Yes) * 100) / data.length, (getValue(Q9_4.Yes) * 100) / data.length]}
          barLabel={
            [
              'Plastic waste',
              'Metal waste',
              'Paper\n/cardboard waste',
              'Glass waste',
            ]
          }
          maxValue={100}
          marginLeft={100}
          ticks={[0, 25, 50, 75, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        Percent of company/OCB offering crafts with
        <BarGraph
          data={[(getValue(Q10_1.Yes) * 100) / data.length, (getValue(Q10_2.Yes) * 100) / data.length, (getValue(Q10_3.Yes) * 100) / data.length, (getValue(Q10_4.Yes) * 100) / data.length]}
          barLabel={
            [
              'Plastic waste',
              'Metal waste',
              'Paper\n/cardboard waste',
              'Glass waste',
            ]
          }
          maxValue={100}
          marginLeft={100}
          ticks={[0, 25, 50, 75, 100]}
        />
      </div>
      <div className='margin-bottom-11'>
        What areas has the company/OCB made changes?
        <BarGraph
          data={
            [
              (getValue(Q11_1.Yes) * 100) / data.length,
              (getValue(Q11_2.Yes) * 100) / data.length,
              (getValue(Q11_3.Yes) * 100) / data.length,
              (getValue(Q11_4.Yes) * 100) / data.length,
              (getValue(Q11_5.Yes) * 100) / data.length,
              (getValue(Q11_6.Yes) * 100) / data.length,
              (getValue(Q11_7.Yes) * 100) / data.length,
              (getValue(Q11_8.Yes) * 100) / data.length,
              (getValue(Q11_9.Yes) * 100) / data.length,
              (getValue(Q11_10.Yes) * 100) / data.length,
              (getValue(Q11_11.Yes) * 100) / data.length,
              (getValue(Q11_12.Yes) * 100) / data.length,
              (getValue(Q11_13.Yes) * 100) / data.length,
              (getValue(Q11_14.Yes) * 100) / data.length,
            ]
          }
          barLabel={
            [
              'Solid waste\ncollection',
              'Composting\norganic waste',
              'Recycling of\nplastic waste',
              'Recycling of\nmetal waste',
              'Recycling of\npaper waste',
              'Recycling of\nglass waste',
              'Crafts with\nplastic waste',
              'Crafts with\nscrap metal',
              'Crafts with\npaper',
              'Crafts with\nglass scraps',
              'Collection & sale\nof organic waste',
              'Collection & sale\nof plastic waste',
              'Collection & sale\nof scrap metal',
              'Collection & sale\nof paper waste',
            ]
          }
          maxValue={100}
          marginLeft={100}
          ticks={[0, 25, 50, 75, 100]}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Actors
      </h3>
      <div className='margin-bottom-11'>
        Are there other actors involved in solid waste management in your municipality?
        <DonutChart
          data={(getValue(Q12.Yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Give the following details regarding the areas of intervention of the following actors
        <GroupBarGraph
          data={[
            [getValue(Q13_1['waste collection']), getValue(Q13_2['waste collection']), getValue(Q13_3['waste collection']), getValue(Q13_4['waste collection']), getValue(Q13_5['waste collection']), getValue(Q13_6['waste collection']), getValue(Q13_7['waste collection']), getValue(Q13_8['waste collection'])],
            [getValue(Q13_1.sorting), getValue(Q13_2.sorting), getValue(Q13_3.sorting), getValue(Q13_4.sorting), getValue(Q13_5.sorting), getValue(Q13_6.sorting), getValue(Q13_7.sorting), getValue(Q13_8.sorting)],
            [getValue(Q13_1.treatment), getValue(Q13_2.treatment), getValue(Q13_3.treatment), getValue(Q13_4.treatment), getValue(Q13_5.treatment), getValue(Q13_6.treatment), getValue(Q13_7.treatment), getValue(Q13_8.treatment)],
            [getValue(Q13_1.transport), getValue(Q13_2.transport), getValue(Q13_3.transport), getValue(Q13_4.transport), getValue(Q13_5.transport), getValue(Q13_6.transport), getValue(Q13_7.transport), getValue(Q13_8.transport)],
            [getValue(Q13_1.storage), getValue(Q13_2.storage), getValue(Q13_3.storage), getValue(Q13_4.storage), getValue(Q13_5.storage), getValue(Q13_6.storage), getValue(Q13_7.storage), getValue(Q13_8.storage)],
            [getValue(Q13_1.landfill), getValue(Q13_2.landfill), getValue(Q13_3.landfill), getValue(Q13_4.landfill), getValue(Q13_5.landfill), getValue(Q13_6.landfill), getValue(Q13_7.landfill), getValue(Q13_8.landfill)],
            [getValue(Q13_1['incineration/destruction']), getValue(Q13_2['incineration/destruction']), getValue(Q13_3['incineration/destruction']), getValue(Q13_4['incineration/destruction']), getValue(Q13_5['incineration/destruction']), getValue(Q13_6['incineration/destruction']), getValue(Q13_7['incineration/destruction']), getValue(Q13_8['incineration/destruction'])],
            [getValue(Q13_1['recycling (including crafts)']), getValue(Q13_2['recycling (including crafts)']), getValue(Q13_3['recycling (including crafts)']), getValue(Q13_4['recycling (including crafts)']), getValue(Q13_5['recycling (including crafts)']), getValue(Q13_6['recycling (including crafts)']), getValue(Q13_7['recycling (including crafts)']), getValue(Q13_8['recycling (including crafts)'])],
            [getValue(Q13_1.technology), getValue(Q13_2.technology), getValue(Q13_3.technology), getValue(Q13_4.technology), getValue(Q13_5.technology), getValue(Q13_6.technology), getValue(Q13_7.technology), getValue(Q13_8.technology)],
          ]}
          barLabel={
            [
              'Waste collection',
              'Sorting',
              'Treatment',
              'Strorage',
              'Transportation',
              'Landfill',
              'Incineration\n/destruction',
              'Recycling',
              'Technology',
            ]
          }
          maxValue={30}
          marginLeft={100}
          color={['#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6']}
          colorKey={
            [
              'Private companies',
              'Town hall',
              'Cummunity organizations',
              'NGO',
              'Ministry of Environment',
              'MTPTC',
              'Other state institutions',
              'UNDP',
            ]
          }
          groupPadding={30}
          textDy={80}
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Partnership Relations
      </h3>
      <div className='margin-bottom-11'>
        Are there partnerships between your company/OCB and the following actors in relation to solid waste?
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
            [(getValue(Q14_9.Yes) * 100) / data.length, (getValue(Q14_9.No) * 100) / data.length, ((data.length - getValue(Q14_9.Yes) - getValue(Q14_9.No)) * 100) / data.length],
            [(getValue(Q14_10.Yes) * 100) / data.length, (getValue(Q14_10.No) * 100) / data.length, ((data.length - getValue(Q14_10.Yes) - getValue(Q14_10.No)) * 100) / data.length],
            [(getValue(Q14_11.Yes) * 100) / data.length, (getValue(Q14_11.No) * 100) / data.length, ((data.length - getValue(Q14_11.Yes) - getValue(Q14_11.No)) * 100) / data.length],
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
            [0, (getValue(Q14_9.Yes) * 100) / data.length, ((getValue(Q14_9.Yes) + getValue(Q14_9.No)) * 100) / data.length],
            [0, (getValue(Q14_10.Yes) * 100) / data.length, ((getValue(Q14_10.Yes) + getValue(Q14_10.No)) * 100) / data.length],
            [0, (getValue(Q14_11.Yes) * 100) / data.length, ((getValue(Q14_11.Yes) + getValue(Q14_11.No)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Town hall',
              'Private\ncompanies',
              'NGO',
              'Community\norganizations',
              'SNGRC',
              'Ministry of\nEnvironment',
              'MTPTC',
              'Other state\ninstitutions',
              'UNDP',
              'UNEP',
              'Other UN\nagencies',
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
        Level of Waste Generation
      </h3>
      <div className='margin-bottom-11'>
        Give us your assessments regarding the level of waste generation of the following spaces/institutions
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
              'Households',
              'Public markets',
              'Companies',
              'Schools',
              'Hospitals',
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
        Type of Wastes
      </h3>
      <div className='margin-bottom-11'>
        At what level do the following types of waste meet in your municipality?
        <StackedBarGraph
          data={[
            [(getValue(Q16_1.Raised) * 100) / data.length, (getValue(Q16_1.Medium) * 100) / data.length, (getValue(Q16_1.Weak) * 100) / data.length, (getValue(Q16_1.undefined) * 100) / data.length],
            [(getValue(Q16_2.Raised) * 100) / data.length, (getValue(Q16_2.Medium) * 100) / data.length, (getValue(Q16_2.Weak) * 100) / data.length, (getValue(Q16_2.undefined) * 100) / data.length],
            [(getValue(Q16_3.Raised) * 100) / data.length, (getValue(Q16_3.Medium) * 100) / data.length, (getValue(Q16_3.Weak) * 100) / data.length, (getValue(Q16_3.undefined) * 100) / data.length],
            [(getValue(Q16_4.Raised) * 100) / data.length, (getValue(Q16_4.Medium) * 100) / data.length, (getValue(Q16_4.Weak) * 100) / data.length, (getValue(Q16_4.undefined) * 100) / data.length],
            [(getValue(Q16_5.Raised) * 100) / data.length, (getValue(Q16_5.Medium) * 100) / data.length, (getValue(Q16_5.Weak) * 100) / data.length, (getValue(Q16_5.undefined) * 100) / data.length],
            [(getValue(Q16_6.Raised) * 100) / data.length, (getValue(Q16_6.Medium) * 100) / data.length, (getValue(Q16_6.Weak) * 100) / data.length, (getValue(Q16_6.undefined) * 100) / data.length],
            [(getValue(Q16_7.Raised) * 100) / data.length, (getValue(Q16_7.Medium) * 100) / data.length, (getValue(Q16_7.Weak) * 100) / data.length, (getValue(Q16_7.undefined) * 100) / data.length],
            [(getValue(Q16_8.Raised) * 100) / data.length, (getValue(Q16_8.Medium) * 100) / data.length, (getValue(Q16_8.Weak) * 100) / data.length, (getValue(Q16_8.undefined) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q16_1.Raised) * 100) / data.length, ((getValue(Q16_1.Raised) + getValue(Q16_1.Medium)) * 100) / data.length, ((getValue(Q16_1.Raised) + getValue(Q16_1.Medium) + getValue(Q16_1.Weak)) * 100) / data.length],
            [0, (getValue(Q16_2.Raised) * 100) / data.length, ((getValue(Q16_2.Raised) + getValue(Q16_2.Medium)) * 100) / data.length, ((getValue(Q16_2.Raised) + getValue(Q16_2.Medium) + getValue(Q16_2.Weak)) * 100) / data.length],
            [0, (getValue(Q16_3.Raised) * 100) / data.length, ((getValue(Q16_3.Raised) + getValue(Q16_3.Medium)) * 100) / data.length, ((getValue(Q16_3.Raised) + getValue(Q16_3.Medium) + getValue(Q16_3.Weak)) * 100) / data.length],
            [0, (getValue(Q16_4.Raised) * 100) / data.length, ((getValue(Q16_4.Raised) + getValue(Q16_4.Medium)) * 100) / data.length, ((getValue(Q16_4.Raised) + getValue(Q16_4.Medium) + getValue(Q16_4.Weak)) * 100) / data.length],
            [0, (getValue(Q16_5.Raised) * 100) / data.length, ((getValue(Q16_5.Raised) + getValue(Q16_5.Medium)) * 100) / data.length, ((getValue(Q16_5.Raised) + getValue(Q16_5.Medium) + getValue(Q16_5.Weak)) * 100) / data.length],
            [0, (getValue(Q16_6.Raised) * 100) / data.length, ((getValue(Q16_6.Raised) + getValue(Q16_6.Medium)) * 100) / data.length, ((getValue(Q16_6.Raised) + getValue(Q16_6.Medium) + getValue(Q16_6.Weak)) * 100) / data.length],
            [0, (getValue(Q16_7.Raised) * 100) / data.length, ((getValue(Q16_7.Raised) + getValue(Q16_7.Medium)) * 100) / data.length, ((getValue(Q16_7.Raised) + getValue(Q16_7.Medium) + getValue(Q16_7.Weak)) * 100) / data.length],
            [0, (getValue(Q16_8.Raised) * 100) / data.length, ((getValue(Q16_8.Raised) + getValue(Q16_8.Medium)) * 100) / data.length, ((getValue(Q16_8.Raised) + getValue(Q16_8.Medium) + getValue(Q16_8.Weak)) * 100) / data.length],
          ]}
          barLabel={
            [
              'Agricultural',
              'Organic',
              'Plastic',
              'Metal',
              'Medical',
              'Paper/cardboard',
              'Textile',
              'Others',
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
          data={(getValue(Q17.Yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
      <div className='margin-bottom-11'>
        Specify whether you have observed the following diseases
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
      <div className='margin-bottom-11'>
        Specify if you have observed the following environmental problems
        <StackedBarGraph
          data={[
            [(getValue(Q22_1.Yes) * 100) / data.length, (getValue(Q22_1.No) * 100) / data.length, ((data.length - getValue(Q22_1.Yes) - getValue(Q22_1.No)) * 100) / data.length],
            [(getValue(Q22_2.Yes) * 100) / data.length, (getValue(Q22_2.No) * 100) / data.length, ((data.length - getValue(Q22_2.Yes) - getValue(Q22_2.No)) * 100) / data.length],
            [(getValue(Q22_3.Yes) * 100) / data.length, (getValue(Q22_3.No) * 100) / data.length, ((data.length - getValue(Q22_3.Yes) - getValue(Q22_3.No)) * 100) / data.length],
            [(getValue(Q22_4.Yes) * 100) / data.length, (getValue(Q22_4.No) * 100) / data.length, ((data.length - getValue(Q22_4.Yes) - getValue(Q22_4.No)) * 100) / data.length],
            [(getValue(Q22_5.Yes) * 100) / data.length, (getValue(Q22_5.No) * 100) / data.length, ((data.length - getValue(Q22_5.Yes) - getValue(Q22_5.No)) * 100) / data.length],
            [(getValue(Q22_6.Yes) * 100) / data.length, (getValue(Q22_6.No) * 100) / data.length, ((data.length - getValue(Q22_6.Yes) - getValue(Q22_6.No)) * 100) / data.length],
          ]}
          startingPos={[
            [0, (getValue(Q22_1.Yes) * 100) / data.length, ((getValue(Q22_1.Yes) + getValue(Q22_1.No)) * 100) / data.length],
            [0, (getValue(Q22_2.Yes) * 100) / data.length, ((getValue(Q22_2.Yes) + getValue(Q22_2.No)) * 100) / data.length],
            [0, (getValue(Q22_3.Yes) * 100) / data.length, ((getValue(Q22_3.Yes) + getValue(Q22_3.No)) * 100) / data.length],
            [0, (getValue(Q22_4.Yes) * 100) / data.length, ((getValue(Q22_4.Yes) + getValue(Q22_4.No)) * 100) / data.length],
            [0, (getValue(Q22_5.Yes) * 100) / data.length, ((getValue(Q22_5.Yes) + getValue(Q22_5.No)) * 100) / data.length],
            [0, (getValue(Q22_6.Yes) * 100) / data.length, ((getValue(Q22_6.Yes) + getValue(Q22_6.No)) * 100) / data.length],
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
        In your opinion, what is the level of commitment of the population of your municipality in the management of solid waste?
        <DonutChart
          data={(getValue(Q19.Weak) * 100) / data.length}
          subText='says low'
          color='#D12800'
        />
      </div>
      <div className='margin-bottom-11'>
        In your opinion, what is the level of awareness of the population of your municipality in terms of solid waste management?
        <DonutChart
          data={(getValue(Q20.Weak) * 100) / data.length}
          subText='says low'
          color='#D12800'
        />
      </div>
      <hr className='undp-style margin-bottom-11' />
      <h3 className='undp-typography bold margin-bottom-07'>
        Innovative Solutions
      </h3>
      <div className='margin-bottom-11'>
        Have you detected any innovations related to solid waste management in your municipality?
        <DonutChart
          data={(getValue(Q21.Yes) * 100) / data.length}
          subText='says yes'
        />
      </div>
    </div>
  );
};