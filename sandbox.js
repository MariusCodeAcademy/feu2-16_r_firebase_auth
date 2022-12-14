const dataObj = {
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

function fireObjToArr(fireObj) {
  const dataArr = [];
  for (const key in fireObj) {
    // su spred
    //dataArr.push({ id: key, ...fireObj[key] });
    // console.log('key ===', key);
    const value = fireObj[key];
    value.id = key;
    // console.log('value ===', value);
    dataArr.push(value);
  }
  console.log('dataArr ===', dataArr);
  return dataArr;
}
fireObjToArr(dataObj);
