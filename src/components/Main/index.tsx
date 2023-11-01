import React, { useEffect } from 'react';
import * as S from "./style"
import MainPagePic from "../../assets/MainPagePic.svg"
import MainSmile from "../../assets/MainSmile.svg"
import MainSuprise from "../../assets/MainSuprise.svg"
import MainTestPicture from "../../assets/MainTestCapture.svg"
import {useSetRecoilState} from 'recoil'
import { isActivePageAtom } from '../../state/headerAtom';
import axios from 'axios';

const Main = () => {
    const setIsActivePage = useSetRecoilState(isActivePageAtom)

    useEffect(()=>{
        setIsActivePage(1)
        
    },[])

    // useEffect(()=>{
    //     console.log(isActivePage)
    // },[isActivePage])

    return (
        <S.MainLayout>
            <S.FirstChpLayout>
                <S.FirstChpBox>
                    <S.FirstImg src={MainSuprise}/>

                    <S.FirstTitle>지금 당신의 기분은 어떠신가요?</S.FirstTitle>

                    <S.FirstBlackText>
                        당신은 자신의 심리가 어떠한지 아시나요? Hyphen 서비스는 당신의 심리를 정확하세 파악하여 검사해드립니다.
                        <br/>
                        어떻게 사람의 심리를 파악하냐고요? Hyphen에서는 심리검사AI로 정확한 검사를 제공합니다.
                    </S.FirstBlackText>

                    <S.FirstGrayText>자신의 기분이 궁금하다면</S.FirstGrayText>

                    <S.FirstLoginLink to='/signin'>로그인 하러 가기</S.FirstLoginLink>

                </S.FirstChpBox>
            </S.FirstChpLayout>

            <S.SecondChpLayout>
                <S.SecondChpBox>
                    <S.SecondTitle>그냥 지나쳤던 그림, 알고보면 의미가 있었다면?</S.SecondTitle>
                    <S.SecondGrayText>숨은 의미가 담겨있는 그림들을 통해서 심리를 안정시켜보아요.</S.SecondGrayText>
                    <S.SecondEnjoyPicLink to='/enjoydrawing'>그림 감상 하러 가기</S.SecondEnjoyPicLink>
                </S.SecondChpBox>
            </S.SecondChpLayout>

            <S.FeatureChpLayout>
                <S.FeatureChpBox>
                    <S.FeatureTextBox direction='start'>
                        <S.FeatureGreenText>심리 검사</S.FeatureGreenText>
                        <S.FeatureBlackText textAlign='start'>
                            Hyphen에서는 그림을 통해서<br/>
                            손쉽게 자신의 심리를 확인하실 수 있어요.
                        </S.FeatureBlackText>
                        <S.FeatureLink to='/psytest'>
                            심리 검사 하러 가기
                            <S.FeatureLinkSvg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                <path d="M2.78217 11.4969L2.52145 11.0702L2.78217 11.4969L8.86445 7.77992C9.82154 7.19503 9.82155 5.80497 8.86445 5.22008L2.78218 1.50313C1.78265 0.89231 0.5 1.61166 0.5 2.78306V10.2169C0.5 11.3883 1.78265 12.1077 2.78217 11.4969Z" stroke="#24D782"/>
                            </S.FeatureLinkSvg>
                        </S.FeatureLink>
                    </S.FeatureTextBox>

                    <S.FeatureImg src={MainTestPicture} marginTop={4}/>
                </S.FeatureChpBox>
            </S.FeatureChpLayout>

            <S.FeatureDevideLine/>

            <S.FeatureChpLayout>
                <S.FeatureChpBox>
                    <S.FeatureImg src={MainPagePic} marginTop={0.2}/>

                    <S.FeatureTextBox direction='end'>
                        <S.FeatureGreenText>그림 감상</S.FeatureGreenText>
                        <S.FeatureBlackText textAlign='end'>
                            이해하기 힘들었던 명화들도<br/>
                            쉽게 이해할 수 있어요.
                        </S.FeatureBlackText>
                        <S.FeatureLink to='/enjoydrawing'>
                            그림 감상 하러 가기
                            <S.FeatureLinkSvg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                <path d="M2.78217 11.4969L2.52145 11.0702L2.78217 11.4969L8.86445 7.77992C9.82154 7.19503 9.82155 5.80497 8.86445 5.22008L2.78218 1.50313C1.78265 0.89231 0.5 1.61166 0.5 2.78306V10.2169C0.5 11.3883 1.78265 12.1077 2.78217 11.4969Z" stroke="#24D782"/>
                            </S.FeatureLinkSvg>
                        </S.FeatureLink>
                    </S.FeatureTextBox>

                </S.FeatureChpBox>
            </S.FeatureChpLayout>

            <S.FeatureDevideLine/>

            <S.FeatureChpLayout>
                <S.FeatureChpBox>
                    <S.FeatureTextBox direction='start'>
                        <S.FeatureGreenText>기분 공유</S.FeatureGreenText>
                        <S.FeatureBlackText textAlign='start'>
                            기쁜 것도 나누면 배가 되고, 슬픈 것은 나누면 반이 되듯이<br/>
                            자신의 기분을 공유하고 공감 해보아요.
                        </S.FeatureBlackText>
                        <S.FeatureLink to='/hellog'>
                            기분 공유 하러 가기
                            <S.FeatureLinkSvg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                <path d="M2.78217 11.4969L2.52145 11.0702L2.78217 11.4969L8.86445 7.77992C9.82154 7.19503 9.82155 5.80497 8.86445 5.22008L2.78218 1.50313C1.78265 0.89231 0.5 1.61166 0.5 2.78306V10.2169C0.5 11.3883 1.78265 12.1077 2.78217 11.4969Z" stroke="#24D782"/>
                            </S.FeatureLinkSvg>
                        </S.FeatureLink>
                    </S.FeatureTextBox>

                    <S.FeatureImg src={MainSmile} marginTop={3.1}/>
                </S.FeatureChpBox>
            </S.FeatureChpLayout>
        </S.MainLayout>
    );
};

export default Main;