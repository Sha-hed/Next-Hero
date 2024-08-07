import Meals from "../components/Meals";
import styles from './styles.module.css';
export const metadata = {
    title: {
        absolute: 'Meals'
    },
    description: "Meals Page e asi vai!",
};
const page = () => {
    return (
        <div className="p-12">
            <h1 className="text-3xl font-semibold text-red-400">Choose Your Meals</h1>
            <p className={styles.font_f}>Choose meals of you choice by searching....</p>
            <Meals />
        </div>
    );
};

export default page;