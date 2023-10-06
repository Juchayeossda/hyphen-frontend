import { Link } from "react-router-dom";
import styled from "styled-components";

export const WriteLayout = styled.div`
    background-color: #FBFDFC;
`

export const ContentBox = styled.div`
    width: 50vw;
    height: 100vh;

    background-color: #fff;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
`

export const ContentHeaderBox = styled.div`
    padding: 0 1.4%;

    width: 100%;
    height: 3.125rem;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GoBackBox = styled.div`
    display: flex;
    align-items: center;
`

export const ArrowSvg = styled.svg``

export const GoBackText = styled.div`
    margin-left: 0.62rem;

    font-family: Pretendard;
    font-size: 1rem;
    white-space: nowrap;
`

export const SubmitLink = styled(Link)`
    width: 5.75rem;
    height: 1.9375rem;
    border-radius: 0.1875rem;
    background: #24D782;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: #FFF;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;

    border: none;
`

export const WriteBox = styled.div`
    padding: 3% 5%;
`

export const TitleInput = styled.input`
    border: none;

    font-family: Pretendard;
    font-size: 2.5rem;
    font-weight: 600;
    
    ::placeholder{
        color: #B3BBC3;
    }

    outline: none;
`

export const TitleDevideLine = styled.div`
    margin-top: 1.3%;
    margin-bottom: 1.8%;

    width: 2.5rem;
    height: 0.25rem;

    background: #4A5056;
`

export const BtnRow = styled.div`
    margin-bottom: 3vh;

    display: flex;
    align-items: center;
`

export const HeadingBtnRow = styled.div`
    width: 12.5%;

    display: flex;
    justify-content: space-between;
`

export const HeadingBtn = styled.button`
    border: none;
    background-color: transparent;
`

export const HText = styled.text`
    color: #7F868D;
    font-family: Source Serif Pro;
    font-size: 0.75rem;
    font-weight: 600;
`

export const NumText = styled.text`
    color: #7F868D;
    font-family: Source Serif Pro;
    font-size: 0.5625rem;
    font-weight: 600;
`

export const DevideBtnLine = styled.div`
    margin: 0 1.6%;

    width: 0.0625rem;
    height: 0.6875rem;

    background: #DFE2E6;
`

export const SubBtnRow = styled.div`
    width: 8.5%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BoldBtn = styled.button`
    color: #7F868D;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 700;
`

export const ItalicBtn = styled.button`
    color: #7F868D;
    font-family: Anonymous Pro;
    font-size: 0.9375rem;
    font-style: italic;
    font-weight: 700;
`

export const SprikeImgBtn = styled.img``

export const QuotationImgBtn = styled.img``

export const LinkImgBtn = styled.img``

export const ImgImgBtn = styled.img``

export const MainInput = styled.textarea`
    resize: none;
    border: none;

    width: 100%;
    height: 75vh;

    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    
    ::placeholder{
        color: #B3BBC3;
    }
`
