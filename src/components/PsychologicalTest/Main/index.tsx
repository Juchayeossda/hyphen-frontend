import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style"
import {useSetRecoilState} from 'recoil'
import { isActivePageAtom } from '../../../state/headerAtom';
import DrawingIcon from "../../../assets/DrawingIcon.svg"
import { Instance2 } from '../../../config/Axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { responseType } from '../type';
import AIResult from '../../../function/AIResult';
// import TestVideo from "../../../assets/testVideo.mp4"

// 업로드랑 그리기 중 선택할 수 있도록 만들기
const PsyTest = () => {
    const navigator = useNavigate()
    const setIsActivePage = useSetRecoilState(isActivePageAtom)

    const DIRECTION = "‘나무’를 자유롭게 그린 파일을 제출해주세요."

    const [uploadImg,setUploadImg] = useState<File|null>()
    const imgFormData = new FormData()

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [getCtx,setGetCtx] = useState<any>(null)
    // 선 활성화 또는 비활성화 상태
    const [ispainting,setIsPainting] = useState<boolean>(false)
    
    const [detectObject, setDetectClass] = useState<string[]>([])

    useEffect(()=>{
        setIsActivePage(2)
        
        const canvas:any = canvasRef.current
        const ctx = canvas.getContext("2d");
        if(ctx){
            ctx.lineJoin = "round";
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#000";
            setGetCtx(ctx)
        }
        
    },[])

    const drawingFunction = (e:any) => {
        const mouseX = Number(e.nativeEvent.offsetX)
        const mouseY = Number(e.nativeEvent.offsetY)

        /* getCtx.beginPath();
        getCtx.moveTo(500, 500);
        getCtx.lineTo(100, 100);
        getCtx.stroke(); */
        if (!ispainting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX, mouseY);
        } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
        }
    } 

    const onSubmit = () => {
        if(canvasRef.current){
            const imageUrl = canvasRef.current.toDataURL("image/jpeg")
            
            imgFormData.append('image',imageUrl)
        }
        
        if(imgFormData){

            Instance2.post('/v1/object-detection/yolov5x',
            imgFormData,
            {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(async(res)=>{
                if(res.data.length === 0){
                    setDetectClass([
                        "99"
                    ])
                }
                setDetectClass(
                    res.data.map((d:responseType)=>(d.name))
                )

            })
            .catch((err)=>{
                console.error(err)
                alert("서버 에러입니다.")
            })
        }
    }
    
    useEffect(()=>{
        if(detectObject.length > 0){
            const AIResultValue = AIResult(detectObject)
            
            navigator('/psytest/result',{
                state:{
                    AIResultValue
                }
            })
        }
    },[detectObject])

    return (
        <S.PsyTestLayout>
            <S.Direction>{DIRECTION}</S.Direction>

            {/*<S.ImgWrapper>
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
            </S.ImgWrapper>*/}

            <S.Canvas
                width={900}
                height={450}
                ref={canvasRef}
                onMouseDown={() => {
                    setIsPainting(true)
                    console.log(getCtx)
                }}
                onMouseUp={() => {
                    setIsPainting(false)
                }}
                onMouseMove={e => {
                    drawingFunction(e)
                }}
                onMouseLeave={() => {
                    setIsPainting(false)
                }}
            ></S.Canvas>

            <S.SubmitBtn onClick={onSubmit}>제출</S.SubmitBtn>

        </S.PsyTestLayout>
    );
};

export default PsyTest;