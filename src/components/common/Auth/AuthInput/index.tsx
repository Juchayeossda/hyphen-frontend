import React from 'react';
import * as S from "./style"
import { AuthInputParams } from './type';

const AuthInput = ({
    margin='3px 0 9px 0',
    width='310px', 
    height='35px', 
    placeholder='',
    value='',
    type='text',
    onChange
} :AuthInputParams) => {
    return (
        <S.StyledInput
            margin={margin}
            width={width}
            height={height}
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={onChange}
        />
    );
};

export default AuthInput;
