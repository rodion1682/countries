export interface ICountryPage {
	flags: { png: string };
	name: { common: string; official: string };
	population: number;
	region: string;
	subregion: string;
	capital: string[];
	languages: { [key: string]: string };
	currencies: { [key: string]: { name: string } };
	borders: { [key: number]: ICountryPage }[];
}
