-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projIndividual;
use projIndividual;

truncate table usuario;
truncate table pontuacao;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(45)
);

select * from usuario;

create table quiz (
idQuiz int primary key auto_increment,
nome varchar(45),
qtdQuestoes int
);

insert into quiz values
(default, 'Quiz de Guitarra', 10);

select * from quiz;

create table pontuacao (
idPontuacao int,
fkUsuario int,
fkQuiz int,
foreign key (fkUsuario) references usuario (id),
foreign key (fkQuiz) references quiz (idQuiz),
primary key (idPontuacao, fkUsuario, fkQuiz),
dataQuiz datetime,
qtdAcertos int,
qtdErros int
);

select * from pontuacao;

create table duvida (
idDuvida int primary key,
nome varchar(45),
assunto varchar(45),
mensagem varchar(100)
);

select * from duvida;