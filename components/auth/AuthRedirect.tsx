import React, { FC } from 'react';
import { useRouter } from 'next/router';

type AuthRedirectProps = {
	text: string;
	linkText: string;
	link: string;
};

const AuthRedirect: FC<AuthRedirectProps> = ({ text, linkText, link }) => {
	const router = useRouter();
	return (
		<div className='mt-6'>
			<p>
				{text}{' '}
				<span className='cursor-pointer text-blue-500' onClick={() => router.push(link)}>
					{linkText}
				</span>
			</p>
		</div>
	);
};

export default AuthRedirect;
