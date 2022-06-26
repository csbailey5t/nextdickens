import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

import Header from "../components/Header";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>Digital Dickens Notes Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={"px-20 py-0 flex-1 flex-col justify-center items-center"}
      >
        <Header />
        <body>
          <div className={"relative aspect-w-3 aspect-h-1 h-[60vh] mt-12 m-auto"}>
            {/* it would be nice to actually have this image as a background with a text overlay on one side*/}
           <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Dickens_dream.jpg" 
            alt="Digital Dickens Notes Project" 
            layout="fill"
            objectFit="contain"
            />
          </div>
        </body>
        <div
          className={
            "flex items-center justify-center flex-wrap max-w-screen-lg mt-12"
          }
        >
          <Link href="david-copperfield">
            <a
              className={
                "m-4 p-6 text-left border-solid border-2 border-gray-200 rounded-lg w-2/4 transition-colors ease-in-out"
              }
            >
              <h2 className="text-2xl mb-4">David Copperfield &rarr;</h2>
              <p className="m-0 text-xl leading-normal">
                <Link href="david-copperfield">
                  <a>Working Notes</a>
                </Link>
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer
        className={
          "w-full h-24 border-solid border-2 border-gray-200 flex justify-center items-center"
        }
      >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center flex-grow"
        >
          Powered by{" "}
          <span className={"h-4 ml-2"}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
