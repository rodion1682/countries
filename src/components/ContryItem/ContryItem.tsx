import { FC } from 'react';
import { ICountrie } from 'types/ICountrie';
import styles from './ContryItem.module.scss';
import { useNavigate } from 'react-router-dom';

interface ContryItemProps {
	countries: ICountrie[];
}

const ContryItem: FC<ContryItemProps> = ({ countries }) => {
	const navigate = useNavigate();
	return (
		<>
			{countries.map((country: ICountrie) => (
				<div className={styles.country} key={country.name.common}>
					<div
						className={styles.country__item}
						onClick={() => navigate(`/countries/${country.name.common}`)}
					>
						<div className={styles.country__image}>
							<img src={country.flags.png} alt="image" />
						</div>
						<div className={styles.country__content}>
							<div className={styles.country__name}>
								{country.name.common}
							</div>
							<div className={styles.country__row}>
								<div className={styles.country__label}>population:</div>
								<div className={styles.country__value}>
									{country.population}
								</div>
							</div>
							<div className={styles.country__row}>
								<div className={styles.country__label}>region:</div>
								<div className={styles.country__value}>
									{country.region}
								</div>
							</div>
							<div className={styles.country__row}>
								<div className={styles.country__label}>capital:</div>
								<div className={styles.country__value}>
									{country.capital}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default ContryItem;
