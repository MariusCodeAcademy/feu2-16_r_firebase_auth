import { fireObjToArr } from '../hepers';
import useFetch from './../hooks/useFetch';
function PostPage(props) {
  const url = `${import.meta.env.VITE_REAL_DB_URL}/firePost/posts.json`;

  const [dataFromFireB, setDataFromFireB] = useFetch(url, {});

  const dataArr = fireObjToArr(dataFromFireB);

  console.log('dataArr ===', dataArr);
  // console.log('dataFromFireB ===', dataFromFireB);
  // console.log(JSON.stringify(dataFromFireB, null, 2));
  return (
    <div className='container'>
      <h1>PostPage</h1>
      <p>cia bus postai</p>

      <ul>
        {/* mapinti per dataArr */}
        <li>post 1</li>
        <li>post 2</li>
        <li>post 3</li>
      </ul>
    </div>
  );
}
export default PostPage;

const dataWeGot = {
  '-NJEdBd3xSbnT-BUfZr0': {
    archived: false,
    body: 'Fire base is almost easy',
    image: 'https://picsum.photos/id/17/200/300',
    title: 'First fireBase post',
    userId: '6LUz1yxPpMR5bpqF0m14xTOqFPh1',
  },
  '-NJEe-ZoFqgLldLtuq8u': {
    archived: false,
    body: 'Second Fire base is almost easy',
    image: 'https://picsum.photos/id/17/200/300',
    title: 'Second fireBase post',
    userId: '6LUz1yxPpMR5bpqF0m14xTOqFPh1',
  },
  '-NJEk9fNH0SIrEGR5pJQ': {
    archived: false,
    body: 'Mike @ mike says hello',
    image: 'https://picsum.photos/id/18/600/400',
    title: 'Third fireBase post',
    userId: 'QqkLofip94dHqaXRdrwrI12rUOC2',
  },
  '-NJEkqbjChbOsXW-1NaT': {
    archived: false,
    body: 'Fourth learned firebase today',
    image: 'https://picsum.photos/id/18/600/400',
    title: 'Fourth fireBase post',
    userId: 'QqkLofip94dHqaXRdrwrI12rUOC2',
  },
};
