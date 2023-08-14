import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCountries } from 'services/Countries.service';
import ContryItem from 'components/ContryItem/ContryItem';
import Input from 'components/UI/input/Input';
import CustomSelect from 'components/UI/select/CustomSelect';
import { useFilteredCountries } from 'hooks/useFilteredCountries';
import cl from './Contries.module.scss';

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'Americas', label: 'Americas' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
];

const Contries: FC = () => {
	const dispatch = useAppDispatch();
	const { countries, isLoading, error } = useAppSelector(
		(state) => state.countriesReducer
	);

	const [searchValue, setSearchValue] = useState('');
	const [selectValue, setSelectValue] = useState({ value: '', label: '' });

	useEffect(() => {
		dispatch(fetchCountries());
	}, []);

	const filteredCountries = useFilteredCountries(
		countries,
		selectValue.value,
		searchValue
	);

	return (
		<div className={cl.countries}>
			<div className={cl.countries__top}>
				<Input
					placeholder={'Search for a country'}
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<CustomSelect
					options={options}
					placeholder={'Filter by Region'}
					onChange={setSelectValue}
					value={selectValue}
				/>
			</div>
			<div className={cl.countries__list}>
				{error ? (
					<div>{error}</div>
				) : (
					<>
						{isLoading ? (
							<ContryItem countries={filteredCountries} />
						) : (
							<div>Loading...</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Contries;
