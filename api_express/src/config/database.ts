import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize({
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),

    define: {timestamps: false},
    models: [__dirname + '/../models/**/*.ts'] //independiente de la maquina 
                                               

})

export default db