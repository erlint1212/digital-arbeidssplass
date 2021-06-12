import { Identify } from 'faunadb'

const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAELYXgRRACBR-kCQacO33ORjThUVGXdcnvV_O0' })

const {
  Collection,
  Create
} = fdb.query

export default async function handler(req,res) {
    console.log('Test 2')
    const formData = req.body.data
    console.log(formData)

    try {
        const dbs = await client.query(
        Create(
                Collection('Tasks'),
                { data: {
                        text: formData.text,
                        day: formData.day,
                        reminder: formData.reminder
                    } 
                }
            )
        )
        res.status(200).json(dbs)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
}