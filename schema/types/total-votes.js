const { GraphQLObjectType, GraphQLInt } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "TotalVotesType",

  fields: {
    up: { type: GraphQLInt },
    down: { type: GraphQLInt },
  },
});
