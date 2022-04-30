koa小项目

数据库创建

````mysql
create database if not exists `pan` default charset=utf8;
use `pan`;
create table `user` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
    `name` varchar(20) NOT NULL COMMENT 'name',
) engine=InnoDB default charset=utf-8
````