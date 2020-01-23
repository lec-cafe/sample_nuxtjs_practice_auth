<template>
  <div>
    <section v-if="user">
      <h2>ようこそ、{{ user.display_name }} さん</h2>
    </section>
  </div>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$store.state.user.user
      }
    },
    mounted() {
      if (!this.user) {
        alert("ログインしてください。")
        this.$router.push("/")
      }
    }
  }
</script>

<style>
</style>
