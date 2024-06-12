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

const PsyTest = () => {
    const navigator = useNavigate()
    const setIsActivePage = useSetRecoilState(isActivePageAtom)

    const DIRECTION = "‘나무’를 자유롭게 그린 파일을 업로드해주세요."

    const [uploadImg,setUploadImg] = useState<File|null>()
    const imgFormData = new FormData()
    const [detectObject, setDetectClass] = useState<string[]>([])
    
    /*
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [getCtx,setGetCtx] = useState<any>(null)
    // 선 활성화 또는 비활성화 상태
    const [ispainting,setIsPainting] = useState<boolean>(false)
    */    

    useEffect(()=>{
        setIsActivePage(2)

        /*        
        const canvas:any = canvasRef.current
        const ctx = canvas.getContext("2d");
        if(ctx){
            ctx.lineJoin = "round";
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = "#000000";
            setGetCtx(ctx)
        }
        */
        
    },[])

    /*
    const drawingFunction = (e:any) => {
        const mouseX = e.nativeEvent.offsetX
        const mouseY = e.nativeEvent.offsetY

        if (!ispainting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX, mouseY);
          } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
          }
    }
    */

    const onSubmit = () => {
        if(uploadImg){
            imgFormData.append('image',uploadImg)
        }

        if(imgFormData){
            for (const value of imgFormData.values()) {
                console.log(value);
              };

            
            axios.post('http://10.80.161.222:9190/hi',
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

            {/*<S.Canvas
                width={1000}
                height={1000}

                ref={canvasRef}
                onMouseDown={() => {
                    setIsPainting(true)
                    console.log(ispainting)
                    console.log(getCtx)
                }}
                onMouseUp={() => {
                    setIsPainting(false)
                    console.log(ispainting)
                }}
                onMouseMove={e => drawingFunction(e)}
                onMouseLeave={() => setIsPainting(false)}
                // onClick={(e)=>{alert(e.clientX)}}
            ></S.Canvas>*/}
        </S.PsyTestLayout>
    );
};

export default PsyTest;