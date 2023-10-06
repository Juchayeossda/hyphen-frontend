import React, { EffectCallback, useEffect, useRef, useState } from 'react';
import EnjoyDrawingHeader from '../../common/Header';
import * as S from "./style"
import { useNavigate, useSearchParams } from 'react-router-dom';
import TagSettingIcon from "../../../assets/TagSettingIcon.svg"
import { JsxElement } from 'typescript';
import { Instance } from '../../../config/Axios';

// 그림 감상 컴포넌트
const EnjoyDrawingMain = () => {

    const navigator = useNavigate()
    const TAGLIST = ["차분한", "조용한", "활기찬","신나는","지친","창의적인","게으른","밝은","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트"]
    const DrawingDummy = [
        {
            id: 0,
            src: "https://i.namu.wiki/i/9qwvY95bmkj5R6XA43VifN7uu2dPTSfs6N2HboeD3g1zS0ONoDtMuaheUzl02Sh2bytDdLA8DoOqbbrXWtKxTQ.webp"
        },{
            id: 1,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/300px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg"
        },{
            id:2,
            src: "https://lh3.googleusercontent.com/y-iFOHfLTwkuQSUegpwDdgKmOjRSTvPxat63dQLB25xkTs4lhIbRUFeNBWZzYf370g=s1200"
        },{
            id:3,
            src: "https://cyw.pe.kr/xe/files/attach/images/24230/167/955/f893a9e806de35b768c62cc0a46ddd95.jpg"
        },{
            id:4,
            src: "https://lh3.googleusercontent.com/qEitWqkLfnbLAnDNg7wszFAIYbsRjzY5PtmbkuHrfMbmIk6xWzk-LFWtdmyE1xVqAA=s1200"
        },{
            id:5,
            src: "https://upload.wikimedia.org/wikipedia/en/4/4a/No._5%2C_1948.jpg"
        },{
            id:6,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKdNVp0wuizOKraq3OV616Sdgd3ugns8g7YvU1BsZ04js-2-2"
        },{
            id:7,
            src: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT82N1uvtAQjHGXUad7gegBaKX97sjRQdRX8ys69p_s7Or8J62yQbCmsHzdrZbtrRsq"
        },{
            id:8,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbUGI9qTOFcs3TI-S8MJTPCtpdWSA27vAMsItrlG_9mvbpblw"
        },{
            id:9,
            src: "https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg"
        },{
            id:10,
            src: "https://ca-times.brightspotcdn.com/dims4/default/512c50f/2147483647/strip/true/crop/5321x3580+0+0/resize/1200x807!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff3%2F5f%2Fbf2914a2448d8ddda43890f33d54%2F2018-met-museum-costume-institute-benefit-gala-19540.jpg"
        },{
            id:11,
            src: "https://lh3.googleusercontent.com/XQBr2BcJcZEPUOLp-CmzMH58BcdgPJEYm17IPbPvFvqMQ2zmDmVn7mPvqPvbg_OaYQ=s1200"
        },{
            id:12,
            src: "https://mblogthumb-phinf.pstatic.net/MjAxODAyMTJfNzQg/MDAxNTE4NDIwNjQ4NTYx.v3s6b0s3p6yCiELt1HcGH7vy9cLSrEEbwWDOlCZVkgwg.9WDgeoo81fP3QH7wK-NM6ZgFopRs19IxUx2MCDy4fg4g.JPEG.jrkimceo/Las-Meninas.jpg?type=w800"
        },{
            id:13,
            src: "https://lh3.googleusercontent.com/J0sw0IiqP2F4gavYnI-vUa5IBgHiHy42lohgm-qq1vuygUX0HQgylVSV1ZdDTV5XIg=s1200"
        },{
            id:14,
            src: "https://upload.wikimedia.org/wikipedia/ko/thumb/d/d5/%ED%94%BC%EC%B9%B4%EC%86%8C_%EA%B2%8C%EB%A5%B4%EB%8B%88%EC%B9%B4.jpg/350px-%ED%94%BC%EC%B9%B4%EC%86%8C_%EA%B2%8C%EB%A5%B4%EB%8B%88%EC%B9%B4.jpg"
        },{
            id:15,
            src: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRYvSQaEwrEaCuQ6YJPZrRCkrXJlhlXGjCfapkqVFTs4AJmX3Yo0NQHD1L6G0fvLGI4"
        },{
            id:16,
            src: "https://lh3.googleusercontent.com/KR_wa8QBx2dBjzP88H0hytbGjqOJe83l921YSLRjZj4O0o2yyyIpT7N8lZgIY9IXkxA=s1200"
        },{
            id:17,
            src: "https://lh3.googleusercontent.com/tLhhaDev6hy-4zVTplBXcsM0aZZbNzGFPKJ_szLqcMGreiE2JZWbEw3FB4qI9apK=s1200"
        },{
            id:18,
            src: "https://lh3.googleusercontent.com/KVtuP1ZLnptT1zh2cpknyLLCb6T-3e9_9QQvLMZ26Lg299Cw77cZ-OmQqQaAFKLFktM=s1200"
        },{
            id:19,
            src: "https://fineartmultiple.com/media/blog/475/magritte_la_lampe_philosophique_1936.jpg"
        }
    ]

    const ImgRef = useRef<HTMLImageElement[]>([]);
    const [isImgRef, setIsImgRef] = useState<boolean>(false)

    useEffect(()=>{
        // const {data}:any = Instance.get('/api/siss/storages/images/')
        // console.log(data)



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
                    DrawingDummy.map((v,i)=>(
                        <S.DrawingContainer
                            onClick={()=>{
                                navigator(`/enjoydrawing/detail/${v.id}`)
                            }}
                            he={ Math.ceil(( (ImgRef.current[v.id]?.offsetHeight == undefined ? 0 : ImgRef.current[v.id].offsetHeight ) + 8 )/( 8 + 8 ))}
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