import styled from "styled-components";

export const MainLayout = styled.div`

`

export const HeaderBox = styled.div`
    padding: 0 7%;

    width: 100%;
    height: 4.375rem;   

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

export const PostBtn = styled.button`
    width: 5.75rem;
    height: 1.9375rem;

    border-radius: 0.1875rem;
    border: 1px solid #24D782;
    background-color: transparent;

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

export const ContentBox = styled.div`
    margin: 2.1rem 7% 0 7%;
`

export const ChooseSortBtnBox = styled.div`
    margin-bottom: 2rem;

    display: flex;
`

export const ChooseSortBtn = styled.button<{isChecked:boolean}>`
    padding-bottom: 0.38rem;
    
    width: 8rem;
    border: none;
    ${(props)=>props.isChecked ?  "border-bottom: 0.125rem solid #000;" : ""}
    background-color: transparent;

    color: ${(props)=>props.isChecked?"#000":"#A0A3AE"} ;
    font-family: Pretendard;
    font-size: 1.375rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChooseSortIcon = styled.img`
    margin-right: 0.5rem;

    width: 1.375rem;
    height: 1.375rem;
`

export const PostListBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`


export const PostBox = styled.div`
    margin-bottom: 2vw;
    
    width: 18.5rem;
    height: 21.625rem;
    
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    `
export const PostUpperLineBox = styled.div`
    
`

export const PostPreImg = styled.img`
    width: 100%;
    height: 53%;

    object-fit: cover;
`

export const PostTitle = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;
`

export const PostPreContent = styled.div`
    color: #666975;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 500;
`

export const PostInfoUpperLineRow = styled.div`
    display: flex;
    align-items: center;
`

export const PostInfoUpperLineBox = styled.div`
    color: #999CA8;
    font-family: Pretendard;
    font-size: 0.6875rem;
    font-weight: 500;
`

export const PostInfoUpperLineDot = styled.svg`
    margin: 0 0.3rem;

    width: 0.0625rem;
    height: 0.0625rem;

    background-color: #999CA8;
`

export const PostLowerInfoRow = styled.div`
    margin: 0 4%;

    display: flex;
    justify-content: space-between;
`

export const PostDevideLine = styled.hr`
    border: 0.0625rem #E6EAEE solid;
`

export const PostProfileBox = styled.div`
    display: flex;
    align-items: center;

`

export const PostProfileImg = styled.img`
    margin-right: 0.4rem;

    width: 1.25rem;
    height: 1.25rem;
`

export const PostText = styled.div`
    font-family: Pretendard;
    font-size: 0.6875rem;
    font-weight: 700;
`

export const LinkBox = styled.div`
    display: flex;
    align-items: center;
`

export const LinkImg = styled.img`
    margin-right: 0.4rem;
`

export const LinkCountText = styled.div`
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 500;
`