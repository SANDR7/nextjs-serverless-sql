import sqlQuery from "../../../libs/sqlQuery";
const getData = async (name) => {
  const result = await sqlQuery.get(
    `SELECT * FROM countries WHERE name = ? LIMIT 1`,
    [name.toString()]
  );
  return result;
};
const handler = async (req, res) => {
  const { name } = req.query;
  try {
    const data = await getData(name);
    
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "success", data }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handler;
