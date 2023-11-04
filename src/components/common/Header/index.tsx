import React from 'react';
import * as S from "./style"
import SearchIcon from "../../../assets/SearchIcon.svg"
import ProfileIcon from "../../../assets/ProfileIcon.svg"
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchValueAtom } from '../../../state/headerAtom';

const Header = ({
    page
}:any) => {
    const navigate = useNavigate()
    const [searchValue,setSearchValue] = useRecoilState(searchValueAtom)

    const logoutHandler = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expiredAt')
        navigate(0)
    }

    return (
        <S.HeaderLayout>
            <S.Logo to='/'>Hyphen</S.Logo>
            {
                (page === 3 || page === 4) &&
                <S.SearchBox>
                    <S.SearchIcon src={SearchIcon} />
                    <S.SearchInput 
                        placeholder="Search.."
                        value={searchValue}
                        onChange={(e)=>{
                            setSearchValue(e.target.value)
                        }}
                    />
                </S.SearchBox>
            }
            <S.TextRow>
                <S.TextRedirect to='/' isNow={page === 1 ? true :   false}>홈</S.TextRedirect>
                <S.TextRedirect to='/psytest' isNow={page === 2 ? true :   false}>심리검사</S.TextRedirect>
                <S.TextRedirect to='/enjoydrawing' isNow={page === 3 ? true :   false}>그림감상</S.TextRedirect>
                <S.TextRedirect to='/hellog' isNow={page === 4 ? true : false}>기분공유</S.TextRedirect>
            </S.TextRow>
            <S.UserRow>
                {
                    page === 4 &&
                    <S.PostLink to='/hellog/write'>새 글 작성</S.PostLink>
                }
                {
                    localStorage.getItem('accessToken') ?
                    <>
                        <S.ProfileIcon src={ProfileIcon}/> 
                        <S.LogoutBtn onClick={logoutHandler}>로그아웃</S.LogoutBtn>
                    </>
                    :
                    <S.TextRedirect to='/signin' isNow={false}>로그인</S.TextRedirect>
                }
            </S.UserRow>
        </S.HeaderLayout>
    );
};

export default Header;