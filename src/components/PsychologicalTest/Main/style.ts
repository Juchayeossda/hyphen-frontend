import styled from "styled-components";

export const PsyTestLayout = styled.div`
    min-width: 100vw;
    min-height: calc(100vh - 3vw);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Direction = styled.div`
    margin-bottom: 3.1vw;

    font-family: BM DoHyeon OTF;
    font-size: 1.8vw;
`

export const ImgWrapper = styled.div`
    width: 32vw;
    height: 22vw;
    background-color: #EBEBF0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImgPreview = styled.img`
    width: 10.5vw;
    height: 10.5vw;
`

export const ImgInputLabel = styled.label`
    width: 7.5vw;
    height: 1.8vw;
    background-color: #DFE1E9;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.8vw;
    color: #A9ACB9;
    font-family: Pretendard;
    font-weight: 500;

    cursor: pointer;
`

export const ImgInput = styled.input`

`

export const SubmitBtn = styled.button`
    margin-top: 3.3vw;

    width: 4.7vw;
    height: 1.8vw;

    border-radius: 3px;
    border: solid 1px #24D782;

    color: #24D782;
    font-family: Pretendard;
    font-size: 0.7vw;
    font-weight: 600;

    cursor: pointer;
`

export const Canvas = styled.canvas`

    border: 1px solid #000;
    background-color: white;
`
