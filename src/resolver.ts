// import { Resolvers } from "./types";

export const resolvers= {
  Query: {
    getStories: (_, { type }, { dataSources }) => {
      return dataSources.storyAPI.getStories(type);
    },
  },
};