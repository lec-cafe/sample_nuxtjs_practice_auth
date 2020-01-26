export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  SET_USER(state, user){
    state.user = user
  }
}

export const actions = {
  async login({ commit }, form ) {
    const url = "/user"
    const response = await this.$axios.get(url, {
      headers: {
        Authorization: `token ${form.password}`
      }
    })
    if(form.email !== response.data.email) {
      throw new Error("ユーザ情報が異なります。")
    }
    commit("SET_USER", {
      token: form.password,
      display_name: response.data.name,
      avatar: response.data.avatar_url,
      account_name: response.data.login
    })
    localStorage.setItem("APP_TOKEN",form.password)
    this.$axios.setToken(form.password,"token")
  },
  async relogin({ state, commit }) {
    const token = localStorage.getItem("APP_TOKEN")
    if(!token){
      return false
    }
    const url = "/user"
    const response = await this.$axios.get(url, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    commit("SET_USER", {
      token: token,
      display_name: response.data.name,
      avatar: response.data.avatar_url,
      account_name: response.data.login
    })
    localStorage.setItem("APP_TOKEN",token)
    this.$axios.setToken(token,"token")
    return true
  }
}
