import { FC } from 'react';

// icons
import { MenuIcon, DarkIcon, LightIcon, LogoIcon } from '@/_icons';

export const Header: FC = () => {
	return (
		<>
			<div className='navbar bg-primary text-primary-content'>
				<div className='navbar-start'>
					<a href='/' className='btn btn-ghost text-base lg:text-lg lowercase'>
						<LogoIcon className='w-6 h-6 lg:w-7 lg:h-7' />
						<span>Gemini</span>
					</a>
				</div>

				<div className='navbar-end'>
					{/* <label className='btn btn-ghost btn-circle swap swap-rotate' title='toggle between light/dark mode'>
						<input type='checkbox' className='theme-controller' value='business' />
						<DarkIcon className='swap-on w-6 h-6 lg:w-7 lg:h-7' />
						<LightIcon className='swap-off w-6 h-6 lg:w-7 lg:h-7' />
					</label> */}
				
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-ghost btn-circle'>
							<MenuIcon className='w-6 h-6 lg:w-7 lg:h-7' />
						</label>

						<ul className='menu dropdown-content bg-base-200 z-10 mt-2 p-2 shadow-lg rounded-md w-36'>
							<li><a href='/anagrams'>Anagrams</a></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};