let promise = null

export default ({ store }, inject) => {
  inject('auth', {
    user(){
      if(promise) {
        return promise
      }else{
        promise = new Promise(async (resolve)=>{
          if(store.state.user.user){
            return store.state.user.user
          }
          if(promise){
            return promise
          }
          const result = await store.dispatch("user/relogin")
          return resolve(result)
        })
        return promise
      }

    }
  });
};
