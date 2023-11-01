import React, { useEffect, useState } from 'react';
import * as S from "./style"
import AuthImg from "../../assets/AuthImg.svg"
import AuthInputLabel from '../common/Auth/AuthInputLabel';
import AuthInput from '../common/Auth/AuthInput';
import GoogleLogo from "../../assets/GoogleLogo.svg"
import { Instance } from '../../config/Axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 로그인
const SignIn = () => {
    const navigator = useNavigate()
    const SLOGAN = ["Welcome.","Are you our user?"]
    const INTRO = ["저희 하이픈 서비스는 사용자에게 최고의 심리 케어를 제공합니다.","자신의 심리를 그림을 통해 체크하고 관리하세요."]

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [signinData,setSigninData] = useState({
        id: "",
        password: ""
    })

    // const onLoginSuccess = (props:string) => {
    //     const accessToken = props
    //     Instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    // }

    const onSubmit = async() => {
        console.log(signinData)

        Instance.post('/api/auth/signin',signinData)
        .then((res:any)=>{
            console.log(res)
            
            // 왜 const로 선언해놨는데 작동하지?
            const accessTokenExpiredAt:Date = new Date();
            const refreshTokenExpiredAt = new Date()
            
            accessTokenExpiredAt.setDate(accessTokenExpiredAt.getDate() + 7)
            refreshTokenExpiredAt.setDate(refreshTokenExpiredAt.getDate() + 27)

            localStorage.setItem('accessToken',res.data.data.accessToken)
            localStorage.setItem('refreshToken',res.data.data.refreshToken)
            localStorage.setItem('accessTokenExpiredAt',accessTokenExpiredAt.toString())
            localStorage.setItem('refreshTokenExpiredAt',refreshTokenExpiredAt.toString())
            Instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.accessToken}`

            navigator('/')
            
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    return (
        <S.SignInLayout>
            <S.ContentBox>
                <S.AuthBackImg src={AuthImg}/>
                <S.BlurBox>
                    <S.TitleBlurBox to='/'>HYPHEN</S.TitleBlurBox>
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
                    <AuthInput placeholder='Enter your id' value={signinData.id} 
                    onChange={(e:any)=>setSigninData({
                        ...signinData,
                        id:e.target.value
                    })}/>
                    
                    <AuthInputLabel content='password'/>
                    <AuthInput type={isShowPassword ? 'text' : 'password'} placeholder='Enter your password' value={signinData.password} 
                    onChange={(e:any)=>{setSigninData({
                        ...signinData,
                        password:e.target.value
                    })
                    }}/>

                    <S.CheckPasswordShowLabel>
                        <S.CheckPasswordShow type='checkbox' id='CheckBox'
                            onChange={()=>{
                                setIsShowPassword(!isShowPassword)
                            }}
                        />
                        Show password
                    </S.CheckPasswordShowLabel>

                    <S.SignInBtn type='submit' onClick={onSubmit}>Sign in</S.SignInBtn>

                    {/* <S.OrBox>
                        <S.OrHrBox direction="left"/>
                        <S.OrParagraph>or</S.OrParagraph>
                        <S.OrHrBox direction="right"/>
                    </S.OrBox>

                    <S.GoogleBtn>
                        <S.GoogleLogo src={GoogleLogo}/>
                        Continue with google
                    </S.GoogleBtn> */}

                </S.WhiteBox>

            </S.ContentBox>
        </S.SignInLayout>
    );
};

export default SignIn;