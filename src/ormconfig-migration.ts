import { DataSource } from 'typeorm';
import './src/database/polyfill';

export default new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || '@Kumar321',
    database: process.env.POSTGRES_DATABASE || 'ppl_test',
    logging: true,
    entities: ['src/database/entities/*.ts'],
    migrations: ['migrations/*.ts'],
});
