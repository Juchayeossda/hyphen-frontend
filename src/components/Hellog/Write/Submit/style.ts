import styled from "styled-components";

export const WriteSubmitLayout = styled.div`
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F8F9FA;
`

export const ContentBox = styled.div`
    width: 39vw;
    height: 15vw;
    
    display: flex;
`

export const LeftBox = styled.div`
    padding-right: 3%;

    width: 50.2%;
    height: 100%;
`

export const BoxTitle = styled.div`
    margin-bottom: calc(100% - 87% - 8%);

    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 600;
`

export const PreviewBox = styled.div`
    width: 100%;
    height: 87%;
    background: #F0F2F5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DrawingImg = styled.img`
    width: 26%;
`

export const UploadImgInputLabel = styled.label`
    margin-top: 6%;

    width: 26%;
    height: 9%;
    background-color: transparent;
    display: block;

    border-radius: 0.1875rem;
    border: 1px solid #24D782;
    
    text-align: center;
    color: #24D782;
    font-family: Pretendard;
    font-size: 0.6vw;
    font-weight: 700;

`

export const UploadImgInput = styled.input`

`

export const DevideBoxLine = styled.div`
    width: 0.125rem;
    height: 100%;
    background: #EAECEF;
`

export const RightBox = styled.div`
    margin-left: 3%;

    width: 49%;
    height: 100%;

    position: relative;
`

export const PostIntroInput = styled.textarea`
    padding: 4% 4%;
    height: 28%;
    width: 100%;
    background: #FFF;
    resize: none;
    border: none;
    outline: none;

    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 500;
    
    ::placeholder{
        color: #B3B3B3;
    }
`

export const TextCount = styled.div`
    margin-bottom: 6%;

    color: #899097;
    font-family: Pretendard;
    font-size: 0.625rem;
    font-weight: 600;

    width: 100%;
    display: flex;
    justify-content: end;
`

export const IsOpenBtnRow = styled.div`
    width: 100%;
    height: 14%;

    display: flex;
    justify-content: space-between;
`

export const IsOpenBtn = styled.button<{isChecked:boolean}>`
    width: 47%;
    height: 100%;

    border-radius: 0.3125rem;
    border: 1px solid ${(props)=>props.isChecked ? "#24D782" : "#FFF"};
    background: #FFF;

    color: ${(props)=>props.isChecked ? "#24D782" : "#878E95"};
    font-family: Pretendard;
    font-size: 1vw;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const IsOpenBtnImg = styled.img`
    margin-right: 6%;

    width: 13%;
`

export const SubmitBtnRow = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: end;

    position: absolute;
    bottom: 0;
`

export const SubmitBtn =  styled.button`
    width: 24%;
    height: 100%;

    border-radius: 0.1875rem;
    background: #24D782;

    color: #FFF;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;
`

export const CancelBtn = styled.button`
    margin-right: 8%;

    color: #24D782;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;
`

