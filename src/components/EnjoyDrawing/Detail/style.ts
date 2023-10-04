import styled from "styled-components";

export const EnjoyDrawingDetailLayout = styled.div`
    padding: 0 1vw;
    
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ExplainContentBox = styled.div`
    margin-top: 2vw;

    padding: 0.94rem;

    width: 58vw;
    height: 30vw;

    border-radius: 1.5625rem;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);

    display: flex;
    align-items: center;
`

export const ExplainImg = styled.img`
    width: 63%;
    `

export const InfoBox = styled.div`
    margin-left: 3%;

    width: 34%;
    height: 100%;
`

export const IconRow = styled.div`
    display: flex;
    align-items: center;
`

export const ExplainIconImg = styled.img`
    margin-right: 1vw;

    width: 0.9vw;
    height: 0.9vw;
`

export const Space = styled.div`
    flex: 1;
`

export const LikeIconImg = styled.img`
    margin-right: 2px;
    
    width: 1vw;
    height: 1vw;
`

export const LikeInfoText = styled.div`
    color: #A6A6A6;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 500;
`

export const LikeBtn = styled.div`
    margin-left: 0.8vw;

    border-radius: 1.25rem;
    background: #D3D3DB;

    width: 3vw;
    height: 1.8vw;

    color: #FFF;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const InfoTitle = styled.div`
    margin-top: 7%;

    color: #000;
    font-family: Inter;
    font-size: 1.4vw;
    font-weight: 700;
`

export const InfoContent = styled.div`
    margin-top: 2%;

    color: #727383;
    font-family: Pretendard;
    font-size: 0.8vw;
    font-weight: 600;

    word-break: keep-all;
`

export const OtherDrawingContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(8, 1fr);
`

export const DrawingContainer = styled.div`
`

export const DrawingImg = styled.img`
    width: 100%;

    border-radius: 1.25rem;
    display: inline-block;
    object-fit: cover;
`

export const ShowMoreDrawing = styled.div`
    margin: 1vw 0 0.9vw 0;

    color: #838383;
    font-family: Pretendard;
    font-size: 0.8vw;
    font-weight: 700;
`

