<template>
  <div class="col-sm-12">
    <form @submit.prevent="handleSubmit">
      <div class="form-group col-sm-7">
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="form-group col-sm-5">
        <button type="submit" class="btn btn-block btn-primary">Search Github</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },

  methods: {
    handleSubmit() {
      // router kind of clunky, must name the route to have a dynamic segment (params)?
      this.$router.go({ 
        name: 'Profile', 
        params: { username: this.username } 
      })
      this.username = ''
    }
  }
}
</script>

