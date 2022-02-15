<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name of Collection</label>
        <input v-model="form.name" class="form-control" />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create Collection
      </button>
    </form>
  </div>
</template>

<script>
import { createCollect } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: 'e' })

    const onSubmit = async () => {
      console.log(`Ca existe ca : ${form} |`)
      await createCollect(form.name)
      form.name = ''
    }

    return { form, onSubmit }
  }
}
</script>
