import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from "./style"
import DownloadIcon from "../../../assets/DownloadIcon.svg"
import ShareIcon from "../../../assets/ShareIcon.svg"
import UploadIcon from "../../../assets/UploadIcon.svg"
import LikeIcon from "../../../assets/LikeIcon.svg"
import EnjoyDrawingHeader from '../../common/Header';

const EnjoyDrawingDetail = () => {
    const {id} = useParams()

    const DUMMYCONTENT = ['밤하늘에 별이 떠 있는 모습으로, 이 작품에 쓰인 특유의 화법은 이후 지금도 다른 화가들에 의하여 많이 사용된다. 반 고흐의 아를 체류시기 밤의 풍경은 <론 강 위로 별이 빛나는 밤>에서도 알 수 있듯이 별에 대한 탐구가 두드러진다. 그가 밤의 풍경을 묘사했을 때 자주 사용했던 코발트 블루가 이 작품에서도 주된 색조를 차지한다.별과 그 주변부의 묘사에 있어서도 반 고흐는 아를 체류 시기 그렸던 <론 강의 별이 빛나는 밤>에서와 마찬가지로 화폭에 직접 흰색 튜브 물감을 짜서 하이라이트 효과를 주었다. 또한 그는 칠하는 과정에 있어서도 단순히 붓을 칠하는 것을 넘어서 붓의 자루 혹은 갈대로 표면을 긁어냄으로서 독특한 화풍을 연출했다. 반 고흐가 이렇듯 일반적인 채색 방법을 사용하지 않은 것은 색채에 대한 그의 생각이 반영된 것에 다름 아니었다. 파리 체류 시절 인상주의 화풍을 접한 고흐는 인상주의 그림들을 통해서 색면이 화가의 감정을 표현할 수 있는 주된 수단이 될 수 있다는 것을 발견했다.']

    return (
        <S.EnjoyDrawingDetailLayout>
            
            <S.ExplainContentBox>
                <S.ExplainImg src='https://i.namu.wiki/i/9qwvY95bmkj5R6XA43VifN7uu2dPTSfs6N2HboeD3g1zS0ONoDtMuaheUzl02Sh2bytDdLA8DoOqbbrXWtKxTQ.webp'/>
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
                    <S.InfoTitle>별이 빛나는 밤</S.InfoTitle>
                    <S.InfoContent>{DUMMYCONTENT}</S.InfoContent>
                </S.InfoBox>
            </S.ExplainContentBox>

            <S.ShowMoreDrawing>그림 더보기</S.ShowMoreDrawing>

            <S.OtherDrawingContainer>
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
            </S.OtherDrawingContainer>

        </S.EnjoyDrawingDetailLayout>
    );
};

export default EnjoyDrawingDetail;