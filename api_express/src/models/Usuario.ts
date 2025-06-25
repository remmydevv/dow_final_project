import { Column, DataType, Model, Table } from "sequelize-typescript";



@Table({tableName: 'usuarios'})
class Usuario extends Model{
    @Column({type:DataType.STRING(50), primaryKey:true, allowNull: false})
    declare email: string

    @Column({type:DataType.STRING(60)})
    declare password: string
}

export default Usuario

//en db tanto atributos como las tablas se escriben en snake_case | en lenguajes de programacion usamos camelCase
