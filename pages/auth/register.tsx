import AuthPageLayout from '../../components/auth/AuthPageLayout';
import AuthRedirect from '../../components/auth/AuthRedirect';
import RegisterForm from '../../components/auth/RegisterForm';
import { NextPage } from 'next';

const RegisterPage: NextPage = () => {
	return (
		<AuthPageLayout>
			<RegisterForm />
			<AuthRedirect text='Hai già un account?' linkText='Accedi' link='/auth/login' />
		</AuthPageLayout>
	);
};

export default RegisterPage;
