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
                            <S.SuggestImg src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgpNubK5ZHxjcuz3B4DsRugIEvFlvhjfBrE_KqEhU2edirAAMa'/>
                        </S.SuggestLink>
                        <S.SuggestLink to='/'>
                            <S.SuggestImg src='https://lh3.googleusercontent.com/J0sw0IiqP2F4gavYnI-vUa5IBgHiHy42lohgm-qq1vuygUX0HQgylVSV1ZdDTV5XIg=s1200'/>
                        </S.SuggestLink>
                        <S.SuggestLink to='/'>
                            <S.SuggestImg src='https://lh3.googleusercontent.com/7aJyS2Nd7c8oCJKmfXlmM-rnSnLMY0ykfBFOP8N3OjV6M4hbhS_NEg8tH6SJDfvl=s1200'/>
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