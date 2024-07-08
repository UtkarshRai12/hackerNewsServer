import { RESTDataSource } from "@apollo/datasource-rest";
import { StoryModel } from "../model";

export class StoryAPI extends RESTDataSource {
  baseURL = "https://hacker-news.firebaseio.com/v0/";

  async getStory(storyId: String) {
    return await this.get<StoryModel>(`item/${storyId}.json`);
  }

  async getStories(type: String) {
    try {
      const storyIds: number[] = await this.get(`${type}stories.json`);
      const storyPromises = storyIds.map((id) => this.getStory(id.toString()));
      return Promise.all(storyPromises);
    } catch (error) {
      console.error(`Error fetching ${type} stories:`, error);
      throw error;
    }
  }
}