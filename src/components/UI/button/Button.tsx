import { FC } from 'react';
import cl from './Button.module.scss';

interface ButtonProps {
	handleGoBack: () => void;
	children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ handleGoBack, children }) => {
	return (
		<button className={cl.button} onClick={handleGoBack}>
			{children}
		</button>
	);
};

export default Button;
