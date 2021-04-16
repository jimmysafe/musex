import { NextPage } from 'next';
import LoginForm from 'components/auth/LoginForm';
import AuthPageLayout from 'components/auth/AuthPageLayout';
import AuthRedirect from 'components/auth/AuthRedirect';

const LoginPage: NextPage = () => {
	return (
		<AuthPageLayout>
			<LoginForm />
			<AuthRedirect text='Non hai ancora un account?' linkText='Registrati' link='/auth/register' />
		</AuthPageLayout>
	);
};

export default LoginPage;
