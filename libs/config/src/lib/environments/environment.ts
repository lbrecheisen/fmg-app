import { Environment } from '../models/environment.model';

export const environment: Environment = {
  production: false,
  apps: {
    agent: {
      endpoint: 'http://localhost:4200',
      instrumentation: { key: '8f649925-6479-4886-91b1-613f4f31579b' },
    },
  },
  azure: {
    communication: {
      connection:
        'endpoint=https://fmg-com.communication.azure.com/;accesskey=7LnWFhpHHUOSFsm/YOOu37yXUKAbV7BlSeMVPiSrxdTl+c7YYZvNix4j+wWLhk9oNPp5b9wqrhvbykhbbP2R9g==',
    },
  },
};
