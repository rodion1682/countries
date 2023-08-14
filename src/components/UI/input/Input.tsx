import React, { FC } from 'react';
import cl from './Input.module.scss';

interface InputProps {
	placeholder: string;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ onChange, value, placeholder, type }) => {
	return (
		<>
			<div className={cl.input}>
				<input
					className={cl.input__item}
					value={value}
					placeholder={placeholder}
					type={type ? type : 'text'}
					onChange={onChange}
				/>
			</div>
		</>
	);
};

export default Input;
