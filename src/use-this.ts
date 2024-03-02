import { faker } from '@faker-js/faker';
import { randomBytes } from 'crypto'
import User from './models/user';

async function create1000Users() {
    try {
        const batchOfUsers = []
        for (let i = 0; i < 10000; i++) {
            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName()
            const userName = `${firstName}${lastName[0].toUpperCase()}${lastName.slice(1, lastName.length)}`
            const password = 'password'
            const refreshToken = randomBytes(64).toString('base64')
            batchOfUsers.push({
                firstName,
                lastName,
                username: userName,
                password,
                refreshToken
            })
        }
        await Promise.all(batchOfUsers.map(async (user) => {
            const newUser = await User.create(user)
            return newUser.save()
        }))
    } catch (error) {
        throw error
    }
}

export default create1000Users