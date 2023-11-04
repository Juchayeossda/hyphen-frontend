import React from 'react';
import * as S from "./style"
import DrawingIcon from "../../../assets/DrawingIcon.svg"
import { useLocation } from 'react-router-dom';

const PsyTestResult = () => {
    const location = useLocation()

    const {AIResultValue} = location.state

    return (
        <S.PsyTestResult>
            <S.ContentBox>
                <S.ImageBox 
                    // style={{backgroundImage:"url("+ "https://src.hidoc.co.kr/image/lib/2015/9/21/20150921110641821_0.jpg" +")"}}
                >
                    {AIResultValue[1]}
                </S.ImageBox>
                <S.IntroText>{AIResultValue[2]}</S.IntroText>

                <S.SuggestImgBox>
                    <S.SuggestText>이런 그림들을 감상 해보시는건 어떤가요?</S.SuggestText>

                    <S.SuggestImgRaw>
                        <S.SuggestLink to='/'>
                            <S.SuggestImg src='https://i.namu.wiki/i/bRd4cSzO2WT688Od5RXsi6V7EUT1xCXosiLdZS9y39IUskWOm8jYZY8r8AwBsRqMo_M5c8G9b-ZHAy8queMMAQ.webp'/>
                        </S.SuggestLink>
                        <S.SuggestLink to='/'>
                            <S.SuggestImg src='https://image.yes24.com/goods/102234240/XL'/>
                        </S.SuggestLink>
                        <S.SuggestLink to='/'>
                            <S.SuggestImg src='https://image.yes24.com/goods/97919905/XL'/>
                        </S.SuggestLink>
                    </S.SuggestImgRaw>
                </S.SuggestImgBox>

                <S.RedirectLinkRaw>
                    <S.HomeRedirectLink to='/'>홈으로</S.HomeRedirectLink>
                    <S.RecodeRedirectLink to='/'>기록</S.RecodeRedirectLink>
                </S.RedirectLinkRaw>
            </S.ContentBox>
        </S.PsyTestResult>
    );
};

export default PsyTestResult;

const DRAWINGBYRESULT = {
    sad: [1,2,3],
    perfect: [4,5,6],
    anxietyPast:[7,8,9],
    good:[10,11,12]
}