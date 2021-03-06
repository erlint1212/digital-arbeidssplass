const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAELYXgRRACBR-kCQacO33ORjThUVGXdcnvV_O0' })

const {
  Collection,
  Ref,
  Update
} = fdb.query

export default async function handler(req,res) {
    //try {
        const getData = req.body.data
        console.log(getData)
        const dbs = await client.query(
            Update(
                Ref(
                    Collection('Tasks'),
                    `${getData.id}`
                ),
                {
                    data : { reminder:  getData.reminder}
                }
            )
        )
        //console.log(dbs)
        res.status(200).json(dbs)
    // }catch(error){
    //     res.status(500).json({Error: error.message})
    // }
}