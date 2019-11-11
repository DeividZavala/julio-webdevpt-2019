import React, { useEffect, useContext } from "react";
import PostCard from "../common/Card";
import { AppContext } from "../../AppContext";
import { getPosts } from "../../services/posts";

const Home = () => {
  const { posts, setPosts } = useContext(AppContext);

  useEffect(() => {
    getPosts().then(res => {
      console.log(res.data);
      const { data: posts } = res.data;
      setPosts(posts);
    });
  }, [setPosts]);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-4">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
