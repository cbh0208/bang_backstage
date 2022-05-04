import { Sequelize, Model, DataTypes, Optional } from 'sequelize';
import {mysqlConfig} from '../config'

const mysql=new Sequelize(mysqlConfig.database,mysqlConfig.username,mysqlConfig.password,{
    host:mysqlConfig.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
})

/** 用户 */
interface UserInstance extends Model{
    id:number;
    username:string;
    password:string
}
export const User=mysql.define<UserInstance>('user',{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING(32),
        unique:true
        
    },
    password:{
        type:DataTypes.STRING(32)
    }
},{
    tableName:'users',
    timestamps:false
})


