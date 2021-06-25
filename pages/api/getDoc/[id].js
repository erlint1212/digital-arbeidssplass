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
    const docId = req.query.id
    //console.log('Test 2',id)
    console.log('Test 2',docId)

    try {
        const dbs = await client.query(
            Get(
                Ref(
                    Collection('Dokumenter'),
                    `${docId}`
                )
            )
        )
        console.log(dbs.data)
        res.status(200).json(dbs.data)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
}