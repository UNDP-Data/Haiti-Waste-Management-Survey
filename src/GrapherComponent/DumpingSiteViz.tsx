import { useContext } from 'react';
import countBy from 'lodash.countby';
import { DonutChart } from './DonutChart';
import { getValue } from '../utils/getValue';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';
import { Translations } from '../Data/Translations';

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
  const Q4 = countBy(data, (d) => d['Can you give us the following details on the location of the landfill site?']);
  const Q5 = countBy(data, (d) => d['Can you provide us with the following information on the use of the site?']);
  return (
    <div>
      <div className='margin-bottom-11'>
        Is the landfill site recognized/tolerated by the town hall?
        <DonutChart
          data={(getValue(Q1.yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <div className='margin-bottom-11'>
        Is the landfill site under the responsibility of the town hall?
        <DonutChart
          data={(getValue(Q2.yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <div className='margin-bottom-11'>
        How do you categorize this dump site?
        <DonutChart
          data={(getValue(Q3.Wild) * 100) / data.length}
          subText='says wild'
        />
      </div>
      <div className='margin-bottom-11'>
        Can you give us the following details on the location of the landfill site?
        <DonutChart
          data={(getValue(Q4.yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
      <div className='margin-bottom-11'>
        Can you provide us with the following information on the use of the site?
        <DonutChart
          data={(getValue(Q5.yes) * 100) / data.length}
          subText={Translations[Translations.findIndex((el) => el.key === 'says yes')][language]}
        />
      </div>
    </div>
  );
};
