import React, { EffectCallback, useEffect, useRef, useState } from 'react';
import EnjoyDrawingHeader from '../../common/Header';
import * as S from "./style"
import { useNavigate, useSearchParams } from 'react-router-dom';
import TagSettingIcon from "../../../assets/TagSettingIcon.svg"
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { isActivePageAtom, searchValueAtom } from '../../../state/headerAtom';
import { JsxElement } from 'typescript';
import { Instance } from '../../../config/Axios';

// 그림 감상 컴포넌트
const EnjoyDrawingMain = () => {
    const setIsActivePage = useSetRecoilState(isActivePageAtom)
    const [searchValue,setSearchValue] = useRecoilState(searchValueAtom)

    useEffect(()=>{
        setIsActivePage(3)

        Instance.get('/api/paint')
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    const navigator = useNavigate()
    const TAGLIST = ["붉은","푸른","무채색","차분한", "조용한", "활기찬","신나는","지친","우울한","어두운","밝은"]
    const [DrawingList,setDrawingList] = useState<{
        id:number,
        src:string
    }[]>([])

    const ImgRef = useRef<HTMLImageElement[]>([]);
    const [isImgRef, setIsImgRef] = useState<boolean>(false)

    useEffect(()=>{
        setSearchValue("")
        /* Instance.get('/api/paints')
        .then((res)=>{
            setDrawingList(res.data.Data)
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
    
    if (!isImgRef){
        <h1>정보를 가져오는 중입니다.</h1>
    }

    return (
        <S.EnjoyDrawingMainLayout>

            <S.SecondRow>
                <S.TagSettingBox>
                    <S.TagSettingIconImg src={TagSettingIcon}/>
                </S.TagSettingBox>
                {
                    TAGLIST.map((data,index)=>
                    <S.TagBox>{data}</S.TagBox>
                    )
                }
            </S.SecondRow>

            <S.DrawingsBox>
                {
                    DrawingList.map((v,i)=>(
                        <S.DrawingContainer
                            onClick={()=>{
                                navigator(`/enjoydrawing/detail/${v.id}`)
                            }}
                            he={ Math.ceil(( (ImgRef.current[v.id]?.offsetHeight === undefined ? 0 : ImgRef.current[v.id].offsetHeight ) + 8 )/( 8 + 8 ))}
                        >
                            <S.DrawingImg ref={(e:HTMLImageElement) => {ImgRef.current[v.id] = e} } src={v.src}/>
                        </S.DrawingContainer>
                    ))
                }

            </S.DrawingsBox>
        </S.EnjoyDrawingMainLayout>
    );
};

export default EnjoyDrawingMain;