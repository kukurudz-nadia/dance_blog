import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New dance tango!', body: 'This is a description about tango', author: 'selena', id: 1 },
    { title: 'Vacancy for a dance teacher!', body: 'This is a description about vacancy for a dance teacher', author: 'bill', id: 2 },
    { title: "Mia won 'The last dance competition' in New York", body: 'This is a description about winner', author: 'selena', id: 3 },
  ]);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <div>{ blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      )) }</div>
    </div>
  );
}

export default Home;
