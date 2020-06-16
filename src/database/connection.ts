import knex from 'knex';
import path from 'path';
const connection = knex({
  client: 'postgress',
  connection: {
    filename: path.resolve(__dirname, 'database.pg'),
  },
});

export default connection;
