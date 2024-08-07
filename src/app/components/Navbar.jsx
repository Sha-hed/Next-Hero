'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Galary',
            path: '/galary'
        }
    ]
    return (
        <div className="flex justify-between bg-sky-400 p-5">
            <h1 className="font-bold text-2xl">Next <span className="text-blue-800 font-semibold">Hero</span></h1>
            <ul>
                {
                    links?.map(link =>
                        <Link
                            href={link.path}
                            key={link.path}
                            className={`ml-5 font-bold ${pathName === link.path && ' text-blue-800'} `}
                        >{link.title}</Link>)
                }
            </ul>
            <h1 className="font-bold text-2xl">Next <span className="text-blue-800 font-semibold">Hero</span></h1>
        </div>
    );
};

export default Navbar;