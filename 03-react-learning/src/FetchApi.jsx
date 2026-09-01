import CustomFetch from "./CustomFetch.jsx";

function FetchApi() {
  const [fetchData, error, loading] = CustomFetch(
    `${import.meta.env.VITE_API_POSTS}/posts`,
  );
  const [fetchData2, error2, loading2] = CustomFetch(
    `${import.meta.env.VITE_API_POSTS}/comments`,
  );
  const filteredPosts = fetchData.slice(0, 30);

  return (
    <>
      <h1>Posts</h1>
      <h2>{error}</h2>
      {loading && <h2>Loading Posts...</h2>}

      <div className="container">
        {filteredPosts.map((post) => (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <h1>Comments</h1>
      <h2>{error2}</h2>
      {loading2 && <h2>Loading Comments...</h2>}

      <div className="container">
        {fetchData2.map((comment) => (
          <div className="card" key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
          </div>
        ))}
      </div>
    </>
  );
}

export default FetchApi;
