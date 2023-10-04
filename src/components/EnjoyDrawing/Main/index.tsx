import React from 'react';
import EnjoyDrawingHeader from '../../common/Header';
import * as S from "./style"
import { useNavigate } from 'react-router-dom';
import TagSettingIcon from "../../../assets/TagSettingIcon.svg"

const EnjoyDrawingMain = () => {

    const TAGLIST = ["차분한", "조용한", "활기찬","신나는","지친","창의적인","게으른","밝은","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트","테스트"]

    const navigator = useNavigate()
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
                
                <S.DrawingContainer
                    onClick={()=>{navigator(`/enjoydrawing/detail/${0}`)}}
                >
                    <S.DrawingImg src='https://i.namu.wiki/i/9qwvY95bmkj5R6XA43VifN7uu2dPTSfs6N2HboeD3g1zS0ONoDtMuaheUzl02Sh2bytDdLA8DoOqbbrXWtKxTQ.webp' />
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/300px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://lh3.googleusercontent.com/y-iFOHfLTwkuQSUegpwDdgKmOjRSTvPxat63dQLB25xkTs4lhIbRUFeNBWZzYf370g=s1200'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://cyw.pe.kr/xe/files/attach/images/24230/167/955/f893a9e806de35b768c62cc0a46ddd95.jpg'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://lh3.googleusercontent.com/qEitWqkLfnbLAnDNg7wszFAIYbsRjzY5PtmbkuHrfMbmIk6xWzk-LFWtdmyE1xVqAA=s1200'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://upload.wikimedia.org/wikipedia/en/4/4a/No._5%2C_1948.jpg'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKdNVp0wuizOKraq3OV616Sdgd3ugns8g7YvU1BsZ04js-2-2'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT82N1uvtAQjHGXUad7gegBaKX97sjRQdRX8ys69p_s7Or8J62yQbCmsHzdrZbtrRsq'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbUGI9qTOFcs3TI-S8MJTPCtpdWSA27vAMsItrlG_9mvbpblw'/>
                </S.DrawingContainer>
            
                <S.DrawingContainer>
                    <S.DrawingImg src='https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg'/>
                </S.DrawingContainer>

                <S.DrawingContainer>
                    <S.DrawingImg src='https://ca-times.brightspotcdn.com/dims4/default/512c50f/2147483647/strip/true/crop/5321x3580+0+0/resize/1200x807!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff3%2F5f%2Fbf2914a2448d8ddda43890f33d54%2F2018-met-museum-costume-institute-benefit-gala-19540.jpg'/>
                </S.DrawingContainer>
            </S.DrawingsBox>
        </S.EnjoyDrawingMainLayout>
    );
};

export default EnjoyDrawingMain;