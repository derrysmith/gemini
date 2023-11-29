import { FC } from 'react';

const HomePage: FC = () => {
	return (
		<>
			<div className='bg-transparent p-4 sm:p-6 md:p-8 lg:p-12'>
				<div className='container mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12'>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
						<div className='card bg-base-100 border border-base-content/50 shadow-lg'>
							<div className='card-body'>
								<h3 className='card-title'>Anagrams</h3>
								
								<p className='text-base-content text-sm md:text-base'>Find the anagrams of English words. A utility that comes in handy with word games such as Wordle&reg;, Scrabble&reg;, jumbles, and crossword puzzles.</p>
								<p className='text-base-content/50 italic text-sm md:text-base'>anagram (noun): a word or phrase made by transposing the letters of another word or phrase</p>
								
								<div className='card-actions justify-end'>
									<a href='/anagrams' className='btn btn-ghost'>Get Started</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default HomePage;
