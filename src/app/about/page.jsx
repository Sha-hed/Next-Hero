import { Gupter } from "next/font/google";
const gupter = Gupter({ weight: ['400', '500', '700'], subsets: ['latin'] })
export const metadata = {
    title: "About Page",
    description: "About Page e asi vai!",
    keywords: ['about', 'about page', 'sera ekta page vai']
};
const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { next: { revalidate: 5 } })
    const data = await res.json();
    return data.currentTime;
}


const page = async () => {
    const currentTime = await getTime();
    return (
        <div className={gupter.className}>
            <div className="text-center font-bold text-3xl my-10">
                <h1>Hello From About Page!</h1>
                <h2>Current Time : {currentTime}</h2>

            </div>
        </div>
    );
};

export default page;