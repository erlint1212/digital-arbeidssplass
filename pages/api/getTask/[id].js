const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAELYXgRRACBR-kCQacO33ORjThUVGXdcnvV_O0' })

const {
  Paginate,
  Get,
  Collection,
  Ref,
  Lambda,
  Documents,
  Map
} = fdb.query

export default async function handler(req,res) {
    const siteId = req.query.id
    //console.log('Test 2',id)
    console.log('Test 2',siteId)

    //try {
        const dbs = await client.query(
            Get(
                Ref(
                    Collection('Tasks'),
                    `${siteId}`
                )
            )
        )
        console.log(dbs)
        const newdbs = {
            ...dbs.data, id: dbs.ref.id
        }
        console.log(newdbs)
        res.status(200).json(newdbs)
    // }catch(error){
    //     res.status(500).json({Error: error.message})
    // }
}