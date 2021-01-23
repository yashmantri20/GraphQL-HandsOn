const UserResolvers = require('./user');

module.exports = {
    Query:{
        ...UserResolvers.Query,
    },

    Mutation:{
        ...UserResolvers.Mutation,
    }
}