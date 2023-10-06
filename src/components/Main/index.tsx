import React from 'react';
import * as S from "./style"

const Main = () => {
    return (
        <S.MainLayout>
            <S.Title>메인 화면 입니다.</S.Title>
            <S.BtnRow>
                <S.RedirectBtn to='/signup'>로그인</S.RedirectBtn>
                <S.RedirectBtn to='/psytest'>심리 검사</S.RedirectBtn>
                <S.RedirectBtn to='/enjoydrawing'>그림 감상</S.RedirectBtn>
                <S.RedirectBtn to='/hellog'>기분 공유</S.RedirectBtn>
            </S.BtnRow>
        </S.MainLayout>
    );
};

export default Main;