import { Agent } from '../../models/agents/agent.model';

export interface AgentState {
  agent: Agent | null;
  error: string | null;
  isLoading: boolean;
}
