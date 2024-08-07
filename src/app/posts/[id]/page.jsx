import React from 'react';

const getData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json();
    return data;
}

export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json();
    return {
        title: {
            absolute: `${data.title}`
        },
        description: data.body,
        keywords: data.body.split(' ')
    }
}

const postDetails = async ({ params }) => {
    const post = await getData(params.id)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default postDetails;