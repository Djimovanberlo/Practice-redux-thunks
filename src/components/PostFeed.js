import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/posts?offset=0&limit=5`
    );
    const morePosts = response.data.rows;
    console.log(response.data.rows);

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      <div>{data.loading ? <p>Loading...</p> : null}</div>
      <div>
        {data.posts.map((post) => {
          return (
            <div key={post.id}>
              <h5>{post.title}</h5>
              <p>
                {moment(post.createdAt).format("DD-MM-YYYY")} -{" "}
                {post.tags.map((tag) => {
                  return tag.tag;
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
