import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get Stories based on the story category."
    getStories(type: StoryType): [Story!]!
  }

  enum StoryType {
    new
    best
    top
    ask
    show
    job
  }

  type Story {
    "Unique Id of the story."
    id: Int!
    "The username of the story's author."
    by: String
    "The title of the story."
    title: String
    "The ids of the story's comments, in ranked display order."
    kids: [Int]
    "Creation date of the story, in Unix Time."
    time: Int
    "The story's score."
    score: Int
    "The URL of the story."
    url: String
  }
`;