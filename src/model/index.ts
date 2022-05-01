import {Sequelize,BIGINT,STRING} from 'sequelize';
import {mysql} from '../config'
const sequelize=new Sequelize(mysql.database,mysql.username,mysql.password,{
    host:mysql.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
})

/** 用户 */
export const User=sequelize.define('user',{
    id:{
        type:BIGINT,
        primaryKey:true
    },
    username:STRING(32),
    password:STRING(32)
},{
    timestamps:false
})


