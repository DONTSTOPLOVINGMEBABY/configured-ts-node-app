import Express from 'express';
import create1000Users from './use-this'
const app = Express();

app.get('/', (req, res) => {
  res.send('You have arrived at the node server');
});

app.get('/try-this', async (req, res) => {
  try {
    await create1000Users()
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

export default app