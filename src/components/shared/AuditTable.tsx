
import React from 'react';
import { AuditStatus, RiskLevel, AuditRecord } from '@/types';
import { MoreVertical, ExternalLink } from 'lucide-react';

const mockAudits: AuditRecord[] = [
  { id: '1', title: 'Q1 Financial Compliance', department: 'Finance', date: '2023-10-12', status: AuditStatus.COMPLETED, risk: RiskLevel.LOW, auditor: 'Alex Rivera' },
  { id: '2', title: 'Data Privacy Audit', department: 'IT / Security', date: '2023-10-14', status: AuditStatus.IN_PROGRESS, risk: RiskLevel.HIGH, auditor: 'James Wilson' },
  { id: '3', title: 'HR Policy Review', department: 'Human Resources', date: '2023-10-15', status: AuditStatus.FAILED, risk: RiskLevel.MEDIUM, auditor: 'Sarah Chen' },
  { id: '4', title: 'Supply Chain Audit', department: 'Operations', date: '2023-10-18', status: AuditStatus.PENDING, risk: RiskLevel.LOW, auditor: 'Michael Tan' },
  { id: '5', title: 'ISO 27001 Certification', department: 'Engineering', date: '2023-10-20', status: AuditStatus.COMPLETED, risk: RiskLevel.LOW, auditor: 'Alex Rivera' },
];

const getStatusStyles = (status: AuditStatus) => {
  switch (status) {
    case AuditStatus.COMPLETED: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    case AuditStatus.FAILED: return 'bg-rose-50 text-rose-600 border-rose-100';
    case AuditStatus.PENDING: return 'bg-slate-50 text-slate-600 border-slate-100';
    case AuditStatus.IN_PROGRESS: return 'bg-blue-50 text-blue-600 border-blue-100';
    default: return 'bg-slate-50 text-slate-600';
  }
};

const getRiskStyles = (risk: RiskLevel) => {
  switch (risk) {
    case RiskLevel.LOW: return 'text-emerald-600';
    case RiskLevel.MEDIUM: return 'text-amber-600';
    case RiskLevel.HIGH: return 'text-orange-600';
    case RiskLevel.CRITICAL: return 'text-rose-600';
    default: return 'text-slate-600';
  }
};

const AuditTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
            <th className="px-6 py-4">Audit Details</th>
            <th className="px-6 py-4">Department</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Risk Level</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Auditor</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {mockAudits.map((audit) => (
            <tr key={audit.id} className="hover:bg-slate-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">{audit.title}</span>
                  <span className="text-xs text-slate-400">ID: AUD-{audit.id}0029</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded text-xs font-medium">
                  {audit.department}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {new Date(audit.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </td>
              <td className="px-6 py-4">
                <span className={`text-sm font-medium ${getRiskStyles(audit.risk)}`}>
                  {audit.risk}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusStyles(audit.status)}`}>
                  {audit.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                    {audit.auditor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-sm text-slate-700">{audit.auditor}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all opacity-0 group-hover:opacity-100">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-all">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditTable;
