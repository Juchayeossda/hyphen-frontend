import * as S from "./style"
import SearchIcon from "../../../assets/SearchIcon.svg"
import ProfileIcon from "../../../assets/ProfileIcon.svg"
import TrandIcon from "../../../assets/TrandIcon.svg"
import LatelyIcon from "../../../assets/LatelyIcon.svg"
import LikeIcon from "../../../assets/LikeIcon.svg"
import { useEffect, useState } from "react"
import { Instance } from "../../../config/Axios"
import { PostListType } from "./type"
import userEvent from "@testing-library/user-event"

const Main = () => {
    const [whatSort, setWhatSort] = useState({
        trand:true,
        lately:false
    })
    // const NUMLIST = [...Array(11).map((v,i)=>i+1)]
    const [postList, setPostList] = useState<PostListType[]>([])

    useEffect(()=>{
        Instance.get('/api/hellog/posts')
        .then((res)=>{
            setPostList(res.data.Data.posts)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    return (
        <S.MainLayout>
            <S.ContentBox>
                <S.ChooseSortBtnBox>
                    <S.ChooseSortBtn isChecked={whatSort.trand}>
                        <S.ChooseSortIcon src={TrandIcon}/>
                        트렌딩
                    </S.ChooseSortBtn>
                    <S.ChooseSortBtn isChecked={whatSort.lately}>
                        <S.ChooseSortIcon src={LatelyIcon}/>
                        최신
                    </S.ChooseSortBtn>
                </S.ChooseSortBtnBox>

                <S.PostListBox>

                    {
                        postList.map((v,i)=>(
                            <S.PostBox to={`/hellog/detail/${v.id}`}>
                                <S.PostPreImg src={v.previewImage}/>

                                <S.PostTextBox>

                                    <S.PostTitle>{v.title}</S.PostTitle>
                                    <S.PostPreContent>{v.shortDescription}</S.PostPreContent>
                                    
                                    <S.PostInfoUpperLineRow>
                                        <S.PostInfoUpperLineBox>{v.created_at.toString()}</S.PostInfoUpperLineBox>
                                        <S.PostInfoUpperLineDot xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1" fill="none">
                                            <circle cx="0.5" cy="0.5" r="0.5" fill="#999CA8"/>
                                        </S.PostInfoUpperLineDot>
                                        <S.PostInfoUpperLineBox>{Math.round(Math.random()*10)}개의 댓글</S.PostInfoUpperLineBox>
                                    </S.PostInfoUpperLineRow>

                                    <S.PostDevideLine/>

                                    <S.PostLowerInfoRow>
                                        <S.PostProfileBox>
                                            <S.PostProfileImg src={ProfileIcon}/>
                                            <S.ProfileText>{v.user.name}</S.ProfileText>
                                        </S.PostProfileBox>

                                        <S.LinkBox>
                                            <S.LinkImg src={LikeIcon}/>
                                            <S.LinkCountText>{v.likes}</S.LinkCountText>
                                        </S.LinkBox>

                                    </S.PostLowerInfoRow>

                                </S.PostTextBox>

                            </S.PostBox>

                        ))
                    }


                    <S.PostBox to='/hellog/detail/10'>
                    
                        <S.PostTextBox>
                            <S.PostTitle>노윤서 개이쁨</S.PostTitle>
                            <S.PostPreContent>진짜 노윤서 너무 예쁜거 아님??? 진짜 말이 안된다. 어떻게 이렇게 예쁠 수 가있지? 진짜 너어어무 예쁘다.</S.PostPreContent>
                            <S.PostInfoUpperLineRow>
                                    <S.PostInfoUpperLineBox>1초 전</S.PostInfoUpperLineBox>
                                    <S.PostInfoUpperLineDot xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1" fill="none">
                                        <circle cx="0.5" cy="0.5" r="0.5" fill="#999CA8"/>
                                    </S.PostInfoUpperLineDot>
                                    <S.PostInfoUpperLineBox>0개의 댓글</S.PostInfoUpperLineBox>
                            </S.PostInfoUpperLineRow>

                            <S.PostDevideLine/>

                                <S.PostLowerInfoRow>
                                    <S.PostProfileBox>
                                        <S.PostProfileImg src={ProfileIcon}/>
                                        <S.ProfileText>Jahyun</S.ProfileText>
                                    </S.PostProfileBox>

                                    <S.LinkBox>
                                        <S.LinkImg src={LikeIcon}/>
                                        <S.LinkCountText>7</S.LinkCountText>
                                    </S.LinkBox>

                            </S.PostLowerInfoRow>
                        </S.PostTextBox>

                    </S.PostBox>

                </S.PostListBox>
            </S.ContentBox>
        </S.MainLayout>
    );
};

export default Main;