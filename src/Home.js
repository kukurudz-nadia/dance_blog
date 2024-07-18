import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "New dance tango!",
      body: "This is a description about tango",
      author: "selena",
      id: 1,
    },
    {
      title: "Vacancy for a dance teacher!",
      body: "This is a description about vacancy for a dance teacher",
      author: "bill",
      id: 2,
    },
    {
      title: "Mia won 'The last dance competition' in New York",
      body: "This is a description about winner",
      author: "selena",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <BlogList
        blogs={blogs}
        title={"All blogs!"}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
