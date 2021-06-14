const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAELYXgRRACBR-kCQacO33ORjThUVGXdcnvV_O0' })

const {
  Ref,
  Delete,
  Collection
} = fdb.query

export default async function handler(req,res) {
    const siteId = req.query.id
    //console.log('Test 2',id)
    console.log('Test 2',siteId)

    try {
        const dbs = await client.query(
            Delete(
                Ref(
                    Collection('Tasks'),
                    `${siteId}`
                )
            )
        )
        console.log(dbs)
        res.status(200).json(dbs)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
}