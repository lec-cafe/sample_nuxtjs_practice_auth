<template>
  <section>
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="form.email" class="form-control" aria-label="Email" autocomplete="off">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="form.password" class="form-control" aria-label="パスワード" autocomplete="off">
        <small class="form-text text-muted">
          <a href="https://github.com/settings/tokens" target="_blank" rel="noopener">こちら</a>
          <span>から取得した アクセストークンを入力ください。</span>
        </small>
      </div>
      <a href="#" class="btn btn-primary" @click.prevent="submit">ログイン</a>
    </form>
  </section>
</template>

<script>

  export default {
    data(){
      return {
        form: {
          email: "",
          password: "",
        }
      }
    },
    methods: {
      submit() {
        this.$router.push("/mypage")
      }
    }
  }
</script>

<style>

</style>
