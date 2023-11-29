import { FC, PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';

// comps
import { Header } from '@/_comps/header';
// fonts
import { baseFont } from '@/_fonts';
// icons
import { MenuIcon, DarkIcon, LightIcon, LogoIcon } from '@/_icons';

// styles
import './layout.css';

export const metadata: Metadata = {
	title: {
		'template': '%s - Gemini',
		default: 'Gemini'
	}
};

// export const viewport: Viewport = {
// 	themeColor: [
// 		{ media: '(prefers-color-scheme: light)', color: 'cyan' },
//     	{ media: '(prefers-color-scheme: dark)', color: 'black' },
// 	]
// };

type LayoutProps = PropsWithChildren<{	
}>;

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`bg-base-100 ${baseFont.className}`}>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default Layout;
