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

app.listen(5000, () => console.log('API on http://localhost:5000'))

app.get('/Task/:id', async (req, res) => {
  const doc = await client.query(
    Get(
      Ref(
        Collection('Tasks'),
        req.params.id
      )
    )
    // .catch(e => res.send(e))
  )

  res.send(doc)

})

app.post('/Task', async (req, res) => {
  const NewTask = {
    text: "Take Test",
    day: "5th July 13:00",
    reminder: true,
    id: 2
  }

  const doc = await client.query(
    Create(
      Collection('Tasks'),
      { NewTask }
    )
  )
  res.send(doc)
})

app.get('/AllTask', async (req, res) => {
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
  res.send(doc)
})

app.get('/RemToggle/:id', async (req, res) => {
  const remToggle = {
    reminder: false
  }

  const doc = await client.query(
    Update(
      Ref(
        Collection('Tasks'),
        req.params.id
      ),
      { remToggle }
    )
  )
  res.send(doc)
})