
import Link from "next/link";
import { postBaal } from "../components/postNe";


const page = async () => {
    const allPosts = await postBaal();
    return (
        <div className="grid grid-cols-4 gap-6">
            {
                allPosts?.slice(0, 10).map((post) =>
                    <div className="border-2 p-6" key={post.id}>
                        <h6>{post.title}</h6>
                        <p>{post.body}</p>
                        <button className="p-3 bg-red-600 text-white font-bold"><Link href={`/posts/${post.id}`}>Post Details</Link></button>
                    </div>
                )
            }
        </div>
    );
};

export default page;