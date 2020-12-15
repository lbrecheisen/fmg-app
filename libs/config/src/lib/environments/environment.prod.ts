import { Environment } from '../models/environment.model';

export const environment: Environment = {
  production: true,
  apps: {
    agent: {
      endpoint: 'https://fmg-app.azurewebsites.net/',
      instrumentation: { key: '7047d0fb-bb33-4c05-ac6d-ed0350f843f5' },
    },
  },
  azure: {
    communication: {
      connection:
        'endpoint=https://fmg-communication.communication.azure.com/;accesskey=ixVyNTSJcSerR68QmIyClWD3myCXu2uAdYYlQaQJ4Havb2mCI3iVL7kn5NtVuq+N642aRuDtMuUxE331NsrDJQ==',
      from: '+18338380021',
    },
    function: {
      endpoint: 'https://fmg-function.azurewebsites.net/api',
      key: 'oFrVLaJgacUTSW7MimmNKosKr2aQ8d7vFhSM4UQhccLiKY9ApI7a0g==',
    },
  },
};
