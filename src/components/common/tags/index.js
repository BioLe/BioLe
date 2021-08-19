import styled from 'styled-components';
import variables from '../../../data/variables';

export const Tag = styled.a`
  color: #000000;
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  background: rgb(183 181 181 / 20%);
  
  border-radius: .15rem;
  padding: .5rem .2rem;
  margin-right: .5rem;
  border: 1px solid rgb(0 0 0 / 2%);
  display: inline-block;
  margin-bottom: .5rem;
  &.active {
    background: ${variables.primary};
    color: ${variables.inverse};
    font-family: "GT-Walsheim-Pro-Bold";
  }
`