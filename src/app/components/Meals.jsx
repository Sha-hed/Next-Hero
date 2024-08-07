"use client"
export const runtime = "edge"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Meals = () => {

    const [search, setSearch] = useState("a");
    const [error, setError] = useState("");
    const [meals, setMeals] = useState([]);
    console.log(meals);
    const loadData = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_MEALS_API}=${search}`)
            const data = await res.json();
            setMeals(data.meals);
            setError('');

        } catch (error) {
            setError('No Data Found.......')
        }
    }
    useEffect(() => {
        loadData();
    }, [search])

    return (
        <div className="mt-12">
            <input
                onChange={(e) => setSearch(e.target.value)}
                className="p-4 outline-none text-slate-900 border-transparent"
                placeholder="Search Meal"
                type="text" name="" id=""
            />
            <button onClick={() => loadData()} className="bg-red-400 p-4">Search</button>
            <div className="mt-12 grid grid-cols-3 gap-12">
                {
                    meals.length > 0 && !error && meals?.map((meal) => <div
                        key={meal?.idMeal}
                        className="border-2 p-4">
                        {/* <img src={meal?.strMealThumb} alt="" /> */}
                        <Image src={meal?.strMealThumb} alt="Hello" width={500} height={500}></Image>
                        <h6>{meal.strMeal}</h6>
                        <p>{meal.strInstructions}</p>
                        <button className="p-3 bg-red-600 text-white font-bold">
                            <Link href={`/meals/${meal?.idMeal}`}>View Details</Link>
                        </button>
                    </div>)

                }
                {
                    error && <h6>{error}</h6>
                }
            </div>
        </div>
    );
};

export default Meals;