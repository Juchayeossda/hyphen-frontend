import React from 'react';
import * as S from "./style"
import SearchIcon from "../../../assets/SearchIcon.svg"
import ProfileIcon from "../../../assets/ProfileIcon.svg"

const Header = (
    page:any
) => {

    return (
        <S.HeaderLayout>
            <S.Logo to='/'>Hyphen</S.Logo>
            <S.SearchBox>
                <S.SearchIcon src={SearchIcon} />
                <S.SearchInput placeholder="Search.."/>
            </S.SearchBox>
            <S.TextRow>
                <S.TextRedirect to='/' isNow={false}>홈</S.TextRedirect>
                <S.TextRedirect to='/psytest' isNow={false}>심리검사</S.TextRedirect>
                <S.TextRedirect to='/enjoydrawing' isNow={page === 3 ? true : false}>그림감상</S.TextRedirect>
                <S.TextRedirect to='/hellog' isNow={page === 4 ? true : false}>기분공유</S.TextRedirect>
            </S.TextRow>
            <S.UserRow>
                {
                    page === 4 &&
                    <S.PostLink to='/hellog/write'>새 글 작성</S.PostLink>
                }
                <S.ProfileIcon src={ProfileIcon}/>
            </S.UserRow>
        </S.HeaderLayout>
    );
};

export default Header;