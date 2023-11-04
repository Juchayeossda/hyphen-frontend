import React, { useEffect, useState } from 'react';
import * as S from "./style"
import {useSetRecoilState} from 'recoil'
import { isActivePageAtom } from '../../../state/headerAtom';
import DrawingIcon from "../../../assets/DrawingIcon.svg"
import { Instance, Instance2 } from '../../../config/Axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { responseType } from '../type';
import AIResult from '../../../function/AIResult';
// import TestVideo from "../../../assets/testVideo.mp4"

const PsyTest = () => {
    const navigator = useNavigate()
    const setIsActivePage = useSetRecoilState(isActivePageAtom)

    const DIRECTION = "‘나무’을 자유롭게 그린 파일을 업로드해주세요."

    const [uploadImg,setUploadImg] = useState<File|null>()
    const imgFormData = new FormData()

    const [detectObject, setDetectClass] = useState<string[]>([])

    useEffect(()=>{
        setIsActivePage(2)
    },[])

    const onSubmit = () => {
        if(uploadImg){
            imgFormData.append('image',uploadImg)
        }

        if(imgFormData){

            for (let values of imgFormData.values()) {
                console.log(values); // 이미지 객체의 정보
            }

            Instance2.post('/v1/object-detection/yolov5x',
            imgFormData,
            {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then((res)=>{
                setDetectClass(
                    res.data.map((d:responseType)=>(d.name))
                )
                
                console.log(detectObject)
                
                const AIResultValue = AIResult(detectObject)
                
                navigator('/psytest/result',{
                    state:{
                        AIResultValue
                        }
                })
            })
            .catch((err)=>{
                console.error(err)
            })
        }
    }
            
    // useEffect(()=>{
    // },[detectObject])

    return (
        <S.PsyTestLayout>
            <S.Direction>{DIRECTION}</S.Direction>

            <S.ImgWrapper>
                <S.ImgPreview src={uploadImg ? URL.createObjectURL(uploadImg) : DrawingIcon}/>

                <S.ImgInputLabel htmlFor='imgInput'>이미지 업로드</S.ImgInputLabel>
                <S.ImgInput 
                    type='file' 
                    id='imgInput' 
                    hidden
                    onChange={(e)=>{
                        if(e.target.files){
                            setUploadImg(e.target.files[0])
                        }
                    }}
                />
            </S.ImgWrapper>

            <S.SubmitBtn onClick={onSubmit}>제출</S.SubmitBtn>
        </S.PsyTestLayout>
    );
};

export default PsyTest;