import { FC } from 'react';

const AuthPageLayout: FC = ({ children }) => {
	return (
		<div className='flex-1 flex justify-between items-stretch'>
			<section className='py-10 px-6 flex flex-col text-center w-1/2 justify-center'>
				{children}
			</section>
			<section
				className='flex-1 bg-center bg-cover bg-no-repeat'
				style={{
					backgroundImage:
						"url('https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg')",
				}}
			/>
		</div>
	);
};

export default AuthPageLayout;
