<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">Mypage</a>
      </div>
    </nav>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
  export default {
    async mounted() {
      const result = await this.$auth.user()
      if (!result) {
        alert("ログインが無効です。再ログインしてください。")
        return this.$router.push("/")
      }
    }

  }
</script>

<style>
  .container{
    max-width: 480px;
  }
</style>
