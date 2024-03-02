import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('something-new', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
})

async function connectDB() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
    } catch (error) {
        throw error
    }
}

export { connectDB, sequelize }
``