CREATE DATABASE meu_primeiro_database;

ALTER DATABASE meu_primeiro_database RENAME TO teste_database;

DROP DATABASE teste_database;

-- -----------------------
CREATE DATABASE db_concessionaria;

-- Cria uma tabela para clientes armazenando 
-- id único, nome e telefone obrigatórios e email opcional
CREATE TABLE Clientes IF NOT EXISTS (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	email VARCHAR(100)
);

-- Cria uma nova coluna data de nascimento à tabela 'clientes'
ALTER TABLE Clientes ADD COLUMN birthday DATE;

-- Modifica o tipo de dado da coluna 'email' para torná-la obrigatória
ALTER TABLE Clientes ALTER COLUMN email SET NOT NULL;

-- Modifica o tipo de dado da coluna 'email' para torná-la obrigatória
ALTER TABLE Clientes ALTER COLUMN phone DROP NOT NULL;

-- Renomeia a coluna 'name' para 'full_name'
ALTER TABLE Clientes RENAME COLUMN name TO full_name;

-- Exclui a coluna 'birthday'
ALTER TABLE Clientes DROP COLUMN birthday;

DROP TABLE Clientes;