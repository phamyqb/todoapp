const listItem = [
  {
    id: 1,
    title: 'Học React JS',
    level: 0,
  },
  {
    id: 2,
    title: 'Học Node JS',
    level: 3,
  },
  {
    id: 3,
    title: 'Nấu ăn',
    level: 2,
  },
  {
    id: 4,
    title: 'Ăn cơm',
    level: 2,
  },
  {
    id: 5,
    title: 'Đi Học',
    level: 3,
  },
  {
    id: 6,
    title: 'Đi ngủ',
    level: 1,
  },
];

export const getListTodo = () => new Promise((resolve) => resolve(listItem));
export const getItemById = (id) =>
  new Promise((resolve) => resolve(listItem.find((x) => x.id === id)));
