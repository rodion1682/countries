import { ICountrie } from 'types/ICountrie';
import { ICountryPage } from 'types/ICountryPage';
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

interface countriesState {
	countries: ICountrie[];

	isLoading: boolean;
	error: string;
	country: ICountryPage;
	borderCountries: string[];
}

const initialState: countriesState = {
	countries: [],
	isLoading: false,
	error: '',
	country: {} as ICountryPage,
	borderCountries: [],
};

export const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		countriesFetching: (state) => {
			state.isLoading = false;
		},
		countriesFetchingSuccess: (state, action: PayloadAction<ICountrie[]>) => {
			state.isLoading = true;
			state.error = '';
			state.countries = action.payload;
		},
		countriesFetchingError: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		findContryByName: (state, action: PayloadAction<ICountryPage>) => {
			state.country = action.payload;
		},
		borderCountriesFeching: (state, action: PayloadAction<string[]>) => {
			state.borderCountries = action.payload;
		},
	},
});

export const {
	countriesFetching,
	countriesFetchingSuccess,
	countriesFetchingError,
	findContryByName,
} = countriesSlice.actions;

export default countriesSlice.reducer;
