import useFetch from './../hooks/useFetch';
function PostPage(props) {
  const url = `${import.meta.env.VITE_REAL_DB_URL}/firePost/posts.json`;

  const [dataFromFireB, setDataFromFireB] = useFetch(url, {});

  return (
    <div className='container'>
      <h1>PostPage</h1>
      <p>cia bus postai</p>

      <ul>
        <li>post 1</li>
        <li>post 2</li>
        <li>post 3</li>
      </ul>
    </div>
  );
}
export default PostPage;
