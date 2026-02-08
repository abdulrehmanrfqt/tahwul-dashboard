
import React, { useState } from 'react';
import { ArrowLeft, ChevronUp, ChevronDown, Send } from 'lucide-react';
import totalEvidenceIcon from '@/assets/totalEvidence.svg';
import underReviewIcon from '@/assets/underReview.svg';
import inProgressIcon from '@/assets/inProgress.svg';
import completedEvidenceIcon from '@/assets/completedEvidence.svg';

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
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#F5F8FB] h-[40px]">
                <th className="px-3 sm:px-6 py-0 h-[40px] font-['Cairo'] text-[12px] font-normal leading-[12px] tracking-[0.02em] text-[#1D3557] text-center capitalize first:rounded-l-[10px] align-middle">
                  Document Number <ChevronUp size={12} className="inline ml-1 opacity-40" />
                </th>
                <th className="px-3 sm:px-6 py-0 h-[40px] font-['Cairo'] text-[12px] font-normal leading-[12px] tracking-[0.02em] text-[#1D3557] text-center capitalize align-middle">
                  Document Name <ChevronUp size={12} className="inline ml-1 opacity-40" />
                </th>
                <th className="px-3 sm:px-6 py-0 h-[40px] font-['Cairo'] text-[12px] font-normal leading-[12px] tracking-[0.02em] text-[#1D3557] text-center capitalize align-middle">
                  Document Lead <ChevronUp size={12} className="inline ml-1 opacity-40" />
                </th>
                <th className="px-3 sm:px-6 py-0 h-[40px] font-['Cairo'] text-[12px] font-normal leading-[12px] tracking-[0.02em] text-[#1D3557] text-center capitalize align-middle">
                  Document Preparer <ChevronUp size={12} className="inline ml-1 opacity-40" />
                </th>
                <th className="px-3 sm:px-6 py-0 h-[40px] font-['Cairo'] text-[12px] font-normal leading-[12px] tracking-[0.02em] text-[#1D3557] text-center capitalize align-middle">
                  Date <ChevronUp size={12} className="inline ml-1 opacity-40" />
                </th>
                <th className="px-3 sm:px-6 py-0 h-[40px] font-['Cairo'] text-[12px] font-normal leading-[12px] tracking-[0.02em] text-[#1D3557] text-center capitalize align-middle">
                  Due Date <ChevronUp size={12} className="inline ml-1 opacity-40" />
                </th>
                <th className="px-3 sm:px-6 py-0 h-[40px] font-['Cairo'] text-[12px] font-normal leading-[12px] tracking-[0.02em] text-[#1D3557] text-center capitalize last:rounded-r-[10px] align-middle">
                  Status <ChevronUp size={12} className="inline ml-1 opacity-40" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {evidenceData.map((row, idx) => (
                <tr key={idx} className="text-[10px] sm:text-[11px] text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize max-w-[120px] sm:max-w-none truncate align-middle">{row.id}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize max-w-[120px] sm:max-w-none truncate align-middle">{row.name}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize max-w-[120px] sm:max-w-none truncate align-middle">{row.lead}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize max-w-[120px] sm:max-w-none truncate align-middle">{row.preparer}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize max-w-[120px] sm:max-w-none truncate align-middle">{row.date}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize max-w-[120px] sm:max-w-none truncate align-middle">{row.due}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize max-w-[120px] sm:max-w-none truncate align-middle">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-[14px] whitespace-nowrap ${
                      row.status === 'Approved' ? 'bg-[#34C7591A] text-[#34C759]' : 'bg-[#FFCC001A] text-[#FFCC00]'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6">
          <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4 sm:mb-6">Comments</h3>
          <div className="space-y-4 mb-6">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 rounded-xl border border-[#E0E8ED] relative group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E0E8ED] flex items-center justify-center text-[14px] font-bold text-[#8597A8] shrink-0">
                    {comment.initial}
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
                    <p className="font-['Cairo'] text-[14px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize truncate">{comment.user}</p>
                    <span className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize shrink-0">{comment.date}</span>
                  </div>
                </div>
                <p className="mt-2 font-['Cairo'] text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize">{comment.text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <textarea 
              placeholder="Write your comment here..."
              className="w-full p-4 bg-white border border-[#E0E8ED] rounded-xl text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize focus:outline-none focus:ring-1 focus:ring-[#E0E8ED] min-h-[120px] resize-none"
            />
            <button className="font-['Cairo'] flex items-center gap-2 px-6 py-2.5 bg-[#1D3557] text-white rounded-lg text-[16px] leading-[20px] tracking-normal text-[#FFFFFF] capitalize hover:bg-[#1a2d4b] transition-all shadow-sm">
              <Send size={16} />
              Post Comment
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E0E8ED] shadow-sm p-4 sm:p-6 self-start">
          <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4 sm:mb-6">Recent Activities</h3>
          <div className="divide-y divide-[#E0E8ED]">
            {recentActivities.map((act) => (
              <div key={act.id} className="flex gap-3 items-start py-4 first:pt-0 last:pb-0">
                <div className="w-1.5 h-1.5 bg-[#DB1F26] rounded-full mt-1.5 shrink-0" />
                <div className="flex-1 flex items-start gap-3 min-w-0">
                  <p className="font-['Cairo'] text-[16px] font-medium leading-[20px] tracking-normal text-[#1D3557] capitalize flex-1 min-w-0">
                    {act.text}
                  </p>
                  <span className="font-['Cairo'] text-[12px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize shrink-0 whitespace-nowrap">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1600px] mx-auto px-0 sm:px-2 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-3 mb-4 sm:mb-6 min-w-0">
        <button 
          onClick={onBack}
          className="p-1 hover:bg-slate-200 rounded-lg transition-colors text-slate-500 shrink-0"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="font-['Cairo'] text-[14px] sm:text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize truncate">Digital Transformation Strategic Planning</h2>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="space-y-2 min-w-0">
          <span className="bg-[#F5F8FB] font-['Cairo'] text-[12px] font-medium leading-[22px] tracking-normal text-[#8597A8] capitalize px-3 py-1.5 rounded-full border border-[#E0E8ED] inline-block">
            Strategy & Planning
          </span>
          <h1 className="font-['Cairo'] text-[14px] sm:text-[16px] font-bold leading-[22px] tracking-normal text-[#1D3557] capitalize">Digital Transformation Strategic Planning</h1>
          <p className="font-['Cairo'] text-[12px] sm:text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize">
            Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals
          </p>
        </div>
        
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 shrink-0 self-center md:mr-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="#1EA54E" strokeWidth="8" fill="transparent" />
            <circle cx="50" cy="50" r="42" stroke="#1EA54E" strokeWidth="8" fill="transparent" strokeDasharray="263.89" strokeDashoffset="0" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-['Cairo'] text-[12px] sm:text-[16px] font-bold leading-[22px] tracking-normal text-[#1D3557] capitalize">100%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-4">
        {[
          { label: 'Total Evidence', val: 4, icon: totalEvidenceIcon, color: 'text-rose-500' },
          { label: 'Under Review Evidence', val: 3, icon: underReviewIcon, color: 'text-rose-500' },
          { label: 'In Progress Evidence', val: 2, icon: inProgressIcon, color: 'text-rose-500' },
          { label: 'Completed Evidence', val: 1, icon: completedEvidenceIcon, color: 'text-rose-500' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-[#E0E8ED] shadow-sm flex items-center gap-2 sm:gap-3 min-w-0">
            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl shrink-0 ${item.color}`}>
              <img src={item.icon} alt="" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
            </div>
            <div className="min-w-0">
              <p className="font-['Cairo'] text-[20px] sm:text-[24px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-0.5 sm:mb-2">{item.val}</p>
              <p className="font-['Cairo'] text-[11px] sm:text-[14px] font-normal leading-[18px] sm:leading-[22px] tracking-normal text-[#8597A8] capitalize line-clamp-2">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4 bg-[#E0E8ED80] p-1 rounded-lg w-fit">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-4 sm:px-6 py-2 rounded-lg text-[12px] sm:text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize transition-all shadow-sm border ${
            activeTab === 'overview' 
              ? 'bg-white border-[#E0E8ED] text-[#1D3557]' 
              : 'bg-[#E0E8ED80] border-transparent text-[#8597A8]'
          }`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('evidence')}
          className={`px-4 sm:px-6 py-2 rounded-lg text-[12px] sm:text-[14px] font-normal leading-[20px] tracking-normal text-[#1D3557] capitalize transition-all shadow-sm border ${
            activeTab === 'evidence' 
              ? 'bg-white border-[#E0E8ED] text-[#1D3557]' 
              : 'bg-[#E0E8ED80] border-transparent text-[#8597A8]'
          }`}
        >
          Evidence
        </button>
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row overflow-hidden">
            <div className="overflow-x-auto md:overflow-visible md:w-[168px] border-b md:border-b-0 md:border-r border-[#E0E8ED] p-3 md:p-4 shrink-0 bg-white">
              <div className="flex flex-row md:flex-col gap-2 md:gap-3 w-max md:w-full">
                <div className="flex items-center px-4 py-3 md:px-5 md:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] md:text-[16px] leading-[16px] tracking-normal capitalize whitespace-nowrap md:whitespace-normal shrink-0 md:shrink min-w-0">
                  Objective
                </div>
                <div className="flex items-center md:items-start px-4 py-3 md:px-5 md:py-6 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] md:text-[16px] leading-[16px] tracking-normal capitalize border border-blue-50 md:h-[200px] whitespace-nowrap md:whitespace-normal shrink-0 md:shrink min-w-0">
                  Implementation Requirements
                </div>
                <div className="flex items-center md:items-start px-4 py-3 md:px-5 md:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] md:text-[16px] leading-[16px] tracking-normal capitalize whitespace-nowrap md:whitespace-normal shrink-0 md:shrink min-w-0">
                  Evidence Documents
                </div>
                <div className="flex items-center md:items-start px-4 py-3 md:px-5 md:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] md:text-[16px] leading-[16px] tracking-normal capitalize md:h-[80px] whitespace-nowrap md:whitespace-normal shrink-0 md:shrink min-w-0">
                  Related Regulations
                </div>
                <div className="flex items-center px-4 py-3 md:px-5 md:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] md:text-[16px] leading-[16px] tracking-normal capitalize whitespace-nowrap md:whitespace-normal shrink-0 md:shrink min-w-0">
                  Scope
                </div>
              </div>
            </div>

            <div className="flex-1 p-3 sm:p-4 space-y-3 overflow-y-auto bg-white min-w-0">
              <div className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[16px] tracking-normal capitalize">
                Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.
              </div>
              <div className="bg-[#F5F8FA] px-4 sm:px-5 py-3 sm:py-4 rounded-xl h-[200px] overflow-y-auto">
                <p className="text-[#1D3557] text-[14px] sm:text-[16px] font-['Cairo'] leading-relaxed">
                  Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:<br/>
                  A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.<br/>
                  B. Strategic Initiatives, Programs, And Performance Indicators.<br/>
                  C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.<br/>
                  D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.
                </p>
              </div>

              <div className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[16px] tracking-normal capitalize">
                  Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.
              </div>

              <div className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[16px] tracking-normal capitalize h-[80px] overflow-y-auto">
                  Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).
              </div>

              <div className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F5F8FA] text-[#1D3557] font-['Cairo'] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[16px] tracking-normal capitalize">
                All Government Entities.
              </div>
            </div>
          </div>

          {/* Leaders Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 overflow-hidden">
            <h3 className="font-['Cairo'] text-[14px] sm:text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4 sm:mb-6">Leaders</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {leaders.map((leader, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-4 bg-[#f8fafc] border border-slate-100 p-3 sm:p-4 pr-6 sm:pr-10 rounded-xl sm:rounded-2xl min-w-0 flex-1 sm:flex-none sm:min-w-[280px]">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-['Cairo'] text-[14px] sm:text-[16px] font-medium leading-[22px] tracking-normal text-[#1D3557] capitalize mb-0.5 truncate">{leader.name}</h4>
                    <p className="font-['Cairo'] text-[12px] sm:text-[16px] font-medium leading-[20px] sm:leading-[22px] tracking-normal text-[#8597A8] capitalize truncate">{leader.role}</p>
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
