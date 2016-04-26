<template>
  <div>
    <li v-if="bio.avatar_url" class="list-group-item"> <img :src="bio.avatar_url" class="img-rounded img-responsive" /></li>
    <li v-if="bio.name" class="list-group-item">Name: {{ bio.name }}</li>
    <li v-if="bio.login" class="list-group-item">Username: {{ bio.login }}</li>
    <li v-if="bio.email" class="list-group-item">Email: {{ bio.email }}</li>
    <li v-if="bio.location" class="list-group-item">Location: {{ bio.location }}</li>
    <li v-if="bio.company" class="list-group-item">Company: {{ bio.company }}</li>
    <li v-if="bio.followers" class="list-group-item">Followers: {{ bio.followers }}</li>
    <li v-if="bio.following" class="list-group-item">Following: {{ bio.following }}</li>
    <li v-if="bio.following" class="list-group-item">Public Repos: {{ bio.public_repos }}</li>
    <li v-if="bio.blog"class="list-group-item">Blog: <a :href="bio.blog"> {{ bio.blog }}</a></li>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    bio: {
      type: Object,
      required: true
    }
  }
}
</script>
