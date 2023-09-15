import objectSort from '../app';

const objExample = {
  attack: 80,
  name: 'мечник',
  health: 10,
  defence: 40,
  level: 2,
};

const obj = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

const exampleSort = ['name', 'level'];

test('sort object', () => {
  expect(objectSort(objExample, exampleSort)).toEqual(obj);
});
