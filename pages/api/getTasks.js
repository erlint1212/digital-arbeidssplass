const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAELYXgRRACBR-kCQacO33ORjThUVGXdcnvV_O0' })

const {
  Paginate,
  Get,
  Collection,
  Lambda,
  Documents,
  Map
} = fdb.query

export default async function handler(req,res) {
    try {
        const dbs = await client.query(
            Map(
            Paginate (
                Documents(
                Collection('Tasks')
                )
            ),
            Lambda(x => Get(x))
            )
        )
        
        const newdbs = dbs.data.map((db) => {
            db.data.id = db.ref.id
            return db.data
        });
        // const dbsmap = dbs.data.map((Tasks) => {
        //     Tasks.id = Tasks.ref.id
        //     delete Tasks.ref
        //     return Tasks
        // })
        // const getId = dbs.data.map((Tasks) => {
        //     Tasks.data.id = Tasks.ref.id
        //     delete Tasks.ref
        //     return Tasks.data.id
        // })
        console.log('Test 2', newdbs)
        res.status(200).json(newdbs)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
}