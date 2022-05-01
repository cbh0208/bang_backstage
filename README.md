koa小项目

数据库创建

````mysql
create database if not exists `pan` default charset=utf8;
use `pan`;
create table `users` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
    `username` varchar(32) NOT NULL COLLATE utf8_bin COMMENT 'username',
    `password` varchar(32) NOT NULL COMMENT 'password',
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`)
) engine=InnoDB default charset=utf-8
````