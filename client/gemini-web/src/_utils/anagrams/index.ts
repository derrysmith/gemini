import * as anagrams from './anagrams.json';

const sortByAlpha = function (x: string, y: string): number {
	return x.localeCompare(y);
};

const sortByLength = function (x: string, y: string): number {
	return x.length - y.length;
};

const sortByLengthThenByAlpha = function (x: string, y: string): number {
	const lengthCompare = sortByLength(x, y);
	return lengthCompare === 0 ? sortByAlpha(x, y) : lengthCompare;
};

const createAnagramKey = function (word: string): string {
	return [...word].sort(sortByAlpha).join('');
};

const createAnagramKeys = function (word: string, min: number, max:number): string[] {
	if (!!!word) return [];

	const charactersShiftArray = Array.from(Array(1 << word.length).keys());
	const charactersIndexArray = Array.from(Array(word.length).keys());

	const permutations = charactersShiftArray
		.map(i => charactersIndexArray.map(j => {
			return (i & (1 << j)) === 0 ? null : word[j];
		}).join(''))

		// filter keys for correct length
		.filter(s => s.length >= min && s.length <= max)

		// get anagram keys
		.map(s => createAnagramKey(s));

	// filter out duplicates
	const combinations = permutations.filter((s, i) => permutations.indexOf(s) === i);

	return combinations.sort(sortByLengthThenByAlpha);
};

type GetAnagramsProps = {
	anagrams: Record<string, string[]>;
};

const GetAnagrams = function ({ anagrams }: GetAnagramsProps) {
	return (text: string, min: number = 3, max: number = text.length): string[] => {
		if (!!!text) return [];

		const a: string[] = [];

		const anagramKeys = createAnagramKeys(text, min, max);
		anagramKeys.forEach(anagramKey => {
			if (anagrams[anagramKey]) {
				a.push(...anagrams[anagramKey]);
			}
		});

		return a.sort(sortByLengthThenByAlpha);
	};
}

export const getAnagrams = GetAnagrams({
	anagrams: anagrams as Record<string, string[]>
});
