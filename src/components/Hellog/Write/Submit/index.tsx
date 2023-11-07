import React, { useState } from 'react';
import * as S from "./style"
import DrawingIcon from "../../../../assets/DrawingIcon.svg"
import OpenIconGreen from "../../../../assets/OpenIconGreen.png"
import OpenIconGray from "../../../../assets/OpenIconGray.png"
import NotOpenIconGreen from "../../../../assets/NotOpenIconGreen.png"
import NotOpenIconGray from "../../../../assets/NotOpenIconGray.png"
import { useLocation, useNavigate } from 'react-router-dom';
import { Instance } from '../../../../config/Axios';

const WriteSubmit = () => {
    const navigator = useNavigate()
    const location = useLocation()
    const {title,content} = location.state

    const [isPrivate,setIsPrivate] = useState<boolean>(true)
    const [previewImg,setPreviewImg] = useState<File|null>(null)
    const [shortDescription,setShortDescription] = useState<string>("") 

    const SHORTDESCRIPTIONMAXLENGTH = 100
    
    const imageFormData = new FormData()
    
    const onSubmit = async () => {
        if(previewImg){
            imageFormData.append('image',previewImg)
        }
        if(shortDescription){
            imageFormData.append('short_description',shortDescription)
        }
        imageFormData.append('title',title)
        imageFormData.append('content',content)
        imageFormData.append('is_private',isPrivate.toString())
        
        if(imageFormData){
            /* for (let keys of imageFormData.keys()) {
                console.log(keys); // 이미지 객체의 정보
            }
            
            for (let values of imageFormData.values()) {
                console.log(values); // 이미지 객체의 정보
            } */

            await Instance.post('/api/hellog/posts/post',
            /* {
                // title,
                // content,
                // image : imageFormData,
                // is_private : "false",
                // isPrivate.toString()
                // short_description:'짧은 설명'
            } */
            imageFormData
            ,{
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then((res)=>{
                console.log(res)
                alert('게시글을 작성하였습니다.')
                navigator('/')
            })
            .catch((err)=>{
                console.error(err)

                if(err.response.data.message === "Unauthorized"){
                    alert('재로그인이 필요합니다.')
                    navigator('/signin')
                }

                if(err.response.data.code === 400){
                    alert("내용 또는 제목을 입력해주세요.")
                    navigator('/hellog/write')
                }
            })
        }
        
    }

    return (
        <S.WriteSubmitLayout>
            <S.ContentBox>
                <S.LeftBox>
                    <S.BoxTitle>포스트 미리보기</S.BoxTitle>
                    <S.PreviewBox>
                        <S.DrawingImg src={previewImg ? URL.createObjectURL(previewImg) : DrawingIcon}/>
                        <S.UploadImgInputLabel htmlFor='imageInput'>이미지 업로드</S.UploadImgInputLabel>
                        <S.UploadImgInput 
                            id='imageInput' 
                            type='file'
                            hidden
                            onChange={(e)=>{
                                if(e.target.files){
                                    setPreviewImg(e.target.files[0])
                                }
                            }}
                        />
                    </S.PreviewBox>
                </S.LeftBox>
                <S.DevideBoxLine/>
                <S.RightBox>
                    <S.BoxTitle>포스트 소개</S.BoxTitle>
                    <S.PostIntroInput 
                        placeholder='포스트를 짧게 소개해보세요.'
                        value={shortDescription}
                        maxLength={SHORTDESCRIPTIONMAXLENGTH-1}
                        onChange={(e)=>{
                            setShortDescription(e.target.value)
                        }}
                    />
                    <S.TextCount>{shortDescription.length}/{SHORTDESCRIPTIONMAXLENGTH}</S.TextCount>
                    <S.BoxTitle>공개 설정</S.BoxTitle>
                    <S.IsOpenBtnRow>
                        <S.IsOpenBtn 
                            isChecked={!isPrivate}
                            onClick={()=>{
                                setIsPrivate(false)
                            }}
                        >
                            <S.IsOpenBtnImg src={!isPrivate ? OpenIconGreen : OpenIconGray}/>
                            전체 공개
                        </S.IsOpenBtn>
                        <S.IsOpenBtn 
                            isChecked={isPrivate}
                            onClick={() => {
                                setIsPrivate(true)
                            }}
                        >
                            <S.IsOpenBtnImg src={isPrivate ? NotOpenIconGreen : NotOpenIconGray}/>
                            비공개
                        </S.IsOpenBtn>
                    </S.IsOpenBtnRow>
                    <S.SubmitBtnRow>
                        <S.CancelBtn>취소</S.CancelBtn>
                        <S.SubmitBtn onClick={onSubmit} type='submit'>게시하기</S.SubmitBtn>
                    </S.SubmitBtnRow>
                </S.RightBox>
            </S.ContentBox>
        </S.WriteSubmitLayout>
    );
};

export default WriteSubmit;