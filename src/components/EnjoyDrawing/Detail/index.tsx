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

    const DUMMYCONTENT = ['그림에 대한 구체적이고 흥미로운 설명이 들어갈 예정입니다.']
    const [DrawingList,setDrawingList] = useState<{
        id:number,
        src:string
    }[]>([])
    const ImgRef = useRef<HTMLImageElement[]>([]);
    const [isImgRef, setIsImgRef] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(()=>{
        Instance.get('/api/paints')
        .then((res)=>{
            setDrawingList(res.data.Data)
            setIsLoading(true)
        })
        .catch((err)=>{
            console.error(err)
        })

        if(ImgRef.current !== undefined && ImgRef.current !== null){
            setIsImgRef(true)
        }

    },[ImgRef])
    
    if ((!isImgRef) || (!isLoading)){
        <h1>정보를 가져오는 중입니다.</h1>
    }

    return (
        <S.EnjoyDrawingDetailLayout>
            
            <S.ExplainContentBox>
                {
                    DrawingList[20] === undefined ? (
                        <div>정보 가져</div>
                    ) : (
                        <S.ExplainImg src={DrawingList[id].src}/>
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
                    <S.InfoTitle>{parseInt(id) + 1}번째 작품</S.InfoTitle>
                    <S.InfoContent>{DUMMYCONTENT}</S.InfoContent>
                </S.InfoBox>
            </S.ExplainContentBox>

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