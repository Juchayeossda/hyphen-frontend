import React, { useEffect } from 'react';
import * as S from "./style"
import {useSetRecoilState} from 'recoil'
import { isActivePageAtom } from '../../../state/headerAtom';
import DrawingIcon from "../../../assets/DrawingIcon.svg"
// import TestVideo from "../../../assets/testVideo.mp4"

const PsyTest = () => {
    const setIsActivePage = useSetRecoilState(isActivePageAtom)

    const DIRECTION = "‘나무’을 자유롭게 그린 파일을 업로드해주세요."

    useEffect(()=>{
        setIsActivePage(2)
    },[])

    const onSubmit = () => {

    }

    return (
        <S.PsyTestLayout>
            <S.Direction>{DIRECTION}</S.Direction>

            <S.ImgWrapper>
                <S.ImgPreview src={DrawingIcon}/>

                <S.ImgInputLabel htmlFor='imgInput'>이미지 업로드</S.ImgInputLabel>
                <S.ImgInput type='file' id='imgInput' hidden/>
            </S.ImgWrapper>

            <S.SubmitBtn onClick={onSubmit}>제출</S.SubmitBtn>
        </S.PsyTestLayout>
    );
};

export default PsyTest;