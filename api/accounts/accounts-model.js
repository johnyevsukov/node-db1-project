const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts')
  .where('id', id).first()
}

const create = async ({ name, budget }) => {
  // DO YOUR MAGIC
  const [id] = await db('accounts')
  .insert({ name, budget })
  return getById(id)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts')
  .where('id', id)
  .update({name: account.name, budget: account.budget})
  return getById(id)
}

const deleteById = async id => {
  // DO YOUR MAGIC
  const toBeDeleted = await getById(id)
  await db('accounts')
  .where({ id })
  .del()

  return toBeDeleted
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
