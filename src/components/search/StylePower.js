
import styled,{ css } from 'styled-components';
import { PoweredBy } from 'react-instantsearch-dom';


const PowBox = css`
display: flex;
justify-content: flex-end;
align-items: center;
padding: 20px;
font-size: 80%;
`

export default styled(PoweredBy)`

${PowBox}
// .ais-PoweredBy {
//   display: flex;
//   justify-content: flex-end;
//   font-size: 80%;

//   svg {
//     width: 70px;
//   }
// }
`;