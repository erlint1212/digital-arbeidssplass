const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAEL26r56ACBdO7gA3uDmgvDmbBmaeTotHc2jvl' })

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
    //console.log('Test 2',id)
    const user = req.user

    //try {
        const dbs = await client.query(
            Get(
                Ref(
                    Collection('Brukere'),
                    '301749543779697157'
                )
            )
        )

        // const newdbs = dbs.data.map((db) => {
        //     return db.data
        // });

        console.log(dbs)
        res.status(200).json(dbs)
    // }catch(error){
    //     res.status(500).json({Error: error.message})
    // }
}