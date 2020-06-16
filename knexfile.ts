import path from 'path';

module.exports = {
  //ambiente de desenvolvimento, localhost
  development: {
    client: 'postgresql',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.postgres'),
      database: 'vesteColeta',
      user: 'postgres',
      password: 've9967bl',

      //migrations:  criar tabelas e manter historico de tabelas, controle de versao do banco.
      //comando para criar a migration: npx knex migrate:make (nome)
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
  },
};
