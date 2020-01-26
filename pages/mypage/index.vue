<template>
  <div>
    <section v-if="user">
      <h2>ようこそ、{{ user.display_name }} さん</h2>
    </section>
  </div>
</template>

<script>
  export default {
    layout: "mypage",
    computed: {
      user() {
        return this.$store.state.user.user
      }
    },
    async mounted() {
      console.log("ログイン前", this.user)
      await this.$auth.user()
      console.log("ログイン後", this.user)
    }
  }
</script>

<style>

</style>
