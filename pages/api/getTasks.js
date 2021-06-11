const app = require('express')()

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

module.exports = async (req,res) => {
    try {
        const doc = await client.query(
            Map(
            Paginate (
                Documents(
                Collection('Tasks')
                )
            ),
            Lambda(x => Get(x))
            )
        )
        res.status(200).json(dbs.data)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
}

// app.get('/AllTask', async (req, res) => {
//     const doc = await client.query(
//       Map(
//         Paginate (
//           Documents(
//             Collection('Tasks')
//           )
//         ),
//         Lambda(x => Get(x))
//       )
//     )
//     res.send(doc)
//   })