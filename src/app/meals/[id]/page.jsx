export const runtime = "edge"
import { Gupter } from "next/font/google";
const gupter = Gupter({ weight: ['400', '500', '700'], subsets: ['latin'] })
const getDetails = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json();
    return data;
}
export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    const data = await res.json();
    return {
        title: {
            absolute: `${data.meals[0].strMeal}`
        },
        description: data?.meals[0]?.strInstructions,
        keywords: data?.meals[0]?.strInstructions.split(' ')
    }

}

const page = async ({ params }) => {
    const meal = await getDetails(params.id)
    console.log('Finding the meals man!', meal.meals[0].idMeal);
    return (
        <div className={gupter.className}>
            <h6>{meal?.meals[0]?.strMeal}</h6>
            <p>{meal?.meals[0]?.strInstructions}</p>
        </div>
    );
};

export default page;