import { userLogin } from '../../queries';
import { FC, SyntheticEvent, useRef, useState } from 'react';
import Button from '../layout/Button';
import Input from '../layout/Input';
import InputLabel from '../layout/InputLabel';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const LoginForm: FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const handleLogin = async (e: SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);
		if (emailRef.current && passwordRef.current) {
			try {
				const loginRes = await userLogin(emailRef.current.value, passwordRef.current.value);
				if (loginRes.status === 200) {
					const token = loginRes.message.token;
					Cookies.set('auth-token', token, { secure: false, expires: 7 });
					setLoading(false);
					router.push('/');
				}
			} catch (err) {
				setLoading(false);
				console.log(err);
			}
		}
	};

	return (
		<form
			onSubmit={handleLogin}
			className='flex flex-col shadow rounded-sm max-w-form min-w-form mx-auto p-6 bg-white'
		>
			<h1 className='text-xl font-medium mb-8'>Sign in</h1>
			<div className='flex flex-col'>
				<InputLabel text='Email' />
				<Input type='email' _ref={emailRef} required />
			</div>
			<div className='flex flex-col'>
				<InputLabel text='Password' />
				<Input type='password' _ref={passwordRef} required />
			</div>
			<Button color='secondary' text='Accedi' className='mt-6' loading={loading} />
		</form>
	);
};

export default LoginForm;
