import CityPage from "@/src/Components/City/City";

export default async function Home({ params }) {
    const { city } = params;
	return (
		<CityPage city={city}/>
	);
}
