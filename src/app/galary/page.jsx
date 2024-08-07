import Image from "next/image";


const page = () => {
    return (
        <div>
            {/* <img src="/images/1.jpg" alt="" /> */}
            {/* <Image src="/images/1.jpg" width={1520} height={1000}></Image> */}
            <div>
                {
                    [1, 2, 3, 4].map(img => <Image
                        alt="Hello"
                        key={`/images/${img}.jpg`}
                        src={`/images/${img}.jpg`}
                        width={1920} height={1080}
                    ></Image>)
                }
            </div>
            <h1>Welcome to Galary Page Man!!</h1>
        </div>
    );
};

export default page;