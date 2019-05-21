<template>
  <section class="wrapper">
    <b-card class="main-column" header="Todos" footer-tag="footer" no-body>
      <div class="body">
        <todos v-if="todos.length > 0" :todos="todos" />
        <empty-list v-if="todos.length === 0" />
      </div>
      <em slot="footer">
        <new-todo @add="onAdd" />
      </em>
    </b-card>
  </section>
</template>

<script>
import NewTodo from '~/components/NewTodo.vue'
import Todos from '~/components/Todos.vue'
import EmptyList from '~/components/EmptyList.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    NewTodo,
    EmptyList,
    Todos
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  created() {
    this.$watch(
      'todos',
      function(newTodos) {
        localStorage.setItem('todos', JSON.stringify(newTodos))
      },
      { deep: true }
    )
  },
  methods: mapMutations({
    onAdd: 'add'
  })
}
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  background: #ccc;
  background-image: url('~assets/bg.jpg');
  background-position: right;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.main-column {
  width: 30rem;
  min-width: 20rem;
  margin-right: 20%;
}

@media screen and (max-width: 400px) {
  .main-column {
    width: 100%;
    margin-right: 0;
  }
}

.body {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.card-footer {
  margin-top: auto;
}
</style>
