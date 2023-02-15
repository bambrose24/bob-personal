import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Bob Ambrose</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-4 flex-col">
          <h1 className="text-center text-4xl">Bob Ambrose</h1>
          <div className="">Hi</div>
        </div>
      </main>
    </>
  );
};

export default Home;
