import React from "react";
import mysqlData from "../../libs/mysqlData";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <span>{country.currency_name}</span>
    </div>
  );
};

export const getStaticPaths = async () => {
  const names = await mysqlData.countries.all;

  const paths = names.map((name) => {
    return {
      params: { name: name.name.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  let name = context.params.name;
  let result = {};

  const country = await mysqlData.countries.single(name);

  result.country = country;
  return {
    props: result,
  };
};

export default Country;
