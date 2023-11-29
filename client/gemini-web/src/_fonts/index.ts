import { Inconsolata, Inter } from 'next/font/google';

const inconsolata = Inconsolata({
	subsets: ['latin'],
	display: 'swap'
});

const inter = Inter({
	subsets: ['latin']
});

export {
	inconsolata as monoFont,
	inter as baseFont,
};