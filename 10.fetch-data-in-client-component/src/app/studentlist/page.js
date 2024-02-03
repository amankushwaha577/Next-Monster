'use client'
import { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h2>Post List 1</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
    </div>
  );
};

export default PostList;
