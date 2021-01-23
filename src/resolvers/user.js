module.exports = {
  Query: {
    users() {
      return [{
        id: '1',
        name: 'yash'
      }]
    },

    user(_,{id}) {
      console.log(id)
      return {
        id: id,
        name: 'yash'
      }
    }

  },

  Mutation:{
    createUser(_,{name}){
      return {
        id: '1',
        name: name
      }
    }
  }
}