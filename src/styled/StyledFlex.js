import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  margin: ${(props) => props.margin || '0'};
`;

export default StyledFlex;