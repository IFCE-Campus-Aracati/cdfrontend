import styled from "styled-components";
import { Calendar } from 'react-calendar';

interface SelectProps {
  size: 'small' | 'medium' | 'large'
}

export const InputCalendarioWrapper = styled.div<SelectProps>`
  width: ${props => props.size === 'small' ? (`25%`) : (props.size === 'medium'? (`50%`):(`100%`))};
  background-color: ${props => props.theme.colors["background-green-light"]};
  border-radius: 5px;
  border-bottom: solid 1px ${props => props.theme.colors["green-dark"]};
  position: relative
`;

export const CalendarioWrapper = styled.button`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  border: none;
  display: block;
  width: 100%;
  height: 60px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  position: relative;
`;

export const Calendario = styled(Calendar)`
    width: 100%;
    position: absolute;
    right: 0;
    /* z-index: 9999; */
    background-color: ${props => props.theme.colors["background-green-light"]};
    border: none;
    border-bottom: solid 1px ${props => props.theme.colors["green-dark"]};
`;
