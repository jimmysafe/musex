import { FC, RefObject } from 'react';

type InputProps = {
	type: string;
	placeholder?: string;
	_ref: RefObject<HTMLInputElement>;
	required?: boolean;
	className?: string;
};

const Input: FC<InputProps> = ({ type, placeholder, _ref, required, className }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			ref={_ref}
			required={required}
			className={`p-2 border border-gray-100 mb-2 focus:border-primary outline-none ${className}`}
		/>
	);
};

export default Input;
