import Link from "next/link";

const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Posts({ posts }) {
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/Posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(ALL_POSTS_URL);
  const posts = await response.json();

  return {
    props: { posts },
  };
}
