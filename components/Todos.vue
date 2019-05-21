<template>
  <b-list-group flush class="todos">
    <todo
      v-for="(todo, index) in todos"
      :key="index"
      :index="index"
      :todo="todo"
    />
  </b-list-group>
</template>
<script>
import Todo from './Todo.vue'
export default {
  components: {
    Todo
  },
  props: {
    todos: Array
  }
}
</script>
<style lang="scss" scoped>
.todos {
  flex: 1;
  overflow-y: auto;
}
.empty-list {
  font-size: 2rem;
  color: #ccc;
}
</style>
