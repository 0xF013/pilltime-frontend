function parseIngestion(ingestionTime) {
  const [hours, minutes] = ingestionTime.split(':').map(n => parseInt(n, 10));
  return hours * 60 + minutes;
}

export default (storage) => ({
  async loadAll() {
    const alarms = await storage.get('alarms');
    if (!alarms) {
      return [];
    }
    return alarms.sort((a, b) => parseIngestion(a.ingestionTime) > parseIngestion(b.ingestionTime))
  },

  async create(payload) {
    const alarms = await this.loadAll();
    const alarm = { ...payload, id: +new Date() };
    alarms.push(alarm);
    await storage.set('alarms', alarms);
    return alarm;
  }
});