
export enum AuditStatus {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
  FAILED = 'Failed',
  IN_PROGRESS = 'In Progress'
}

export enum RiskLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export interface AuditRecord {
  id: string;
  title: string;
  department: string;
  date: string;
  status: AuditStatus;
  risk: RiskLevel;
  auditor: string;
}

export interface StatsData {
  totalAudits: number;
  complianceRate: number;
  activeIssues: number;
  riskScore: number;
}
