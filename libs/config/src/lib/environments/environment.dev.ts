import { Environment } from '../models/environment.model';

export const environment: Environment = {
  production: false,
  apps: {
    agent: {
      endpoint: 'https://yonyxweb-dev.azurewebsites.net',
      instrumentation: { key: 'dd53d0f4-0368-4625-9a85-30c45cb4d03f' },
    },
  },
  azure: {
    communication: {
      connection: '',
    },
  },
};
