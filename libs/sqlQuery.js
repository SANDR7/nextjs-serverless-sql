import mysql from "serverless-mysql";

const database = mysql({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
});

const insertQuery = async (query, values = []) => {
  try {
    const result = await database.query(query, values);
    await database.end();
    return result;
  } catch (error) {
      throw Error(error.message)
  }
};

const sqlQuery = {
    get: (query, values) => insertQuery(query, values),
    post: (query, values) => insertQuery(query, values),
};

export default sqlQuery;
