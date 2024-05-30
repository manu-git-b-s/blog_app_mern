import { useEffect, useState } from "react";
import Post from "../Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-app-backend-ialj.onrender.com/post")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
};

export default HomePage;
