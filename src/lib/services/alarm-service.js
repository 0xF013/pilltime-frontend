export default (storage) => ({
  async loadAll() {
    const alarms = await storage.get('alarms');
    return alarms || [];
  },

  async create(payload) {
    const alarms = await this.loadAll();
    const alarm = { ...payload, id: +new Date() };
    alarms.push(alarm);
    await storage.set('alarms', alarms);
    return alarm;
  }
});