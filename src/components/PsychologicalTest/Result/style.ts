import { Link } from "react-router-dom";
import styled from "styled-components";

export const PsyTestResult = styled.div`
    width: 100%;
    height: calc(100vh - 3vw);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentBox = styled.div`
    margin-top: -3vw;

    width: 40vw;
    height: 38vw;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
`

// export const ImageBlurBox = styled.div`
//     border-radius: 15px 15px 0 0;
//     width: 100%;
//     height: 35%;
//     background: rgba(255, 255, 255, 0.01);
//     z-index: 1;

//     position: relative;
// `

export const ImageBox = styled.div`
    border-radius: inherit;
    width: 100%;
    height: 35%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    // opacity: 0.1;
    // backdrop-filter: blur(10px);

    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFF;
    font-family: BM DoHyeon OTF;
    font-size: 1.8vw;
`

export const IntroText = styled.div`
    margin: 2.9vw 0 1.5vw 0;

    width: 22.7vw;
    max-height: 5vw;

    text-align: center;
    font-family: Pretendard;
    font-size: 0.7vw;

    white-space: pre-wrap;
    overflow-y: auto;
`

export const SuggestImgBox = styled.div`
    padding: 0 1.7vw;

    width: 89%;
    height: 28%;
    background-color: #F8F8FA;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SuggestText = styled.div`
    margin: 1.3vw 0 1.1vw 0;

    font-family: Pretendard;
    font-size: 0.9vw;
    font-weight: 600;
`

export const SuggestLink = styled(Link)`
    /* width: 8vw;
    height: 6vw; */
`

export const SuggestImgRaw = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SuggestImg = styled.img`
    width: 9.5vw;
    height: 6vw;
    object-fit: cover;
    border-radius: 7px;
`

export const RedirectLinkRaw = styled.div`
    display: flex;

    position: absolute;
    bottom: 1.4vw;
`

export const HomeRedirectLink = styled(Link)`
    width: 4.7vw;
    height: 1.6vw;
    text-decoration: none;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Pretendard;
    font-size: 0.7vw;
    font-weight: 600;
    
    color: #A4A7B5;
    
    background-color: #F4F4F4;
`

export const RecodeRedirectLink = styled(Link)`
    margin-left: 0.8vw;

    width: 4.7vw;
    height: 1.6vw;
    text-decoration: none;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: Pretendard;
    font-size: 0.7vw;
    font-weight: 600;

    color: #24D782;
    
    border: solid 1px #24D782;
`

