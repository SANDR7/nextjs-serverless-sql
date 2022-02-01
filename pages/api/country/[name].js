import sqlQuery from "../../../libs/sqlQuery";

const handler = async (req, res) => {
  const { name } = req.query;
  try {
    const result = await sqlQuery.get(`SELECT * FROM countries WHERE name = ? LIMIT 1`, [name.toString()]);
    return res.status(200).send(result[0]);
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

export default handler;
