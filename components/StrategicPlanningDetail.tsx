
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  ClipboardCheck, 
  Clock, 
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Send
} from 'lucide-react';

interface StrategicPlanningDetailProps {
  onBack: () => void;
}

const StrategicPlanningDetail: React.FC<StrategicPlanningDetailProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence'>('overview');

  const evidenceData = [
    { id: '5.4.1.1', name: 'Digital_Transformation_Plan.Pdf', lead: 'Ahmed Khaled', preparer: 'Ahmed Khaled', date: '2025-08-01', due: '2025-08-01', status: 'Approved' },
    { id: '5.4.1.2', name: 'KPI_Framework.Xlsx', lead: 'Mona Hamed', preparer: 'Mona Hamed', date: '2025-08-01', due: '2025-08-01', status: 'Pending Review' },
    { id: '5.4.1.3', name: 'Roadmap_Version1.Docx', lead: 'Rami AlSharif', preparer: 'Rami AlSharif', date: '2025-08-01', due: '2025-08-01', status: 'Pending Review' },
  ];

  const comments = [
    { id: 1, user: 'Sara Ibrahim', initial: 'E', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
    { id: 2, user: 'Mona Hamed', initial: 'M', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
  ];

  const recentActivities = [
    { id: 1, text: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif', time: '5 Mins Ago' },
    { id: 2, text: 'KPI_Framework.Xlsx Uploaded By Mona Hamed', time: '20 Mins Ago' },
    { id: 3, text: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team', time: '1 Hour Ago' },
  ];

  const leaders = [
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', image: 'https://i.pravatar.cc/150?u=ahmed1' },
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', image: 'https://i.pravatar.cc/150?u=ahmed2' },
  ];

  const EvidenceTab = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              <th className="px-6 py-4">Document Number <ChevronUp size={12} className="inline ml-1 opacity-40" /></th>
              <th className="px-6 py-4">Document Name <ChevronUp size={12} className="inline ml-1 opacity-40" /></th>
              <th className="px-6 py-4">Document Lead <ChevronUp size={12} className="inline ml-1 opacity-40" /></th>
              <th className="px-6 py-4">Document Preparer <ChevronUp size={12} className="inline ml-1 opacity-40" /></th>
              <th className="px-6 py-4">Date <ChevronUp size={12} className="inline ml-1 opacity-40" /></th>
              <th className="px-6 py-4">Due Date <ChevronUp size={12} className="inline ml-1 opacity-40" /></th>
              <th className="px-6 py-4">Status <ChevronUp size={12} className="inline ml-1 opacity-40" /></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {evidenceData.map((row, idx) => (
              <tr key={idx} className="text-[11px] text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">{row.id}</td>
                <td className="px-6 py-4 text-[#16263e]">{row.name}</td>
                <td className="px-6 py-4">{row.lead}</td>
                <td className="px-6 py-4">{row.preparer}</td>
                <td className="px-6 py-4">{row.date}</td>
                <td className="px-6 py-4">{row.due}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    row.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-[#16263e] mb-6">Comments</h3>
          <div className="space-y-4 mb-6">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 rounded-xl border border-slate-100 relative group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                    {comment.initial}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs font-bold text-[#16263e]">{comment.user}</p>
                      <span className="text-[10px] font-medium text-slate-400">{comment.date}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <textarea 
              placeholder="Write your comment here..."
              className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-slate-200 min-h-[120px] resize-none"
            />
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#16263e] text-white rounded-lg text-xs font-bold hover:bg-[#1a2d4b] transition-all shadow-sm">
              <Send size={14} />
              Post Comment
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-[#16263e] mb-6">Recent Activities</h3>
          <div className="space-y-6">
            {recentActivities.map((act) => (
              <div key={act.id} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-slate-700 leading-snug truncate">
                    {act.text}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 mt-1">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-3 mb-6">
        <button 
          onClick={onBack}
          className="p-1 hover:bg-slate-200 rounded-lg transition-colors text-slate-500"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-base font-bold text-[#16263e]">Digital Transformation Strategic Planning</h2>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8 flex justify-between items-center">
        <div className="space-y-4">
          <span className="bg-[#f1f5f9] text-[#94a3b8] text-[11px] font-bold px-3 py-1.5 rounded-full border border-slate-200 inline-block uppercase tracking-wider">
            Strategy & Planning
          </span>
          <h1 className="text-[28px] font-bold text-[#16263e] tracking-tight">Digital Transformation Strategic Planning</h1>
          <p className="text-[#94a3b8] text-sm font-medium">
            Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals
          </p>
        </div>
        
        <div className="relative w-24 h-24 shrink-0 mr-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
            <circle cx="50" cy="50" r="42" stroke="#10b981" strokeWidth="8" fill="transparent" strokeDasharray="263.89" strokeDashoffset="0" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-black text-[#16263e]">100%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Evidence', val: 4, icon: FileText, color: 'text-rose-500 bg-rose-50' },
          { label: 'Under Review Evidence', val: 3, icon: Clock, color: 'text-rose-500 bg-rose-50' },
          { label: 'In Progress Evidence', val: 2, icon: ClipboardCheck, color: 'text-rose-500 bg-rose-50' },
          { label: 'Completed Evidence', val: 1, icon: CheckCircle2, color: 'text-rose-500 bg-rose-50' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${item.color}`}>
              <item.icon size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-none mb-1">{item.val}</p>
              <p className="text-[11px] font-bold text-[#94a3b8]">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-2 rounded-lg text-xs font-bold transition-all shadow-sm border ${
            activeTab === 'overview' 
              ? 'bg-white border-slate-200 text-[#16263e]' 
              : 'bg-slate-200/50 border-transparent text-[#94a3b8]'
          }`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('evidence')}
          className={`px-6 py-2 rounded-lg text-xs font-bold transition-all shadow-sm border ${
            activeTab === 'evidence' 
              ? 'bg-white border-slate-200 text-[#16263e]' 
              : 'bg-slate-200/50 border-transparent text-[#94a3b8]'
          }`}
        >
          Evidence
        </button>
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex overflow-hidden">
            <div className="w-64 border-r border-slate-100 p-4 space-y-3 shrink-0 bg-white">
              <div className="px-5 py-4 rounded-xl text-xs font-bold bg-[#f1f5f9] text-[#94a3b8]">
                Objective
              </div>
              <div className="px-5 py-6 rounded-xl text-xs font-bold bg-[#f8fafc] text-[#1e40af] border border-blue-50">
                Implementation Requirements
              </div>
              <div className="px-5 py-4 rounded-xl text-xs font-bold bg-[#f1f5f9] text-[#94a3b8]">
                Evidence Documents
              </div>
              <div className="px-5 py-4 rounded-xl text-xs font-bold bg-[#f1f5f9] text-[#94a3b8]">
                Related Regulations
              </div>
              <div className="px-5 py-4 rounded-xl text-xs font-bold bg-[#f1f5f9] text-[#94a3b8]">
                Scope
              </div>
            </div>

            <div className="flex-1 p-8 space-y-4 overflow-y-auto bg-white">
              <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-50">
                <p className="text-[#475569] text-[13px] font-medium leading-relaxed">
                  Develop A Digital Transformation Strategy Aligned With The Organization’s Strategy And The Objectives Of Saudi Vision 2030.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-50">
                <p className="text-[#475569] text-[13px] font-medium leading-relaxed">
                  Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:<br/>
                  A. The Organization’s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization’s Overall Strategy.<br/>
                  B. Strategic Initiatives, Programs, And Performance Indicators.<br/>
                  C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy’s Objectives.<br/>
                  D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy’s Objectives.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-50">
                <p className="text-[#475569] text-[13px] font-medium leading-relaxed">
                  Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-50">
                <p className="text-[#475569] text-[13px] font-medium leading-relaxed">
                  Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).
                </p>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-50">
                <p className="text-[#475569] text-[13px] font-medium leading-relaxed">
                  All Government Entities.
                </p>
              </div>
            </div>
          </div>

          {/* Leaders Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden">
            <h3 className="text-base font-bold text-[#16263e] mb-6">Leaders</h3>
            <div className="flex flex-wrap gap-4">
              {leaders.map((leader, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#f8fafc] border border-slate-100 p-4 pr-10 rounded-2xl min-w-[280px]">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#16263e] mb-0.5">{leader.name}</h4>
                    <p className="text-xs font-semibold text-[#94a3b8]">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EvidenceTab />
      )}
    </div>
  );
};

export default StrategicPlanningDetail;
