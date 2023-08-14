import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	fetchBorderingCountries,
	fetchCountry,
} from 'services/Countries.service';
import CountryPageContent from 'components/CountryPageContent/CountryPageContent';
import Button from 'components/UI/button/Button';
import cl from './ContryPage.module.scss';

const CountryPage: FC = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { country, borderCountries } = useAppSelector(
		(state) => state.countriesReducer
	);

	useEffect(() => {
		if (name) {
			dispatch(fetchCountry(name));
		}
	}, [name]);

	useEffect(() => {
		if (country.borders) {
			const fetchCountriesForBorder = fetchBorderingCountries();
			fetchCountriesForBorder(dispatch, country);
		}
	}, [country]);

	const handleGoBack = () => {
		navigate(-1);
	};

	const handelCountryChange = (countryName: string) => {
		navigate(`/countries/${countryName}`);
	};

	return (
		<>
			<div className={cl.contry}>
				<div className={cl.contry__top}>
					<Button handleGoBack={handleGoBack} children={'Go Back'} />
				</div>
				{country && (
					<CountryPageContent
						country={country}
						borderCountries={borderCountries}
						handelCountryChange={handelCountryChange}
					/>
				)}
			</div>
		</>
	);
};

export default CountryPage;
