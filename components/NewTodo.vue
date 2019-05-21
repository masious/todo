<template>
  <div class="new-todo">
    <b-form @submit="handleAdd">
      <b-form-textarea
        v-model="title"
        rows="2"
        max-rows="6"
        class="title form-control"
        placeholder="What needs to be done?"
        @keyup.enter="handleAdd"
      ></b-form-textarea>
      <b-button variant="primary" class="add" type="submit">Add Todo</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    handleAdd(e) {
      e.preventDefault()

      this.$emit('add', {
        title: this.title,
        description: ''
      })

      this.title = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.new-todo {
  .title {
    // box-shadow: 2px 2px 2px #ccc inset;
  }
  .add {
    margin-top: 1rem;
    float: right;
  }
}
</style>
