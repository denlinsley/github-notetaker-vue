<template>
  <ul class="list-group">
    <!-- track-by? -->
    <li v-for="note in notes" class="list-group-item">{{ note }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true
    }
  }
}
</script>
