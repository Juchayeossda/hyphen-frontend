import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const SignUpLayout = styled.div`
    //width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #85F0BD;
`

export const ContentBox = styled.div`
    position: relative;

    width: 1091px;
    height: 670px;

    border-radius: 40px;
    background: #FFF;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
`

export const AuthBackImg = styled.img`
    border-radius: 40px;
    box-shadow: 5px 0px 20px 0px rgba(0, 0, 0, 0.15);
`

export const BlurBox = styled.div`
    position: absolute;
    top: 120px;
    left: 61px;

    width: 404px;
    height: 475px;

    padding: 22px;

    border-radius: 10px;
    background: rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(17.5px);
`

export const TitleBlurBox = styled.div`
width: 80px;
height: 28px;
background: rgba(185, 179, 179, 0.31);

display: flex;
justify-content: center;
align-items: center;

color: #FFF;
font-size: 16px;
font-weight: 600;
`

export const DevideLine = styled.hr`
    margin: 40px 0;

    width: 32px;
    //height: 1px;

    background-color: #fff;
`

export const Slogan1Paragraph = styled.p`
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
`

export const Slogan2Paragraph = styled.p`
    color: #FFF;
    font-size: 36px;
    font-weight: 300;
`

export const IntroParagraph = styled.p`
    margin-top: 5px;

    color: #FFF;
    font-size: 11px;
    font-weight: 300;
`

export const AskAccountParagraph = styled.p`
    margin-top: 166px;

    color: #FFF;
    font-size: 16px;
    font-weight: 400;
`

export const GoToSignIn = styled(Link)`
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
`

export const WhiteBox = styled.div`
    padding: 70px 127px;
    width: 564px;
    height: 670px;

    position: absolute;
    top: 0;
    left: 527px;
`

export const SignUpTitleParagraph = styled.p`
    margin-bottom: 19px;

    color: #070000;
    font-size: 44px;
    font-weight: 700;
`

export const CheckPasswordShow = styled.input`
    margin-right: 5px;
`

export const CheckPasswordShowLabel = styled.label`
    margin-top: 1px;

    display: flex;
    align-items: center;

    color: #8D8D8D;
    font-size: 12px;
    font-weight: 600;
`

export const SignUpBtn = styled.button`
    margin-top: 23px;

    width: 310px;
    height: 50px;

    border: none;
    border-radius: 5px;
    background: linear-gradient(135deg, #13C082 0%, #2BDE88 100%);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);

    color: #FFF;
    font-size: 16px;
    font-weight: 500;
`

export const OrBox = styled.div`
    margin: 20px 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OrHrBox = styled.div<{direction:string}>`
    ${(props)=>(props.direction=="left" ? "margin-right:15px" : "margin-left:15px")};

    width: 50px;
    height: 1px;
    background-color: #D9D9D9;
`

export const OrParagraph = styled.p`
    color: #8D8D8D;
    font-size: 12px;
    font-weight: 500;
`

export const GoogleBtn = styled.button`
    width: 310px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #C7C7C7;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);

    color: #6B6B6B;
    font-size: 16px;
    font-weight: 600;
`

export const GoogleLogo = styled.img`
    margin-right: 7.4px;

    width: 18.604px;
    height: 19px;
`