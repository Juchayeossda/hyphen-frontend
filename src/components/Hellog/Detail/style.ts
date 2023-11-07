import { startTransition } from "react";
import styled from "styled-components";

export const DetailLayout = styled.div`
    margin: auto;

    width: 48.125rem;
`

export const Title = styled.h1`
    margin-top: 6.25rem;

    font-family: Pretendard;
    font-size: 3.25rem;
    font-weight: 700;
`

export const PostInfo = styled.div`
    margin-bottom: 2vw;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InfoBox = styled.div`
    display: flex;
    align-items: center;
`

export const WriterText = styled.div`
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 700;
`

export const PostDot = styled.div`
    margin: 0 0.44rem;

    width: 0.125rem;
    height: 0.125rem;

    border-radius: 1.25rem;
    background-color: #595C6A;
`

export const PostTimeText = styled.div`
    color: #595C6A;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 400;
`

export const LikeBox = styled.div`
    display: flex;
`

export const LikeCountBox = styled.div`
    display: flex;
    align-items: center;
`

export const LikeCountSvg = styled.svg``

export const LikeCountText = styled.div`
    margin: 0 1.06rem 0 0.39rem;

    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 500;
`

export const IsLikeBox = styled.div`
    width: 2.25rem;
    height: 2.25rem;

    border-radius: 1.25rem;
    border: 1px solid #E2E5E8;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const IsLikeSvg = styled.svg``

//---------------------------------------


//----------------------------------------

export const WriterProfileLine = styled.div`
    margin: 1.62rem 0;

    width: 100%;
    height: 0.0625rem;
    background: #DFE1E3;
`

export const WriterBox = styled.div`
    display: flex;
    align-items: center;
`

export const WriterProfileImg = styled.img`
    margin-right: 0.81rem;

    width: 4.375rem;
    height: 4.375rem;
`

export const WriterInfoBox = styled.div``

export const WriterName = styled.div`
    margin-bottom: 0.44rem;

    font-family: Pretendard;
    font-size: 1.125rem;
    font-weight: 700;
`

export const WriterIntro = styled.div`
    color: #595C6A;
    font-family: Pretendard;
    font-size: 0.75rem;
`
//----------------

export const commentTopBox = styled.div`
    margin: 5.03rem 0 3.56rem 0;
`

export const CommentCount = styled.div`
    margin-bottom: 1.25rem;

    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;
`

export const LeaveCommentInput = styled.textarea`
    width: 48.0625rem;
    height: 6.6875rem;

    border-radius: 0.3125rem;
    border: 1px solid #EBEDEF;

    resize: none;
`

export const LeveCommentSubmitBtn = styled.div`
    margin-top: 1.56rem;

    width: 5.75rem;
    height: 1.9375rem;  

    border-radius: 0.1875rem;
    background: #24D782;
    
    float: right;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFF;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;
`

export const CommentBox = styled.div``

export const CommentInfoBox = styled.div`
    display: flex;
    align-items: center;
`

export const CommentInfTextoBox = styled.div``

export const CommentWriterImg = styled.img`
    margin-right: 0.63rem;

    width: 3.125rem;
    height: 3.125rem;
`

export const CommentWriter = styled.div`
    margin-bottom: 0.31rem;

    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 700;
`

export const CommentDay = styled.div`
    color: #595C6A;
    font-family: Pretendard;
    font-size: 0.625rem;
`

export const CommentContent = styled.div`
    margin: 1.56rem 0 1.63rem 0;

    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
`

export const ReplyInfoRow = styled.div`
    display: flex;
    align-items: center;
`

export const ReplyToggleSvg = styled.svg<{isOpen:boolean}>`
    margin-right: 0.63rem;

    rotate: ${(props)=>props.isOpen ? "90deg" : "0deg"};
`
export const ReplyCount = styled.div`
    color: #24D782;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;
`

export const CommentDevideLine = styled.div`
    margin: 1.87rem 0;

    width: 100%;
    height: 0.0625rem;

    background: #EBEDEF;
`

export const ReplyBox = styled.div`
    padding: 1.94rem 1.56rem 1.56rem 1.56rem;

    border-radius: 0.3125rem;
    border: 1px solid #EBEDEF;
    background: #F9F9F9;
`

export const ReplyDevideLine = styled.div`
    margin: 1.63rem 0 1.88rem 0;

    width: 100%;
    height: 0.0625rem;
    
    background: #EAECEF;
`

export const LeaveReplyBtn = styled.button`
    width: 100%;
    height: 2.0625rem;

    border-radius: 0.3125rem;
    border: 1px solid #24D782;
    background: #FFF;

    color: #24D782;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 600;
`