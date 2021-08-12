const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Burger {
    id: ID!
    bunOption: String!
    patties: [Patty!]
    cheeses: [Cheese!]
    tomatoes: [Tomato!]
    onions: [Onion!]
    gherkins: [Gherkin!]
  }
  type Patty {
    id: ID!
    pattyOption: String!
  }
  type Cheese {
    id: ID!
    cheeseOption: String!
  }
  type Tomato {
    tomatoOption: String!
  }
  type Onion {
    onionOption: String!
  }
  type Gherkin {
    gherkinOption: String!
  }
  type Query {
    burgers: [Burger!]
  }
`;

const burgers = [
  {
    id: 1,
    bunOption: "Normal"
  },
  {
    id: 2,
    bunOption: "Gluten-Free"
  }
];

const patties = [
  {
    id: 1,
    pattyOption: "Beef"
  },
  {
    id: 2,
    pattyOption: "Chicken"
  },
  {
    id: 3,
    pattyOption: "None"
  }
];

const cheeses = [
  {
    id: 1,
    cheeseOption: "Cheddar Cheese"
  },
  {
    id: 2,
    cheeseOption: "Manchego Cheese"
  },
  {
    id: 3,
    cheeseOption: "None"
  }
];

const tomatoes = [
  {
    id: 1,
    tomatoOption: "Yes"
  },
  {
    id: 2,
    tomatoOption: "None"
  }
];

const onions = [
  {
    id: 1,
    onionOption: "Yes"
  },
  {
    id: 2,
    onionOption: "None"
  }
];

const gherkins = [
  {
    id: 1,
    gherkinOption: "Yes"
  },
  {
    id: 2,
    gherkinOption: "None"
  }
];

const resolvers = {
  Query: {
    burgers() {
      return burgers;
    }
  },

  Burger: {
    patties(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return patties.filter((patty) => patty.branch === parent.branch);
    },
    cheeses(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return cheeses.filter((cheese) => cheese.branch === parent.branch);
    },
    tomatoes(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return tomatoes.filter((tomato) => tomato.branch === parent.branch);
    },
    onions(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return onions.filter((onion) => onion.branch === parent.branch);
    },
    gherkins(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return gherkins.filter((gherkin) => gherkin.branch === parent.branch);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🍔 Burger ready at ${url}`);
});
