import { Sequelize } from "sequelize";

const db = new Sequelize("db_cake", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
