import InputLabel from 'components/layout/InputLabel';
import { userLogin, userRegister } from '../../queries';
import { FC, SyntheticEvent, useRef, useState } from 'react';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import type { NewUser } from '../../types/NewUser';
import Button from '../layout/Button';
import Input from '../layout/Input';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

type DateObj = {
	year: number;
	month: number;
	day: number;
};

const RegisterForm: FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const [date, setDate] = useState<DateObj>({
		year: -1,
		month: -1,
		day: -1,
	});

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const telephoneRef = useRef<HTMLInputElement>(null);
	const languageRef = useRef<HTMLSelectElement>(null);

	const handleRegister = async (e: SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);
		if (
			emailRef.current &&
			passwordRef.current &&
			firstNameRef.current &&
			lastNameRef.current &&
			telephoneRef.current &&
			languageRef.current &&
			date.day &&
			date.year &&
			date.month
		) {
			const formattedMonth = Number(date.month) + 1;
			const monthLength = date.month.toString().length;
			let month: string;
			if (monthLength === 1) {
				month = `0${formattedMonth}`;
			} else month = formattedMonth.toString();

			const newUser: NewUser = {
				email: emailRef.current.value,
				username: emailRef.current.value,
				password: passwordRef.current.value,
				firstName: firstNameRef.current.value,
				lastName: lastNameRef.current.value,
				thirdName: '',
				cellphone: telephoneRef.current.value,
				language: languageRef.current.value,
				birthDate: `${date.year.toString()}-${month}-${date.day.toString()}`,
			};

			try {
				const registerRes = await userRegister(newUser);

				if (registerRes.status === 200) {
					const loginRes = await userLogin(emailRef.current.value, passwordRef.current.value);
					if (loginRes.status === 200) {
						const token = loginRes.message.token;
						Cookies.set('auth-token', token, { secure: false, expires: 7 });
						setLoading(false);
						router.push('/');
					}
				}
			} catch (err) {
				setLoading(false);
				console.log(err);
			}
		}
	};

	return (
		<form
			onSubmit={handleRegister}
			className='flex flex-col shadow rounded-sm max-w-form min-w-form mx-auto p-6 bg-white'
		>
			<h1 className='text-xl font-medium mb-8'>Registrati</h1>

			{/* EMAIL */}
			<div className='flex flex-col'>
				<InputLabel text='Email' />
				<Input type='email' _ref={emailRef} required />
			</div>

			{/* PASSWORD */}
			<div className='flex flex-col'>
				<InputLabel text='Password' />

				<Input type='password' _ref={passwordRef} required />
			</div>

			{/* NAME AND SURNAME */}
			<div className='flex w-full'>
				<div className='flex flex-col w-full mr-1'>
					<InputLabel text='Nome' />
					<Input type='text' _ref={firstNameRef} required={true} className='w-full' />
				</div>
				<div className='flex flex-col w-full ml-1'>
					<InputLabel text='Cognome' />
					<Input type='text' _ref={lastNameRef} required={true} className='w-full' />
				</div>
			</div>

			{/* DOB */}
			<div className='flex flex-col'>
				<InputLabel text='Data di Nascita' />
				<div className='flex justify-between items-center mb-2'>
					<YearPicker
						defaultValue={'Anno'}
						required={true}
						value={date.year}
						onChange={(year: number) => {
							setDate({ year, day: date.day, month: date.month });
						}}
						classes={
							'p-2 border border-gray-100 flex-1 mr-1 text-gray-400 focus:border-primary outline-none'
						}
						optionClasses={'option classes'}
					/>
					<MonthPicker
						defaultValue={'Mese'}
						year={date.year}
						numeric
						required={true}
						value={date.month}
						onChange={(month: number) => {
							setDate({ month, year: date.year, day: date.day });
						}}
						classes={
							'p-2 border border-gray-100 flex-1 mx-1 text-gray-400 focus:border-primary outline-none'
						}
						optionClasses={'option classes'}
					/>
					<DayPicker
						defaultValue={'Giorno'}
						year={date.year}
						month={date.month}
						required={true}
						value={date.day}
						onChange={(day: number) => {
							setDate({ day, year: date.year, month: date.month });
						}}
						classes={
							'p-2 border border-gray-100 flex-1 ml-1 text-gray-400 focus:border-primary outline-none'
						}
						optionClasses={'option classes'}
					/>
				</div>
			</div>

			{/* TELEPHONE */}
			<div className='flex flex-col'>
				<InputLabel text='Telefono' />
				<Input type='text' _ref={telephoneRef} required />
			</div>

			{/* LANGUAGES */}
			<div className='flex flex-col text-gray-400'>
				<InputLabel text='Lingua' />
				<select
					name='languages'
					ref={languageRef}
					className='p-2 border border-gray-100 flex-1 focus:border-primary outline-none'
				>
					<option value='ITALIANO'>Italiano</option>
					<option value='INGLESE'>Inglese</option>
					<option value='FRANCESE'>Francese</option>
					<option value='SPAGNOLO'>Spagnolo</option>
					<option value='TEDESCO'>Tedesco</option>
				</select>
			</div>

			<Button color='secondary' text='Registrati' className='mt-6' loading={loading} />
		</form>
	);
};

export default RegisterForm;
