export interface Environment {
  production: boolean;
  apps: {
    agent: {
      endpoint: string;
      instrumentation: { key: string };
    };
  };
  azure: {
    communication: { connection: string; from: string };
    function: { endpoint: string };
  };
}
