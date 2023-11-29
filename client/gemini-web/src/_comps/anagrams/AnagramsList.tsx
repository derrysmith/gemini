import { FC } from 'react';

// fonts
import { monoFont } from '@/_fonts';

const dictionaryBaseUrl = 'https://www.merriam-webster.com/dictionary/';

const groupByLength = (input: string[]): Record<number, string[]> => {
	return input.reduce<Record<number, string[]>>((prev, curr) => {
		const groupKey = curr.length;

		const group = prev[groupKey] || [];
		group.push(curr);

		return { ...prev, [groupKey]: group };
	}, {});
};

type AnagramsListProps = {
	anagrams: string[];
};

export const AnagramsList: FC<AnagramsListProps> = ({ anagrams }) => {
	const groups = groupByLength(anagrams);

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
				{Object.values(groups).map((g, i) => (
					<div key={i} className='card bg-base-100 border border-base-content/50 shadow-lg'>
						<div className='card-body'>
							<div className='flex flex-row flex-wrap gap-4 justify-center'>
								{g.map((s, j) => (
									<a
										key={j}
										href={`${dictionaryBaseUrl}${s}`}
										target='_blank'
										className={`badge badge-secondary badge-lg text-sm md:text-base ${monoFont.className}`}
									>
										{s}
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};