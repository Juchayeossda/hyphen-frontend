import React from 'react';
import * as S from "./style"
import { AuthInputLabelParams } from './type';

const AuthInputLabel = ({content}:AuthInputLabelParams) => {
    return (
        <S.LabelBox>
            {content}
        </S.LabelBox>
    );
};

export default AuthInputLabel;