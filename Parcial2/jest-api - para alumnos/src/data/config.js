import Sequelize  from "sequelize";

const sequelize = new Sequelize("db.sqlite", "", "", {
    dialect: "sqlite",
    host: "../src/data/db.sqlite"
});

export default sequelize