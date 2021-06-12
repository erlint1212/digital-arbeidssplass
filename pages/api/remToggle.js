const fdb = require('faunadb')
const client = new fdb.Client({ secret: 'fnAELYXgRRACBR-kCQacO33ORjThUVGXdcnvV_O0' })

const {
  Paginate,
  Get,
  Select,
  Match,
  Index,
  Create,
  Collection,
  Lambda,
  Var,
  Join,
  Ref,
  Call,
  Documents,
  Map,
  Update,
  If,
  Function: Fn
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
        console.log(newdbs)
        res.status(200).json(newdbs)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
}