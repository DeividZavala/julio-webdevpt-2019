import React, { useEffect, useContext } from "react";
import PostCard from "../common/Card";
import { AppContext } from "../../AppContext";
import { getPosts, deletePost } from "../../services/posts";
import { useHistory } from "react-router-dom";
import UIkit from "uikit";

const Home = () => {
  const { posts, setPosts, user } = useContext(AppContext);
  const { push } = useHistory();

  useEffect(() => {
    if (!user._id) {
      push("/login");
      UIkit.notification({
        message: "No se puede perro",
        status: "danger",
        pos: "top-right"
      });
    }
    getPosts().then(res => {
      console.log(res.data);
      const { data: posts } = res.data;
      setPosts(posts);
    });
  }, [user._id, setPosts, push]);

  const handleDeletePost = id => {
    deletePost(id).then(res => {
      const { post } = res.data;
      const filteredPosts = posts.filter(p => p._id !== post._id);
      setPosts(filteredPosts);
    });
  };

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
          {posts.map((post, index) => (
            <PostCard
              deletePost={handleDeletePost}
              currentUser={user._id}
              key={index}
              {...post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
