import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { cleanPostData, getAllLikedPosts } from "../../utils/utils";
import styled from "styled-components";

const NoPost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikedFeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LikedPosts = () => {
  const [likedPosts, setLikedPosts] = useState({});

  useEffect(() => {
    let STRINGIFIED_likedPosts = getAllLikedPosts();
    let cleanLikedPosts = cleanPostData(STRINGIFIED_likedPosts);
    setLikedPosts({ ...cleanLikedPosts });
  }, []);

  return (
    <div>
      <Header title="Liked Posts" />
      {Object.keys(likedPosts).length > 0 ? (
        <LikedFeedContainer>
          {Object.values(likedPosts).map((post) => (
            <Post
              key={post["id"]}
              data={post}
              likedPost={likedPosts[post.id] ? true : false}
            />
          ))}
        </LikedFeedContainer>
      ) : (
        <NoPost>No liked posts</NoPost>
      )}
    </div>
  );
};

export default LikedPosts;
