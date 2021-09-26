import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);

const charactersCollection = new CharactersCollection('hello');
const sorter2 = new Sorter(charactersCollection);

sorter.sort();
sorter2.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
