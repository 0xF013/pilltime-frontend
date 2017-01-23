export default (localStorage) => ({
  async get(name) {
    const storedString = localStorage.getItem(name);
    if (!storedString) {
      return null;
    }
    return JSON.parse(storedString);
  },

  async set(name, item) {
    const stringToStore = JSON.stringify(item);
    localStorage.set(name, stringToStore);
  }
});