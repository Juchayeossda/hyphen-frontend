import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderLayout = styled.div`
    padding: 0 7%;

    width: 100%;
    height: 4.375rem;   

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserRow = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    color: #117746;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 600;
`

export const SearchBox = styled.div`
    margin-left: 27%;
    margin-right: 23%;

    width: 26.9rem;
    height: 2.5rem;

    border-radius: 1.5rem;
    background: #EFF0F5;

    display: flex;
    align-items: center;
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
        font-size: 1rem;
        font-weight: 500;
    }

    border: none;
    background-color: transparent;

`

export const PostLink = styled(Link)`
    margin-right: 1.4vw;

    width: 5.75rem;
    height: 1.9375rem;

    border-radius: 0.1875rem;
    border: 1px solid #24D782;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #24D782;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;
`

export const ProfileIcon = styled.img`
    margin-left: 1%;

    width: 2.5rem;
    height: 2.5rem;
`
