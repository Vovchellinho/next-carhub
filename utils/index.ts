import type { CarProps } from "@/types";

export const fetchCars = async () => {
	const headers = {
		'X-API-Key': process.env.NEXT_PUBLIC_CAR_API_KEY ?? '',
	};

	const url = 'https://api.api-ninjas.com/v1/cars?model=carrera';

	try {
		const response = await fetch(url, {headers});
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error)
	}
}


export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL('https://cdn.imagin.studio/getimage');

	const {make, year, model} = car;

	url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY ?? '');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('year', `${year}`);
	url.searchParams.append('angle', `${angle}`);

	return url.toString();
}