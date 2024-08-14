import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-cqrqcgo8fa8c73d8p2cg-a.frankfurt-postgres.render.com',
    username: 'iryna',
    password: 'hu9eqjB3jbbftWkxYQ9R57VYTpAhitwz',
    database: 'db_contacts_q3eq',
    port: '5432',
    dialectOptions: {
        ssl: true,
    }
});

export default sequelize;
