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
      <main className="container mx-auto">
        <div className="my-4 flex flex-col items-center gap-4">
          <div>
            <h1 className="text-4xl">Bob Ambrose</h1>
          </div>
          <div>
            <p>
              I'm a software engineer who likes to build mission-driven
              products.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
