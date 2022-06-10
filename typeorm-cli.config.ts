import { CoffeeRefactor1654897247615 } from 'src/migrations/1654897247615-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [],
  migrations: [CoffeeRefactor1654897247615],
});
