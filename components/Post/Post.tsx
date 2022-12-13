import styled from "styled-components"
import { PostType } from "./Post.type"
import FullHeart from './images/full-heart.png';
import EmptyHeart from './images/empty-heart.png';
import Image from "next/image";
import { useEffect, useState } from "react";
import { modifyPostFromLiked } from "../../utils/utils";

const PostBox = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 50px;

    @media screen and (min-width: 769px) {
        width: 33%;
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px) { 
        width: 50%;
    }
    
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`

const PostImage = styled.img`
    height: 250px;
    width: 250px;
    object-fit: cover;
`

const Meta = styled.div`
    background: linear-gradient(360deg, rgba(0,0,0, 70%) 30%, transparent);
    color: rgba(256, 256, 256, 0.8);
    position: absolute;
    bottom: 0;
    width: 250px;
    text-align: left;
    padding: 10px 10px 8px 10px;
`

const MetaDescription = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    img {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        margin-right: 6px;
    }
`

const Favourite = styled.div`
    position: absolute;
    background: linear-gradient(180deg, rgba(255 ,255 ,255 , 30%) 30%, transparent);
    top: 0px;
    width: 250px;
    display: flex;
    justify-content: flex-end;
    img {
        height: 20px;
        width: 20px;
        margin: 8px;
        cursor: pointer;
    }
`

export const Post = (props: PostType) => {
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        if (props.likedPost) {
            setIsFavourite(true)
        }
    }, [])

    const markImageAsFavourite = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, post: PostType) => {
        event.stopPropagation();
        // save to localStorage to persist
        modifyPostFromLiked({
            postId: post.data.id,
            type: 'add',
            url: post.data.urls.thumb,
            username: post.data.user.username,
            userImage: post.data.user.profile_image.small
        });
        setIsFavourite(true);
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, post: PostType) => {
        event.stopPropagation();
        // remove from localStorage
        modifyPostFromLiked({
            postId: post.data.id,
            type: 'delete',
            url: post.data.urls.thumb,
            username: post.data.user.username,
            userImage: post.data.user.profile_image.small
        });
        setIsFavourite(false);
    }

    return (
        <PostBox> 
            <PostImage src={props.data.urls.thumb} alt={props.data.alt_description || 'no alt'}/>
            <Favourite>
                {
                    isFavourite ?
                    <Image src={FullHeart} alt="mark as normal" onClick={(event) => removeFromFavourite(event, props)}/> :
                    <Image src={EmptyHeart} alt="mark as favourite" onClick={(event) => markImageAsFavourite(event, props)}/>
                }
            </Favourite>
            <Meta>
                <MetaDescription>
                    <img src={props.data.user.profile_image.small} />
                    <span>{props.data.user.username}</span>
                </MetaDescription>
            </Meta>
        </PostBox>
    )
}