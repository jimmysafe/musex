import { FC } from 'react';

type ButtonProps = {
	className?: string;
	text: string;
	color: string; // primary or secondary
	onClick?: () => void;
	loading?: boolean;
};

const Button: FC<ButtonProps> = ({ text, color, className, onClick, loading }) => {
	return (
		<button
			disabled={loading}
			onClick={onClick}
			className={`
                ${color === 'secondary' ? 'bg-secondary text-white' : 'bg-primary text-black'}
                rounded-sm px-5 py-3 uppercase text-sm font-medium tracking-wide
                ${className}
            `}
		>
			{!loading ? (
				text
			) : (
				<img src='/icons/loaders/button_loading.svg' alt='loading' className='w-8 mx-auto' />
			)}
		</button>
	);
};

export default Button;
