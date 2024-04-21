import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start h-screen">
      <div className="my-36 mx-10 p-5 flex flex-col-reverse md:flex-row justify-center items-center h-1/3">
        <div className="w-1/3 mr-5 flex flex-col justify-center items-start">
          <h1 className="md:text-6xl md:text-start text-center text-3xl mb-5">
            Surattinon
          </h1>
          <p className="text-gray-300">
            Description Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
          </p>
        </div>
        <div className="w-1/2 flex justify-center my-20 bg-white/10 backdrop-blur-lg backdrop-brightness-50 px-3 py-3 m-4 h-[200px] border-[1px] border-gray-500 rounded-[10px]">
          <Image src="/vercel.svg" width={300} height={300} alt="logo" />
        </div>
      </div>
    </main>
  );
}
