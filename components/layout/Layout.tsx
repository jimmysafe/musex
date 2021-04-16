import Navigation from 'components/nav/Navigation';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
	return (
		<main className='flex flex-col min-h-screen bg-bg'>
			<Navigation />
			{children}
		</main>
	);
};

export default Layout;
