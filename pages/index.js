import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import mysqlData from "../libs/mysqlData";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {countries &&
          countries.map((country) => {
            return (
              <>
                <div key={country.id}>
                  <Link href={`/country/${country.name}`}>
                    <a>
                      <h2>{country.name}</h2>
                    </a>
                  </Link>
                  <p>{country.region}</p>
                </div>
                <hr />
              </>
            );
          })}
      </main>

      <style jsx>{`
        h2:hover {
          text-decoration: underline;
        }
      `}</style>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let result = {};

  const countries = await mysqlData.countries.all;

  result.countries = countries;
  return {
    props: result,
  };
};
