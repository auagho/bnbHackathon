import { createPool } from "mysql2";

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306,
});

pool.getConnection((err, connection) => {
  if (err) console.log("🚨 Error connecting to db");
  else console.log("🚀 Connected to db!");
  connection.release();
});

const executeQuery = (query: string, arrParams: unknown[]) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (error, data) => {
        if (error) {
          console.log("🚨 Error in executing the query");
          reject(error);
        }
        console.log("✅ Executed the query successfully");
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default executeQuery;
