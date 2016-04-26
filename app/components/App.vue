<template>
  <div class="main-container">
    <nav class="navbar navbar-default" role="navigation">
     <div class="col-sm-7 col-sm-offset-2" style="margin-top: 15px">
       <search-github></search-github>
     </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SearchGithub from './SearchGithub'

export default {
  name: 'App',
  components: {
    SearchGithub
  }
}
</script>
