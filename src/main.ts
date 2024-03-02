import app from './app'
import { connectDB } from './config/postgres'

const PORT = process.env.PORT || 3000

async function main() {
    try {
        await connectDB()
        app.listen(3000, () => {
            console.log(`listening on ${PORT}`)
        })
    } catch (error) {
        console.error(error)
        throw error
    }
}

main()