import React from 'react';
import * as S from "./style"
import DrawingIcon from "../../../../assets/DrawingIcon.svg"
import OpenIcon from "../../../../assets/OpenIcon.svg"
import NotOpenIcon from "../../../../assets/NotOpenIcon.svg"

const WriteSubmit = () => {
    return (
        <S.WriteSubmitLayout>
            <S.ContentBox>
                <S.LeftBox>
                    <S.BoxTitle>포스트 미리보기</S.BoxTitle>
                    <S.PreviewBox>
                        <S.DrawingImg src={DrawingIcon}/>
                        <S.UploadImgBtn>이미지 업로드</S.UploadImgBtn>
                    </S.PreviewBox>
                </S.LeftBox>
                <S.DevideBoxLine/>
                <S.RightBox>
                    <S.BoxTitle>포스트 소개</S.BoxTitle>
                    <S.PostIntroInput placeholder='포스트를 짧게 소개해보세요.'/>
                    <S.TextCount>0/100</S.TextCount>
                    <S.BoxTitle>공개 설정</S.BoxTitle>
                    <S.IsOpenBtnRow>
                        <S.IsOpenBtn isChecked={true}>
                            <S.IsOpenBtnImg src={OpenIcon}/>
                            전체 공개
                        </S.IsOpenBtn>
                        <S.IsOpenBtn isChecked={false}>
                            <S.IsOpenBtnImg src={NotOpenIcon}/>
                            전체 공개
                        </S.IsOpenBtn>
                    </S.IsOpenBtnRow>
                    <S.SubmitBtnRow>
                        <S.CancelBtn>취소</S.CancelBtn>
                        <S.SubmitBtn>게시하기</S.SubmitBtn>
                    </S.SubmitBtnRow>
                </S.RightBox>
            </S.ContentBox>
        </S.WriteSubmitLayout>
    );
};

export default WriteSubmit;