import { observable, action } from 'mobx';
import axios from 'axios';

class RedditStore {
  @observable posts = [];
  @observable category = 'new';

  @action
  async fetchPosts(category: string) {
    this.category = category;
    const response = await axios.get(`https://api.reddit.com/r/pics/${category}.json`);
    this.posts = response.data.data.children;
  }
}

export default new RedditStore();
