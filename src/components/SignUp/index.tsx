import React from 'react';
import * as S from "./style"
import AuthImg from "../../assets/AuthImg.svg"
import AuthInputLabel from '../common/Auth/AuthInputLabel';
import AuthInput from '../common/Auth/AuthInput';
import GoogleLogo from "../../assets/GoogleLogo.svg"

const SignUp = () => {
    const SLOGAN = ["We are","Invite only right now."]
    const INTRO = ["저희 하이픈 서비스는 사용자에게 최고의 심리 케어를 제공합니다.","자신의 심리를 그림을 통해 체크하고 관리하세요."]

    return (
        <S.SignUpLayout>
            <S.ContentBox>
                <S.AuthBackImg src={AuthImg}/>
                <S.BlurBox>
                    <S.TitleBlurBox to='/'>HYPHEN</S.TitleBlurBox>
                    <S.DevideLine/>
                    <S.Slogan1Paragraph>{SLOGAN[0]}</S.Slogan1Paragraph>
                    <S.Slogan2Paragraph>{SLOGAN[1]}</S.Slogan2Paragraph>
                    <S.IntroParagraph>{INTRO[0]}</S.IntroParagraph>
                    <S.IntroParagraph>{INTRO[1]}</S.IntroParagraph>
                    <S.AskAccountParagraph>Already have an account?</S.AskAccountParagraph>
                    <S.GoToSignIn to='/signin'>Sign in</S.GoToSignIn>
                </S.BlurBox>

                <S.WhiteBox>
                    <S.SignUpTitleParagraph>Sign up</S.SignUpTitleParagraph>
                    
                    <AuthInputLabel content='id'/>
                    <AuthInput placeholder='Enter your id'/>

                    <AuthInputLabel content='name'/>
                    <AuthInput placeholder='Enter your name'/>

                    <AuthInputLabel content='email'/>
                    <AuthInput placeholder='Enter your email'/>

                    <AuthInputLabel content='password'/>
                    <AuthInput placeholder='Enter your password'/>

                    <S.CheckPasswordShowLabel>
                        <S.CheckPasswordShow type='checkbox' id='CheckBox'/>
                        Show password
                    </S.CheckPasswordShowLabel>

                    <S.SignUpBtn>Sign up</S.SignUpBtn>

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
        </S.SignUpLayout>
    );
};

export default SignUp;