import { styled } from 'styled-components';
import { AuthInputStyledcComponentParams } from './type';

export const StyledInput = styled.input<AuthInputStyledcComponentParams>`
    margin: ${(props)=>(props.margin)};

    padding-left: 12px;
    width: ${(props)=>(props.width)};
    height: ${(props)=>(props.height)};

    border-radius: 5px;
    border: 1px solid #E3E3E3;
    outline: none;

    &:active{
        border-color: #7B7C87;
    }

    ::placeholder{
        color: #8D8D8D;
        font-size: 12px;
        font-weight: 500;
    }
`