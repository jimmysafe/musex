import { FC } from 'react';
import { useRouter } from 'next/router';

const Navigation: FC = () => {
	const router = useRouter();
	return (
		<header className='py-4 bg-primary text-white'>
			<nav className='container mx-auto flex justify-between items-center'>
				<h1 className='text-xl font-medium'>Musex</h1>
				<div>
					<span className='cursor-pointer' onClick={() => router.push('/auth/login')}>
						Login
					</span>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
