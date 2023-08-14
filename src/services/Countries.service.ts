import axios from 'axios';
import { countriesSlice } from 'store/CountriesSlice';
import { AppDispatch } from 'store/store';
import { ICountrie } from 'types/ICountrie';
import { ICountryPage } from 'types/ICountryPage';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const fetchCountries = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(countriesSlice.actions.countriesFetching());
		const response = await axios.get<ICountrie[]>(`${BASE_URL}all`);
		dispatch(countriesSlice.actions.countriesFetchingSuccess(response.data));
	} catch (error: string | any) {
		dispatch(countriesSlice.actions.countriesFetchingError(error.message));
	}
};

export const fetchCountry = (name: string) => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get<ICountryPage[]>(
			`${BASE_URL}name/${name}`
		);

		dispatch(countriesSlice.actions.findContryByName(response.data[0]));
	} catch (error: string | any) {
		dispatch(countriesSlice.actions.countriesFetchingError(error.message));
	}
};

export const fetchBorderingCountries =
	() => async (dispatch: AppDispatch, country: ICountryPage) => {
		try {
			const response = await Promise.all(
				country.borders.map((border) =>
					axios.get<ICountryPage[]>(`${BASE_URL}/alpha/${border}`)
				)
			);
			const allBorderingCountries = response.map(
				(res) => res.data[0].name.common
			);

			dispatch(
				countriesSlice.actions.borderCountriesFeching(allBorderingCountries)
			);
		} catch (error: string | any) {
			dispatch(countriesSlice.actions.countriesFetchingError(error.message));
		}
	};
