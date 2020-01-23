export const user = () => {
  return {
    user: {
      token: null,
      display_name: null,
      avatar: null,
      account_name: null
    }
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
  }
}
