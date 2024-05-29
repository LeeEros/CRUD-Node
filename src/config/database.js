require('dotenv').config();

module.exports = {
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
    dialectOptions: {
        connectTimeout: 60000, // Aumentando o tempo de timeout para 60 segundos
        timezone: 'America/Sao_Paulo'
    },
    timezone: 'America/Sao_Paulo'
};
