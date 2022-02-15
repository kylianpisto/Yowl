<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>title</label>
        <input v-model="form.title" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Product</label>
        <input v-model="form.product" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create Category
      </button>
    </form>
  </div>
</template>

<script>
import { createCategory } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ title: '', product: '' })

    const onSubmit = async () => {
      await createCategory({ ...form })
      form.title = ''
      form.product = ''
    }

    return { form, onSubmit }
  }
}
</script>
