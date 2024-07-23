import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div className="home">
      <h2>Homepage</h2>
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All blogs!"} />}
    </div>
  );
};

export default Home;
