import { sendRequest } from '../hepers';

// values
const dummyPost = {
  image: 'https://picsum.photos/id/17/200/300',
  title: 'First fireBase post',
  body: 'Fire base is almost easy',
  userId: '6LUz1yxPpMR5bpqF0m14xTOqFPh1',
  archived: false,
};
function AddPost(props) {
  const handleNewPost = async () => {
    console.log('dummyPost ===', dummyPost);

    const url = `${import.meta.env.VITE_REAL_DB_URL}/firePost/posts.json`;
    console.log('url ===', url);

    // pasiimti userId is contexto ir irasyti i dummyPost pries issiunciant

    const [ats, err] = await sendRequest(dummyPost, url);
    console.log('err ===', err);
    console.log('ats ===', ats);
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
