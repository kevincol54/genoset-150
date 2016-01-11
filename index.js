var gql = require('gql')

module.exports = gql.and([
  gql.exact('rs4244285', 'GG'),
  gql.exact('rs17878459', 'GG'),
  gql.exact('rs4986893', 'GG'),
  gql.exact('rs28399504', 'AA'),
  gql.exact('rs41291556', 'TT'),
  gql.exact('rs17884712', 'GG'),
  gql.exact('rs6413438', 'CC'),
  gql.exact('rs17879685', 'CC'),
  gql.exact('rs12248560', 'CC'),
  gql.or([
    gql.exact('rs5787121', 'GG'),
    gql.exact('rs5787121', 'II')
  ])
])
