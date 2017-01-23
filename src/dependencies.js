import alarmServiceFactory from './lib/services/alarm-service';
import storageFactory from './lib/modules/storage';

const storage = storageFactory(window.localStorage);
export default {
  alarmService: alarmServiceFactory(storage)
};