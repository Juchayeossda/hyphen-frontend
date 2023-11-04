import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from "./style"
import ProfileIcon  from "../../../assets/ProfileIcon.svg"
import { Instance } from '../../../config/Axios';
import { PostType } from '../type';


const Detail = () => {
    const {id} = useParams()

    const [postData,setPostData] = useState<PostType>()
    const [commentsData,setCommentsData] = useState()

    const [isLike,setIsLike] = useState<boolean>(false)
    const NUMLIST = [...Array(11).map((v,i)=>i+1)]
    const [isOpenReply, setIsOpenReply] = useState<number[]>([])

    const ToggleHandler = (id:number) => {
        // const k:string = id.toString()
        if (isOpenReply.includes(id)){
            setIsOpenReply(
                isOpenReply.filter(i => i !== id)
            )
        } else {
            setIsOpenReply([
                ...isOpenReply,
                id
            ])
        }

        /* setIsOpenReply(prev=>({
            ...prev,
            [id] : !prev[id]
        })) */
    }

    useEffect(()=>{
        Instance.get(`/api/hellog/posts/${id}`)
        .then((res)=>{
            setPostData(res.data.data)
        })
        .catch((err)=>{
            console.error(err)
        })

        Instance.get('/api/hellog/posts/:post_id/comments')
        .then((res)=>{
            setPostData(res.data.data)
        })
        .catch((err)=>{
            console.error(err)
        })

        Instance.patch('/api/hellog/posts/:post_id/like',{},{
            headers: {
                'Content-Type' : 'json',
                'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

    },[])

    return (
        <S.DetailLayout>
            <S.Title>{postData?.post.title}</S.Title>

            <S.PostInfo>
                <S.InfoBox>
                    <S.WriterText>Jahyun</S.WriterText>
                    <S.PostDot/>
                    <S.PostTimeText>{postData?.post.updated_at}</S.PostTimeText>
                </S.InfoBox>

                <S.LikeBox>
                    <S.LikeCountBox>
                        <S.LikeCountSvg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M5.99984 11.4542L5.154 10.6842C2.14984 7.96 0.166504 6.16333 0.166504 3.95833C0.166504 2.16167 1.57817 0.75 3.37484 0.75C4.38984 0.75 5.364 1.2225 5.99984 1.96917C6.63567 1.2225 7.60984 0.75 8.62484 0.75C10.4215 0.75 11.8332 2.16167 11.8332 3.95833C11.8332 6.16333 9.84984 7.96 6.84567 10.69L5.99984 11.4542Z" fill="#FF679E"/>
                        </S.LikeCountSvg>
                        <S.LikeCountText>7</S.LikeCountText>
                    </S.LikeCountBox>

                    <S.IsLikeBox>
                        <S.IsLikeSvg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M8.99959 15.7917L7.79126 14.6917C3.49959 10.8 0.66626 8.23333 0.66626 5.08333C0.66626 2.51667 2.68293 0.5 5.24959 0.5C6.69959 0.5 8.09126 1.175 8.99959 2.24167C9.90793 1.175 11.2996 0.5 12.7496 0.5C15.3163 0.5 17.3329 2.51667 17.3329 5.08333C17.3329 8.23333 14.4996 10.8 10.2079 14.7L8.99959 15.7917Z" fill={isLike ? "#FF679E" : "#878E95"}/>
                        </S.IsLikeSvg>
                    </S.IsLikeBox>
                </S.LikeBox>
            </S.PostInfo>

            {postData?.post.content}

            <S.WriterProfileLine/>

            <S.WriterBox>
                <S.WriterProfileImg src={ProfileIcon}/>
                <S.WriterInfoBox>
                    <S.WriterName>Jahyun</S.WriterName>
                    <S.WriterIntro>노윤서 팬입니다.</S.WriterIntro>
                </S.WriterInfoBox>
            </S.WriterBox>

            <S.WriterProfileLine/>

            <S.commentTopBox>
                <S.CommentCount>댓글 239</S.CommentCount>
                <S.LeaveCommentInput/>
                <S.LeveCommentSubmitBtn>댓글 작성</S.LeveCommentSubmitBtn>
            </S.commentTopBox>

            {
                NUMLIST.map((v,i)=>
                    <S.CommentBox key={i}>
                        <S.CommentInfoBox>
                            <S.CommentWriterImg src={ProfileIcon}/>
                            <S.CommentInfTextoBox>
                                <S.CommentWriter>Jahyun</S.CommentWriter>
                                <S.CommentDay>2023년 8월 27일</S.CommentDay>
                            </S.CommentInfTextoBox>
                        </S.CommentInfoBox>

                        <S.CommentContent>공감합니다. 노윤서님은 진짜 너무 미인이시네요!</S.CommentContent>

                        <S.ReplyInfoRow onClick={()=>ToggleHandler(i)}>
                            <S.ReplyToggleSvg isOpen={isOpenReply.includes(i)} xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                <path d="M0 10L0 0L6 5L0 10Z" fill="#24D782"/>
                            </S.ReplyToggleSvg>
                            <S.ReplyCount>답글 1</S.ReplyCount>
                        </S.ReplyInfoRow>
                        {
                            isOpenReply.includes(i) &&
                            <S.ReplyBox>
                                <S.CommentInfoBox>
                                    <S.CommentWriterImg src={ProfileIcon}/>
                                    <S.CommentInfTextoBox>
                                        <S.CommentWriter>Jahyun</S.CommentWriter>
                                        <S.CommentDay>2023년 8월 27일</S.CommentDay>
                                    </S.CommentInfTextoBox>
                                </S.CommentInfoBox>

                                <S.CommentContent>ㅋㅇㅈ</S.CommentContent>

                                <S.ReplyDevideLine/>

                                <S.LeaveReplyBtn>답글 작성하기</S.LeaveReplyBtn>

                            </S.ReplyBox>
                        }

                        <S.CommentDevideLine/>
                    </S.CommentBox>                    
                )
            }


        </S.DetailLayout>
    );
};

export default Detail;