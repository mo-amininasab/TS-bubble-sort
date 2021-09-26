import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort()

const charactersCollection = new CharactersCollection('hello');
charactersCollection.sort()

// sorter.sort();
// sorter2.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
