import { useContext } from 'react';
import styled from 'styled-components';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';
import { HorizontalBarChart } from './HorizontalBarChart';

interface Props {
  data: any;
  fullWidth: boolean;
}

interface ElProps {
  fullWidth: boolean;
}

const El = styled.div<ElProps>`
  width: ${(props) => (props.fullWidth ? '100%' : '75%')};
  box-shadow: var(--shadow-right);
  overflow: auto;
  @media (min-width: 961px) {
    height: 74rem;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Graph = (props: Props) => {
  const {
    data,
    fullWidth,
  } = props;
  const {
    selectedSubjectType,
  } = useContext(Context) as CtxDataType;

  let graphData;
  switch (selectedSubjectType) {
    case 'households':
      graphData = data.households;
      break;
    case 'enterprises':
      graphData = data.enterprises;
      break;
    case 'projects':
      graphData = data.projects;
      break;
    case 'dumpingSites':
      graphData = data.dumpingSites;
      break;
    case 'healthFacilities':
      graphData = data.healthFacilities;
      break;
    default:
      graphData = data.households;
      break;
  }
  // filter data based on checkbox selections
  return (
    <El id='graph-node' fullWidth={fullWidth}>
      <HorizontalBarChart
        data={graphData}
      />
    </El>
  );
};
// export const Graph = () => (
//   <div>
//     <h2>
//       a graph here
//     </h2>
//   </div>
// );
