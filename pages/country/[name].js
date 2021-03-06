import React from "react";
import Head from 'next/head';

import useSWR from "swr";
import { useRouter } from "next/router";
import mysqlData from "../../libs/mysqlData";
// const fetcher = async (url) => {

//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// };

const Country = () => {
    const router = useRouter();
    const { name } = router.query;
    const fetcher = () => mysqlData.countries.single(name);

  const { data, error } = useSWR(`/api/country/${name}`, fetcher);

  console.log(data, error);
  return (
      <>
      <Head>
          <title>Country - {name}</title>
      </Head>
      <div>
          <button onClick={() => history.back()}>Back</button>
      </div>
    <div>
        <h1>{name}</h1>
      <div>
        <pre>{JSON.stringify(data?.data, null, 2)}</pre>
      </div>
    </div>
      </>
  );
};

export default Country;
