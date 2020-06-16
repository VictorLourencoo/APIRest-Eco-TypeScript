import knex from 'knex';
import path from 'path';
//config de conexao
const connection = knex({
  client: 'postgresql',
  connection: {
    filename: path.resolve(__dirname, 'database.postgres'),
  },
  useNullAsDefault: true,
});

export default connection;
