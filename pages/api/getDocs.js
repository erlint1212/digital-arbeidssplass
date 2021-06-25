const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAEL26r56ACBdO7gA3uDmgvDmbBmaeTotHc2jvl' })

const {
  Paginate,
  Get,
  Collection,
  Lambda,
  Documents,
  Map
} = fdb.query

export default async function handler(req,res) {
    //try {
        const dbs = await client.query(
            Map(
            Paginate (
                Documents(
                Collection('Dokumenter')
                )
            ),
            Lambda(x => Get(x))
            )
        )
        const newdbs = dbs.data.map((db) => {
            db.data.id = db.ref.id
            return db.data
        });

        console.log('Test 2', newdbs)
        res.status(200).json(newdbs)
    // }catch(error){
    //     res.status(500).json({Error: error.message})
    // }
}