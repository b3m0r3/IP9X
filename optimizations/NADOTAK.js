///INSTANTIATION - СОЗДАНИЕ ЭКЗЕМПЛЯРА КЛАССА
const itemFactory = (hello, size, flag) => ({ hello, size, flag });

const callFactory = () => itemFactory('world', 100500, true);

//////////////////////// ПО ОБЬЕКТАМ ФИЛЬТРУЕТ КВЭРИТ ЛУЧШЕ

//////////////// NEW INSTANCTIATION

const rangeNew = (from, to) => {
    if (to < from) return [];
    const len = to - from + 1;
    const range = new Array(len);
    for (let i = from; i <= to; i++) {
      range[i - from] = i;
    }
    return range;
  };
//// INCLUDES lepsh
///FOR IN lepsh
///MAP FOR OF KEYS/VALUES 
const testForOfKeys = () => {
  const arr = [];
  for (const key of cities.keys()) {
    arr.push(key);
  }
};


