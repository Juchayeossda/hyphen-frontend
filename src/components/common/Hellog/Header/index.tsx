import React from 'react';
import * as S from "./style"
import SearchIcon from "../../../../assets/SearchIcon.svg"
import ProfileIcon from "../../../../assets/ProfileIcon.svg"

const Header = () => {
    return (
        <S.HeaderLayout>
            <S.Logo>Hellog</S.Logo>
            <S.SearchBox>
                <S.SearchIcon src={SearchIcon} />
                <S.SearchInput placeholder="Search.."/>
            </S.SearchBox>
            <S.UserRow>
                <S.PostLink to='/hellog/write'>새 글 작성</S.PostLink>
                <S.ProfileIcon src={ProfileIcon}/>
            </S.UserRow>
        </S.HeaderLayout>
    );
};

export default Header;