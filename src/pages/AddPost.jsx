// values
const dummyPost = {
  image: 'https://picsum.photos/id/17/200/300',
  title: 'First fireBase posts',
  body: 'Fire base is almost easy',
  userId: 1,
  archived: false,
};
function AddPost(props) {
  const handleNewPost = () => {
    console.log('dummyPost ===', dummyPost);

    const url = `${import.meta.env.VITE_REAL_DB_URL}/myApp/postai.json`;
    console.log('url ===', url);
  };

  return (
    <div className='container'>
      <h1>AddPost</h1>
      <p>cia bus forma</p>
      <button onClick={handleNewPost}>Create post</button>
    </div>
  );
}
export default AddPost;
