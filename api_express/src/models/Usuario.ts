import {BeforeCreate, Column, DataType, Model, Table } from "sequelize-typescript";
import bcrypt from 'bcrypt'


@Table({tableName: 'usuarios'})
class Usuario extends Model{
    @Column({type:DataType.STRING(50), primaryKey:true, allowNull: false})
    declare email: string

    @Column({type:DataType.STRING(60), allowNull: false})
    declare password: string

    @BeforeCreate
    static async hashPassword(usuario: Usuario){
        usuario.password = await bcrypt.hash(usuario.password, 10)
    }
}

export default Usuario

//en db tanto atributos como las tablas se escriben en snake_case | en lenguajes de programacion usamos camelCase
