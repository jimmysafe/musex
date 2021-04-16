import { FC } from 'react';

type InputLabelProps = {
	text: string;
};

const InputLabel: FC<InputLabelProps> = ({ text }) => {
	return <p className='text-left text-sm mt-1 mb-1 text-gray-400'>{text}:</p>;
};

export default InputLabel;
