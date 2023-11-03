import React from "react";
const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const ONE_POST_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Post({ post }) {
  return (
    <div>
      <h1>Post Information</h1>
      <h2>Title: {post.title}</h2>
      <p>ID: {post.id}</p>
      <p>Body: {post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(ALL_POSTS_URL);
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const response = await fetch(`${ONE_POST_URL}/${id}`);
  const post = await response.json();

  return {
    props: { post },
  };
}
