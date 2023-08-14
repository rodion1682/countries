import { useMemo } from 'react';
import { ICountrie } from 'types/ICountrie';

export const useFilteredCountries = (
	countries: ICountrie[],
	selectValue: string,
	searchValue: string
) => {
	const filteredCountries = useMemo(() => {
		let filteredCountries = countries;

		if (selectValue) {
			filteredCountries = filteredCountries.filter(
				(country) => country.region === selectValue
			);
		}

		if (searchValue) {
			filteredCountries = filteredCountries.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(searchValue.toLowerCase())
			);
		}

		const sortedCountries = [...filteredCountries].sort((a, b) =>
			a.name.common.localeCompare(b.name.common)
		);

		return sortedCountries;
	}, [selectValue, searchValue, countries]);

	return filteredCountries;
};
