import React, { useEffect, useRef, useState } from 'react';
import { Params, useNavigate, useParams } from 'react-router-dom';
import * as S from "./style"
import DownloadIcon from "../../../assets/DownloadIcon.svg"
import ShareIcon from "../../../assets/ShareIcon.svg"
import UploadIcon from "../../../assets/UploadIcon.svg"
import LikeIcon from "../../../assets/LikeIcon.svg"
import EnjoyDrawingHeader from '../../common/Header';
import { Instance } from '../../../config/Axios';

const EnjoyDrawingDetail = () => {
    const {id}:any = useParams()
    const navigator = useNavigate()

    const DUMMYCONTENT = [{
        src: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-FvbbAq5IaJUhtwxXEwY0D-jiZju02ejnNHx_bQWL_27GF3srhwJgqusMAqKh3QqU',
        intro: '이 그림은 모나리자입니다.'
    },{
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8o9u31XYayMZRvWTfPRBdN8dPCrXIx_b35O57klZie1ccShcNRO_kTXLG0JjLoFHxBE&usqp=CAU',
        intro: '그림에 대한 구체적인 설명이 들어갈 예정입니다.'
    },{
        src: 'https://miro.medium.com/v2/resize:fit:1074/1*GOuSbb4PnQ_xqA-Hu2Mp7g.jpeg',
        intro: '그림에 대한 구체적인 설명이 들어갈 예정입니다.'
    }]
    const [DrawingList,setDrawingList] = useState<{
        id:number,
        src:string
    }[]>([])
    const ImgRef = useRef<HTMLImageElement[]>([]);
    const [isImgRef, setIsImgRef] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [currentIdx,setCurrentIdx] = useState<number>(0)

    useEffect(()=>{
        /* Instance.get('/api/paints')
        .then((res)=>{
            setDrawingList(res.data.Data)
            setIsLoading(true)
        })
        .catch((err)=>{
            console.error(err)
        }) */

        setDrawingList([{
            id: 1,
            src: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-FvbbAq5IaJUhtwxXEwY0D-jiZju02ejnNHx_bQWL_27GF3srhwJgqusMAqKh3QqU'
        }])
        

        if(ImgRef.current !== undefined && ImgRef.current !== null){
            setIsImgRef(true)
        }

    },[ImgRef])
    
    if ((!isImgRef) || (!isLoading)){
        <h1>정보를 가져오는 중입니다.</h1>
    }

    return (
        <S.EnjoyDrawingDetailLayout>

            <S.FirstRow>

                {
                    currentIdx !== 0 &&
                    <S.NextBtnBox
                        onClick={() => setCurrentIdx((prev)=> prev - 1)}
                    >
                        <S.NextBtnSvg xmlns="http://www.w3.org/2000/svg" width="0.5vw" height="0.8vw" viewBox="0 0 10 18" fill="none">
                            <path d="M9 17L1 9L9 1" stroke="#DEDEEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </S.NextBtnSvg>
                    </S.NextBtnBox>
                }

                <S.ExplainContentBox>
                    {
                        /* DrawingList[20] === undefined ? (
                            <div>정보 가져</div>
                        ) : (
                            <S.ExplainImg src={DrawingList[id].src}/>
                        ) */

                        DUMMYCONTENT[currentIdx].src === undefined ? (
                            <div>정보 가져오는 중</div>
                        ) : (
                            <S.ExplainImg src={DUMMYCONTENT[currentIdx].src}/>
                        )
                    }

                    <S.InfoBox>
                        <S.IconRow>
                            <S.ExplainIconImg src={DownloadIcon}/>
                            <S.ExplainIconImg src={ShareIcon}/>
                            <S.ExplainIconImg src={UploadIcon}/>

                            <S.Space/>

                            <S.LikeIconImg src={LikeIcon}/>
                            <S.LikeInfoText>3.45K</S.LikeInfoText>
                            <S.LikeBtn>Like</S.LikeBtn>

                        </S.IconRow>
                        <S.InfoTitle>모나리자</S.InfoTitle>
                        <S.InfoContent>
                            {
                                DUMMYCONTENT[currentIdx].intro
                            }
                        </S.InfoContent>
                    </S.InfoBox>

                </S.ExplainContentBox>

                {
                    currentIdx !== (DUMMYCONTENT.length-1) &&   
                    <S.NextBtnBox
                        onClick={() => setCurrentIdx((prev)=> prev + 1)}
                    >
                        <S.NextBtnSvg xmlns="http://www.w3.org/2000/svg" width="0.5vw" height="0.8vw" viewBox="0 0 10 18" fill="none">
                            <path d="M1 1L9 9L1 17" stroke="#DEDEEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </S.NextBtnSvg>
                    </S.NextBtnBox>
                }

            </S.FirstRow>
            
            <S.ShowMoreDrawing>그림 더보기</S.ShowMoreDrawing>

            <S.OtherDrawingBox>
                {
                    DrawingList.map((v,i)=>(
                        v.src == undefined ? (
                            <div>정보 가져오는 중</div>
                        )
                        : (
                            <S.DrawingContainer
                                onClick={()=>{
                                    navigator(`/enjoydrawing/detail/${v.id}`)
                                }}
                                he={ Math.ceil(( (ImgRef.current[v.id]?.offsetHeight == undefined ? 0 : ImgRef.current[v.id].offsetHeight ) + 8 )/( 8 + 8 ))}
                            >
                                <S.DrawingImg ref={(e:HTMLImageElement) => {ImgRef.current[v.id] = e} } src={v.src}/>
                            </S.DrawingContainer>
                        )
                    ))
                }
            </S.OtherDrawingBox>

        </S.EnjoyDrawingDetailLayout>
    );
};

export default EnjoyDrawingDetail;