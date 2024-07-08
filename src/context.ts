import { StoryAPI } from "./datasource/story-api";

export type DataSourceContext = {
  dataSources: {
    storyAPI: StoryAPI;
  };
};