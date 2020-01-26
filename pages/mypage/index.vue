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
    async mounted() {
      const result = await this.$store.dispatch("user/relogin")
      if (!result) {
        alert("ログインが無効です。再ログインしてください。")
        return this.$router.push("/")
      }
    }
  }
</script>

<style>

</style>
