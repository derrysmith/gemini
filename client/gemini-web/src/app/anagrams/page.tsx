import { FC } from 'react';
import type { Metadata } from 'next';

// comps
import { AnagramsForm } from '@/_comps/anagrams/AnagramsForm';
import { AnagramsList } from '@/_comps/anagrams/AnagramsList';
// utils
import { getAnagrams } from '@/_utils/anagrams';

export const metadata: Metadata = {
	title: 'Anagrams'
};

type AnagramsPageParams = {
	q?: string;
}

type AnagramsPageProps = {
	searchParams: AnagramsPageParams;
};

const AnagramsPage: FC<AnagramsPageProps> = ({ searchParams }) => {
	const { q } = searchParams;

	// get anagrams if q is not empty
	const anagrams = q ? getAnagrams(q, 3, q.length) : null;

	return (
		<>
			<div className='p-4 sm:p-6 md:p-8 lg:p-12'>
				<div className='container mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12'>
					
					<AnagramsForm query={q} />
					{anagrams && <AnagramsList anagrams={anagrams} />}

				</div>
			</div>
		</>
	);
};

export default AnagramsPage;
