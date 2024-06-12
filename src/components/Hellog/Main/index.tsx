import * as S from "./style"
import SearchIcon from "../../../assets/SearchIcon.svg"
import ProfileIcon from "../../../assets/ProfileIcon.svg"
import TrandActiveIcon from "../../../assets/TrandActiveIcon.svg"
import LatelyDisableIcon from "../../../assets/LatelyDisableIcon.svg"
import TrandDiableIcon from "../../../assets/TrandDisableIcon.svg"
import LatelyActiveIcon from "../../../assets/LatelyActiveIcon.svg"
import LikeIcon from "../../../assets/LikeIcon.svg"
import { useEffect, useState } from "react"
import { Instance } from "../../../config/Axios"
import { PostType } from "../type"
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { isActivePageAtom, searchValueAtom } from '../../../state/headerAtom';
import dummies from "../dummies.json"

const Main = () => {
    const setIsActivePage = useSetRecoilState(isActivePageAtom)
    const [searchValue,setSearchValue] = useRecoilState(searchValueAtom)

    useEffect(()=>{
        setIsActivePage(4)
    },[])

    const [whatSort, setWhatSort] = useState({
        trand:true,
        lately:false
    })
    // const NUMLIST = [...Array(11).map((v,i)=>i+1)]
    const [postList, setPostList] = useState<PostType[]>(dummies.post)
    const [showPostList, setShowPostList] = useState<PostType[]>(dummies.post)

    useEffect(()=>{
        setSearchValue("")

        Instance.get('/api/hellog/posts')
        .then((res)=>{
            setPostList(res.data.data.posts)
            setShowPostList(res.data.data.posts)
        })
        .catch((err)=>{
            console.error(err)
        })
        console.log(showPostList)
    },[])

    useEffect(()=>{
        if(searchValue === ""){
            setShowPostList(postList)
        } else{
            setShowPostList(
                showPostList.filter((d)=>(
                    d.post.title.includes(searchValue) || d.post.short_description.includes(searchValue)
                ))
            )
        }
    },[searchValue])

    useEffect(()=>{
        console.log(showPostList)
    },[showPostList])

    const getAuthorName = ()=>{
        Instance.get('/')
    }

    return (
        <S.MainLayout>
            <S.ContentBox>
                <S.ChooseSortBtnBox>
                    <S.ChooseSortBtn 
                        isChecked={whatSort.trand}
                        onClick={()=>{
                            setWhatSort({
                                trand:true,
                                lately:false
                            })
                        }}
                    >
                        <S.ChooseSortIcon src={whatSort.trand ? TrandActiveIcon : TrandDiableIcon}/>
                        트렌딩
                    </S.ChooseSortBtn>
                    <S.ChooseSortBtn
                        isChecked={whatSort.lately}
                        onClick={()=>{
                            setWhatSort({
                                trand:false,
                                lately:true
                            })
                        }}
                    >
                        <S.ChooseSortIcon src={whatSort.lately ? LatelyActiveIcon : LatelyDisableIcon}/>
                        최신
                    </S.ChooseSortBtn>
                </S.ChooseSortBtnBox>

                <S.PostListBox>
                    {
                        showPostList.map((v:any,i:any)=>(
                            <S.PostBox to={`/hellog/detail/${v.post.id}`}>
                                {
                                    v.post.preview_image &&
                                    <S.PostPreImg src={v.post.preview_image}/>
                                }

                                <S.PostTextBox>

                                    <S.PostTitle>{v.post.title}</S.PostTitle>
                                    <S.PostPreContent>{v.post.short_description}</S.PostPreContent>
                                    
                                    <S.PostInfoUpperLineRow>
                                        <S.PostInfoUpperLineBox>{v.post.created_at.toString()}</S.PostInfoUpperLineBox>
                                        <S.PostInfoUpperLineDot xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1" fill="none">
                                            <circle cx="0.5" cy="0.5" r="0.5" fill="#999CA8"/>
                                        </S.PostInfoUpperLineDot>
                                        <S.PostInfoUpperLineBox>{0}개의 댓글</S.PostInfoUpperLineBox>
                                    </S.PostInfoUpperLineRow>

                                    <S.PostDevideLine/>

                                    <S.PostLowerInfoRow>
                                        <S.PostProfileBox>
                                            <S.PostProfileImg src={ProfileIcon}/>
                                            <S.ProfileText>{
                                                v.author.id
                                            }</S.ProfileText>
                                        </S.PostProfileBox>

                                        <S.LinkBox>
                                            <S.LinkImg src={LikeIcon}/>
                                            <S.LinkCountText>{v.my_likes}</S.LinkCountText>
                                        </S.LinkBox>

                                    </S.PostLowerInfoRow>

                                </S.PostTextBox>

                            </S.PostBox>
                        ))
                    }


                    {/*<S.PostBox to='/hellog/detail/1'>
                        <S.PostTextBox>
                            <S.PostTitle>{showPostList[0].post.title}</S.PostTitle>
                            <S.PostPreContent>{showPostList[0].post.short_description}</S.PostPreContent>
                            <S.PostInfoUpperLineRow>
                                    <S.PostInfoUpperLineBox>{showPostList[0].post.updated_at}</S.PostInfoUpperLineBox>
                                    <S.PostInfoUpperLineDot xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1" fill="none">
                                        <circle cx="0.5" cy="0.5" r="0.5" fill="#999CA8"/>
                                    </S.PostInfoUpperLineDot>
                                    <S.PostInfoUpperLineBox>0개의 댓글</S.PostInfoUpperLineBox>
                            </S.PostInfoUpperLineRow>

                            <S.PostDevideLine/>

                                <S.PostLowerInfoRow>
                                    <S.PostProfileBox>
                                        <S.PostProfileImg src={ProfileIcon}/>
                                        <S.ProfileText>{showPostList[0].author.author_id}</S.ProfileText>
                                    </S.PostProfileBox>

                                    <S.LinkBox>
                                        <S.LinkImg src={LikeIcon}/>
                                        <S.LinkCountText>{showPostList[0].my_likes}</S.LinkCountText>
                                    </S.LinkBox>

                            </S.PostLowerInfoRow>
                        </S.PostTextBox>

                    </S.PostBox>*/}

                </S.PostListBox>
            </S.ContentBox>
        </S.MainLayout>
    );
};

export default Main;