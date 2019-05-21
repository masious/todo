export const state = () => {
  let todos = []

  try {
    todos = JSON.parse(localStorage.getItem('todos')) || []
  } catch (e) {
    todos = []
  }

  return {
    todos
  }
}

export const mutations = {
  add(state, newTodo) {
    state.todos.push(newTodo)
  },

  changeField(state, { index, key, value }) {
    console.log(key, value) // eslint-disable-line no-console
    state.todos[index][key] = value
  }
}
