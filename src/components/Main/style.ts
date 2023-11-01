import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainLayout = styled.div`
    // min-width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FirstChpLayout = styled.div`
    height: calc(100vh - 3vw);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const FirstChpBox = styled.div`
    margin-top: -3vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FirstImg = styled.img`
    margin-bottom: 1vw;

    width: 8vw;
    align-items: 8vw;
`

export const FirstTitle = styled.div`
    margin-bottom: 1.4vw;

    font-family: Pretendard;
    font-size: 3vw;
    font-weight: 700;
`

export const FirstBlackText = styled.div`
    line-height: 160%;
    text-align: center;
    font-family: Pretendard;
    font-size: 1vw;
    font-weight: 500;
`

export const FirstGrayText = styled.div`
    margin-top: 4vw;

    color: #9F9F9F;
    font-family: Pretendard;
    font-size: 0.7vw;
    font-weight: 500;
`

export const FirstLoginLink = styled(Link)`
    margin-top: 0.8vw;

    width: 8vw;
    height: 2vw;
    background: #27BB74;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: #FFF;
    font-family: Pretendard;
    font-size: 0.7vw;
    font-weight: 700;
`

export const SecondChpLayout = styled.div`
    width: 100%;
    height: 20vw;
    background-color: #F8F8F8;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const SecondChpBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SecondTitle = styled.div`
    font-family: Pretendard;
    font-size: 2.3vw;
    font-weight: 600;
`

export const SecondGrayText = styled.div`
    font-size: 1.8vw;
    color: #555;
    font-family: Pretendard;
`

export const SecondEnjoyPicLink = styled(Link)`
    margin-top: 2vw;

    width: 8.6vw;
    height: 2.2vw;

    background-color: transparent;
    border-radius: 50px;
    border: 1px solid #27BB74;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: #27BB74;
    font-family: Pretendard;
    font-size: 0.7vw;
    font-weight: 700;
`

export const FeatureGreenText = styled.div`
color: #27BB74;
font-family: Pretendard;
font-size: 4.3vw;
font-weight: 700;
`

export const FeatureBlackText = styled.div<{textAlign:string}>`
    margin-top: 0.4vw;
    margin-bottom: 1.5vw;

    text-align: ${(props)=>props.textAlign};
    color: #000;
    font-family: Pretendard;
    font-size: 1.8vw;
    font-weight: 500;
`

export const FeatureLink = styled(Link)`
    color: #24D782;
    font-family: Pretendard;
    font-size: 1vw;
    font-weight: 700;
    text-decoration: none;
`


export const FeatureLinkSvg = styled.svg`
    margin-left: 0.5vw;

`

export const FeatureChpLayout = styled.div`
    padding: 7vw 10.2vw 0 10.2vw;

    width: 100%;
    height: 40vw;
`

export const FeatureChpBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FeatureTextBox = styled.div<{direction:string}>`
    display: flex;
    flex-direction: column;
    align-items: ${(props)=>props.direction};
`

export const FeatureImg = styled.img<{marginTop:number}>`
    margin-top: ${(props)=> props.marginTop}vw;
`
export const FeatureDevideLine = styled.div`
    width: 100%;
    height: 0.5vw;
    background-color: #FAFAFA;
`

export const FourthChpBox = styled.div`

`


