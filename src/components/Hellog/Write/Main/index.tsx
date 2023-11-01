import React, { useEffect, useState } from 'react';
import * as S from "./style"
import ImgIcon from "../../../../assets/ImgIcon.svg"
import LinkIcon from "../../../../assets/LinkIcon.svg"
import QuotationIcon from "../../../../assets/QuotationIcon.svg"
import SprikeIcon from "../../../../assets/SprikeIcon.svg"
import { useNavigate } from 'react-router-dom';

const WriteMain = () => {
    const navigator = useNavigate()

    const [title,setTitle] = useState<string>()
    const [content,setContent] = useState<string>()
    
    useEffect(()=>{
        if(!localStorage.getItem('accessToken')){
            navigator('/signin')
        }
    },[])

    return (
        <S.WriteLayout>
            <S.ContentBox>
                <S.ContentHeaderBox>
                    <S.GoBackBox>
                        <S.ArrowSvg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M5 9L1 5L5 1" stroke="black" stroke-linecap="round"/>
                            <path d="M2 5L12 5" stroke="black" stroke-linecap="round"/>
                        </S.ArrowSvg>
                        <S.GoBackText>나가기</S.GoBackText>
                    </S.GoBackBox>
                    <S.SubmitLink to="/hellog/write/submit"
                        state={{
                            title:title,
                            content:content
                        }}
                    >작성 완료</S.SubmitLink>
                </S.ContentHeaderBox>

                <S.WriteBox>
                    <S.TitleInput 
                        type='text' 
                        placeholder='제목을 입력하세요'
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                    />
                    <S.TitleDevideLine/>

                    <S.BtnRow>
                        <S.HeadingBtnRow>
                            <S.HeadingBtn>
                                <S.HText>H</S.HText>
                                <S.NumText>1</S.NumText>
                            </S.HeadingBtn>

                            <S.HeadingBtn>
                                <S.HText>H</S.HText>
                                <S.NumText>2</S.NumText>
                            </S.HeadingBtn>

                            <S.HeadingBtn>
                                <S.HText>H</S.HText>
                                <S.NumText>3</S.NumText>
                            </S.HeadingBtn>

                            <S.HeadingBtn>
                                <S.HText>H</S.HText>
                                <S.NumText>4</S.NumText>
                            </S.HeadingBtn>
                        </S.HeadingBtnRow>

                        <S.DevideBtnLine/>

                        <S.SubBtnRow>
                            <S.BoldBtn>B</S.BoldBtn>
                            <S.ItalicBtn>I</S.ItalicBtn>
                            <S.SprikeImgBtn src={SprikeIcon}/>
                        </S.SubBtnRow>

                        <S.DevideBtnLine/>

                        <S.SubBtnRow>
                            <S.QuotationImgBtn src={QuotationIcon}/>
                            <S.LinkImgBtn src={LinkIcon}/>
                            <S.ImgImgBtn src={ImgIcon}/>
                        </S.SubBtnRow>

                    </S.BtnRow>

                    <S.MainInput 
                        placeholder='당신의 기분을 공유해보세요.' 
                        value={content}
                        onChange={(e)=>{
                            setContent(e.target.value)
                        }}
                    />

                </S.WriteBox>

            </S.ContentBox>
        </S.WriteLayout>
    );
};

export default WriteMain;