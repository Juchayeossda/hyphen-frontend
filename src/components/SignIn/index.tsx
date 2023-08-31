import React from 'react';
import * as S from "./style"
import AuthImg from "../../assets/AuthImg.svg"
import AuthInputLabel from '../common/Auth/AuthInputLabel';
import AuthInput from '../common/Auth/AuthInput';
import GoogleLogo from "../../assets/GoogleLogo.svg"

const SignIn = () => {
    const SLOGAN = ["Welcome.","Are you our user?"]
    const INTRO = ["저희 하이픈 서비스는 사용자에게 최고의 심리 케어를 제공합니다.","자신의 심리를 그림을 통해 체크하고 관리하세요."]

    return (
        <S.SignInLayout>
            <S.ContentBox>
                <S.AuthBackImg src={AuthImg}/>
                <S.BlurBox>
                    <S.TitleBlurBox>HYPHEN</S.TitleBlurBox>
                    <S.DevideLine/>
                    <S.Slogan1Paragraph>{SLOGAN[0]}</S.Slogan1Paragraph>
                    <S.Slogan2Paragraph>{SLOGAN[1]}</S.Slogan2Paragraph>
                    <S.IntroParagraph>{INTRO[0]}</S.IntroParagraph>
                    <S.IntroParagraph>{INTRO[1]}</S.IntroParagraph>
                    <S.AskAccountParagraph>Don't you have an account?</S.AskAccountParagraph>
                    <S.GoToSignUp to='/signup'>Sign up</S.GoToSignUp>
                </S.BlurBox>

                <S.WhiteBox>
                    <S.SignInTitleParagraph>Sign in</S.SignInTitleParagraph>
                    
                    <AuthInputLabel content='id'/>
                    <AuthInput placeholder='Enter your id'/>
                    
                    <AuthInputLabel content='password'/>
                    <AuthInput placeholder='Enter your password'/>

                    <S.CheckPasswordShowLabel>
                        <S.CheckPasswordShow type='checkbox' id='CheckBox'/>
                        Show password
                    </S.CheckPasswordShowLabel>

                    <S.SignInBtn>Sign in</S.SignInBtn>

                    <S.OrBox>
                        <S.OrHrBox direction="left"/>
                        <S.OrParagraph>or</S.OrParagraph>
                        <S.OrHrBox direction="right"/>
                    </S.OrBox>

                    <S.GoogleBtn>
                        <S.GoogleLogo src={GoogleLogo}/>
                        Continue with google
                    </S.GoogleBtn>

                </S.WhiteBox>

            </S.ContentBox>
        </S.SignInLayout>
    );
};

export default SignIn;