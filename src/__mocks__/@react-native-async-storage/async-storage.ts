export default {
  data: {},
  async setItem(key: string, data: string) {
    this.data[key] = data;
  },
  async getItem(key: string) {
    return this.data[key];
  },
  async removeItem(key: string) {
    this.data[key] = null;
  },
} as any;
