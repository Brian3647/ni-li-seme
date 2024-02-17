import { Word } from '@kulupu-linku/sona';

export const fetchWord = async (word: string): Promise<Word> => {
	const res = await fetch(`https://api.linku.la/v1/words/${word}`);

	if (!res.ok) {
		throw new Error('Failed to fetch word');
	}

	const data = await res.json();

	if (!data.ok) {
		throw new Error("Word not found in lipu Linku's dictionary");
	}

	return data.data as Word;
};
