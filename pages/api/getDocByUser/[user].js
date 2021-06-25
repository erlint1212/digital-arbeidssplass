const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAEL26r56ACBdO7gA3uDmgvDmbBmaeTotHc2jvl' })

const {
  Map,
  Get,
  Match,
  Index,
  Paginate,
  Lambda
} = fdb.query

export default async function handler(req,res) {
    //console.log('Test 2',id)
    const user = req.query.user

    try {
        const dbs = await client.query(
            Map(
                Paginate(
                    Match(
                        Index('Doc_by_userr'),
                        user
                    )
                ),
                Lambda(x => Get(x))
            )
        )
        
        const newdbs = dbs.data.map((db) => {
            db.data.id = db.ref.id
            return db.data
        });

        console.log(newdbs)
        res.status(200).json(newdbs)
     }catch(error){
         res.status(500).json({Error: error.message})
     }
}