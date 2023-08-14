import { FC } from 'react';
import { ICountryPage } from 'types/ICountryPage';
import cl from './CountryPageContent.module.scss';

interface CountryPageContentProps {
	country: ICountryPage;
	borderCountries: string[];
	handelCountryChange: (countryName: string) => void;
}

const CountryPageContent: FC<CountryPageContentProps> = ({
	country,
	borderCountries,
	handelCountryChange,
}) => {
	return (
		<>
			<div className={cl.country}>
				<div className={cl.country__image}>
					<img src={country?.flags?.png} alt="image" />
				</div>
				<div className={cl.country__content}>
					<div className={cl.country__title}>{country?.name?.common}</div>
					<div className={cl.country__items}>
						<div className={cl.country__item}>
							<div className={cl.country__text}>official name:</div>
							<div className={cl.country__value}>
								{country?.name?.official}
							</div>
						</div>
						<div className={cl.country__item}>
							<div className={cl.country__text}> population:</div>
							<div className={cl.country__value}>
								{country?.population}
							</div>
						</div>
						<div className={cl.country__item}>
							<div className={cl.country__text}>region:</div>
							<div className={cl.country__value}>{country?.region}</div>
						</div>
						<div className={cl.country__item}>
							<div className={cl.country__text}>subregion:</div>
							<div className={cl.country__value}>
								{country?.subregion}
							</div>
						</div>
						<div className={cl.country__item}>
							<div className={cl.country__text}>capital:</div>
							<div>
								{country?.capital &&
									country?.capital.map((capital) => (
										<div className={cl.country__value} key={capital}>
											{capital}
										</div>
									))}
							</div>
						</div>
						<div className={cl.country__item}>
							<div className={cl.country__text}>languages:</div>
							<div className={cl.country__values}>
								{country?.languages &&
									Object.values(country.languages).map((language) => (
										<div className={cl.country__value} key={language}>
											{language}
										</div>
									))}
							</div>
						</div>
						<div className={cl.country__item}>
							<div className={cl.country__text}>currency:</div>
							<div className={cl.country__values}>
								{country?.currencies &&
									Object.values(country.currencies).map((value) => (
										<div
											className={cl.country__value}
											key={value.name}
										>
											{value.name}
										</div>
									))}
							</div>
						</div>
						{borderCountries.length > 0 ? (
							<div className={cl.country__item}>
								<div className={cl.country__text}>
									bordering countries
								</div>
								<div className={cl.country__links}>
									{borderCountries.map((borderCountry: string) => (
										<div
											className={cl.country__link}
											onClick={() =>
												handelCountryChange(borderCountry)
											}
											key={borderCountry}
										>
											{borderCountry}
										</div>
									))}
								</div>
							</div>
						) : (
							<div>No bordering countries found.</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CountryPageContent;
