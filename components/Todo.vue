<template>
  <fragment>
    <b-list-group-item class="list-group-item" @click="openModal">
      {{ todoClone.title }}
    </b-list-group-item>
    <b-modal ref="todoModal" :title="todoClone.title" ok-only @ok="saveData">
      <b-form>
        <b-form-row class="pb-3">
          <b-col cols="3">
            Title
          </b-col>
          <b-col cols="9">
            <b-form-input v-model="todoClone.title" />
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="3">
            Description
          </b-col>
          <b-col cols="9">
            <b-form-textarea v-model="todoClone.description" />
          </b-col>
        </b-form-row>
      </b-form>
    </b-modal>
  </fragment>
</template>
<script>
export default {
  props: {
    index: Number,
    todo: Object
  },
  data() {
    return {
      todoClone: { ...this.todo }
    }
  },
  methods: {
    openModal() {
      this.$refs.todoModal.show()
    },
    saveData() {
      const { todoClone, $store, index } = this

      $store.commit('changeField', {
        index,
        key: 'title',
        value: todoClone.title
      })

      $store.commit('changeField', {
        index,
        key: 'description',
        value: todoClone.description
      })
    }
  }
}
</script>
