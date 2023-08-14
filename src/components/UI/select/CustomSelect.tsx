import React, { FC } from 'react';
import Select from 'react-select';

interface CustomSelectProps {
	placeholder: string;
	onChange: React.Dispatch<
		React.SetStateAction<{ value: string; label: string }>
	>;
	value: { value: string; label: string };
	options: { value: string; label: string }[];
}

const CustomSelect: FC<CustomSelectProps> = ({
	options,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<>
			<Select
				options={options}
				placeholder={placeholder}
				isClearable={true}
				isSearchable={false}
				value={value.value ? value : null}
				onChange={(selectedOption) => {
					if (selectedOption === null) {
						onChange({ value: '', label: '' });
					} else {
						onChange(selectedOption);
					}
				}}
				styles={{
					control: (baseStyles) => ({
						...baseStyles,
						backgroundColor: 'rgb(255, 255, 255)',
						color: 'rgb(17, 21, 23)',
						borderRadius: '8px',
						padding: '0px 10px',
						border: 'none',
						boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
						height: '40px',
						fontFamily: '"Nunito Sans", sans-serif',
						fontSize: '16px',
						width: '100%',
						minWidth: '290px',
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						cursor: 'pointer',
						fontFamily: '"Nunito Sans", sans-serif',
						fontSize: '16px',
						color: state.isSelected
							? 'rgb(255, 255, 255)'
							: ' rgb(17, 21, 23)',
						backgroundColor: state.isSelected
							? 'rgb(43, 57, 69)'
							: state.isFocused
							? 'rgba(0, 0, 0, 0.1)'
							: 'rgb(255, 255, 255)',
					}),
				}}
			/>
		</>
	);
};

export default CustomSelect;
