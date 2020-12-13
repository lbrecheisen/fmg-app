import { Environment } from '../models/environment.model';

export const environment: Environment = {
  production: true,
  apps: {
    agent: {
      endpoint: 'https://yonyxweb.trafficmanager.net',
      instrumentation: { key: 'c100924b-da97-4cb4-bbe8-c514b5ecdb25' },
    },
  },
  azure: {
    communication: {
      connection: '',
    },
  },
};
