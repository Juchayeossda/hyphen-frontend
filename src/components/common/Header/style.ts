import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderLayout = styled.div`
    padding: 0 7%;

    width: 100%;
    height: 3vw;   

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
`

export const UserRow = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled(Link)`
    color: #117746;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
`

export const SearchBox = styled.div`
    margin-left: 20vw;

    width: 22.4vw;
    height: 2vw;

    border-radius: 1.5rem;
    background: #EFF0F5;

    display: flex;
    align-items: center;

    position: absolute;
    left: 18vw;
`

export const SearchIcon = styled.img`
    margin: 0 1rem;

    width: 0.8125rem;
    height: 0.75rem;
`

export const SearchInput = styled.input`
    ::placeholder{
        color: #BCBCC1;
        font-family: Inter;
        font-size: 0.8vw;
        font-weight: 500;
    }

    border: none;
    background-color: transparent;

`

export const PostLink = styled(Link)`
    margin-right: 2vw;

    width: 4.7vw;
    height: 1.6vw;

    border-radius: 0.1875rem;
    border: 1px solid #24D782;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #24D782;
    font-family: Pretendard;
    font-size: 0.7vw;
    font-weight: 600;
`

export const TextRedirect = styled(Link)<{isNow:boolean}>`
    margin-left: 1.7vw;

    color: ${(props)=>(props.isNow ? "#117746" : "#949494")};
    font-family: Pretendard;
    font-size: 0.8vw;
    font-weight: 400;
    text-decoration: none;
`

export const TextRow = styled.div`
    position: absolute;
    right: 23vw;
`

export const ProfileIcon = styled.img`
    margin-left: 1%;

    width: 2.5rem;
    height: 2.5rem;
`

export const LogoutBtn = styled.button`
    width: 5vw;

    color: #949494;
    font-family: Pretendard;
    font-size: 0.8vw;
    font-weight: 400;
    text-decoration: none;
`
