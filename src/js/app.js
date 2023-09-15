export default function objectSort(obj, exampleSort) {
  const arrExampleSort = [];
  const arrSort = [];

  for (const key in obj) {
    if (exampleSort.includes(key)) {
      const index = exampleSort.indexOf(key);
      arrExampleSort.splice(index, 0, { key, value: obj[key] });
    } else arrSort.push({ key, value: obj[key] });
  }
  arrSort.sort((a, b) => (a.key > b.key ? 1 : -1));
  const arr = [...arrExampleSort, ...arrSort];
  return arr;
}
