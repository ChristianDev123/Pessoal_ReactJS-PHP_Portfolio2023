import { DataTypes } from "sequelize";
import dbConfig from "../config";


export default dbConfig.define("certifications",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mainImage:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    links:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    pdfImages:{
        type: DataTypes.STRING,
        allowNull: true,
    }
});