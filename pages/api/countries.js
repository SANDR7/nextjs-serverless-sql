import sqlQuery from "../../libs/sqlQuery";

const getData = async () => {
  const result = await sqlQuery.get(
      "SELECT id, name, iso2, iso3, region, subregion, tld FROM countries ORDER BY name ASC "
    );
    return result;
}

const handler = async (_, res) => {
  try {
    const data = await getData();

     res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({ message: 'success', data }))
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handler;
