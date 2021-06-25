import { Identify } from 'faunadb'

const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAEL26r56ACBdO7gA3uDmgvDmbBmaeTotHc2jvl' })

const {
  Collection,
  Create
} = fdb.query

export default async function handler(req,res) {
    console.log('Test 2')
    const formData = req.body
    console.log(formData)

    try {
        const dbs = await client.query(
        Create(
                Collection('Dokumenter'),
                {data: formData}
            )
        )
        res.status(200).json(dbs)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
}