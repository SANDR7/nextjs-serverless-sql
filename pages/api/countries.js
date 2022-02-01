import sqlQuery from "../../libs/sqlQuery";

const handler = async (_, res) => {
  try {
    const result = await sqlQuery.get(
      "SELECT id, name, iso2, iso3, region, subregion, tld FROM countries ORDER BY name ASC LIMIT 10"
    );

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handler;
