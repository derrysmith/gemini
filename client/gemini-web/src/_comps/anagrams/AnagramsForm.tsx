'use client';

import { FC, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type AnagramsFormProps = {
	query?: string;
};

export const AnagramsForm: FC<AnagramsFormProps> = ({ query }) => {
	const [text, setText] = useState(query);
	const { push } = useRouter();

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (text && text.length >= 3) {
			push(`/anagrams?q=${text.replace(' ', '')}`);
		}
	};

	return (
		<>
			<form onSubmit={handleSearch}>
				<fieldset className='form-control'>
					<input
						id='search'
						name='search'
						type='search'
						placeholder='search...'
						autoCapitalize='off'
						className='input input-bordered w-full'
						value={text}
						onChange={e => setText(e.target.value)}
					/>
				</fieldset>
			</form>
		</>
	);
};