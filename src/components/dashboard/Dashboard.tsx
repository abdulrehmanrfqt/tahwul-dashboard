
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import StrategicPlanningDetail from './StrategicPlanningDetail';
import {
  timelineMilestones,
  topLeaders,
  recentActivities,
  performanceData,
  auditReadinessData,
  metricCards,
  categories,
} from '../../data/dashboardData';
import overallprogressIcon from '@/assets/dashboard/overallprogress.svg';
import totalCriteriaIcon from '@/assets/dashboard/totalCriteria.svg';
import completedCriteriaIcon from '@/assets/dashboard/completedCriteria.svg';
import evidenceDocumentsIcon from '@/assets/dashboard/evidenceDocuments.svg';
import evidenceCompletedIcon from '@/assets/dashboard/evidenceCompleted.svg';
import uploadedtoDGAIcon from '@/assets/dashboard/uploadedtoDGA.svg';


const OverallProgressIcon = (_props: { size?: number }) => <img src={overallprogressIcon} alt="" className="w-6 h-6" />;
const TotalCriteriaIcon = (_props: { size?: number }) => <img src={totalCriteriaIcon} alt="" className="w-6 h-6" />;
const CompletedCriteriaIcon = (_props: { size?: number }) => <img src={completedCriteriaIcon} alt="" className="w-6 h-6" />;
const EvidenceDocumentsIcon = (_props: { size?: number }) => <img src={evidenceDocumentsIcon} alt="" className="w-6 h-6" />;
const EvidenceCompletedIcon = (_props: { size?: number }) => <img src={evidenceCompletedIcon} alt="" className="w-6 h-6" />;
const UploadedToDGAIcon = (_props: { size?: number }) => <img src={uploadedtoDGAIcon} alt="" className="w-6 h-6" />;

// --- Sub-components ---

const ProjectTimeline = () => (
    <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E0E8ED] shadow-sm mb-4">
      <div className="flex justify-between items-center gap-2 mb-2">
        <h3 className="font-['Cairo'] text-[14px] sm:text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize truncate min-w-0">Project Timeline</h3>
        <button className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 border border-[#E0E8ED] rounded-lg text-xs sm:text-sm font-medium text-[#8597A8] hover:bg-[#F5F8FB] shrink-0">
          2026 <ChevronDown size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
      <div className="relative pt-4 pb-2 -mx-1 sm:mx-0">
        <div className="absolute top-[15px] left-1 right-1 sm:left-2 sm:right-2 h-2.5 sm:h-3 bg-[#F5F8FB] rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-[35%] h-full bg-[#1EA54E]" />
        </div>
        <div className="relative flex justify-between gap-0 min-w-0 overflow-x-auto overflow-y-hidden sm:overflow-visible pb-1 sm:pb-0">
          {timelineMilestones.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center min-w-[72px] flex-shrink-0 sm:min-w-0 sm:flex-1 sm:w-32 px-0.5 sm:px-0 relative z-10">
              <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border-0 border-white shadow-sm mb-4 sm:mb-6 ${m.completed ? 'bg-white' : 'bg-rose-500'}`} />
              <p className="font-['Cairo'] text-[11px] sm:text-[14px] font-normal leading-[14px] sm:leading-[16px] tracking-normal text-[#8597A8] capitalize mb-0.5 sm:mb-1">{m.date}</p>
              <p className="font-['Cairo'] text-[11px] sm:text-[14px] font-normal leading-[14px] sm:leading-[16px] tracking-normal text-[#1D3557] capitalize leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
);

const MetricCard = ({ label, value, icon: Icon, color }: any) => (
  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col">
    <div className="flex justify-between items-center">
      <p className="w-[74px] h-4 font-['Cairo'] text-[24px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize">{value}</p>
      <div className={`p-2 rounded-lg shrink-0 ${color}`}>
        <Icon size={20} />
      </div>
    </div>
    <p className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-slate-400 capitalize mt-1">{label}</p>
  </div>
);

const StatusBubble = ({ num, status }: { num: number; status: string; key?: React.Key }) => {
  const statusColors: any = {
    'completed': 'bg-[#1EA54E] text-white',
    'in-progress': 'bg-[#F59F0A] text-white',
    'not-started': 'bg-slate-400 text-white',
    'partially-uploaded': 'bg-[#16263e] text-white',
    'fully-uploaded': 'bg-blue-500 text-white',
    'delayed': 'bg-rose-500 text-white',
  };

  return (
    <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center font-['Cairo'] text-[16px] font-normal leading-[16px] tracking-normal capitalize ${statusColors[status] || statusColors['not-started']}`}>
      {num}
    </div>
  );
};

const CategoryColumn = ({ title, percent, subCategories, onClick }: any) => (
  <div className="flex flex-col gap-3 min-w-[100px] flex-1">
    <button 
      onClick={onClick}
      className="bg-[#1D3557] p-2 rounded-xl text-center flex flex-col items-center justify-center h-24 hover:bg-[#1a2d4b] transition-colors group"
    >
      <h4 className="font-['Cairo'] text-[12px] font-bold leading-[16px] tracking-normal text-center text-white capitalize mb-2 px-1 group-hover:underline">{title}</h4>
      <span className="inline-flex items-center justify-center w-[63px] h-[22px] rounded-[10px] bg-[#98AEC01A] text-white font-['Cairo'] text-[14px] font-bold leading-[16px] tracking-normal capitalize px-[10px] box-border">
        {percent}%
      </span>
    </button>
    <div className="flex flex-col gap-3">
      {subCategories.map((sub: any, i: number) => (
        <div key={i} className="bg-[#F5F8FB] border border-#E0E8ED rounded-xl p-3">
          <p className="w-[82px] h-[32px] font-['Cairo'] text-[10px] font-normal leading-[16px] tracking-normal text-center text-[#1D3557] capitalize mb-3 flex items-center justify-center">
            {sub.name}
          </p>
          <div className="grid grid-cols-2 gap-2 place-items-center">
            {sub.items.map((item: { id: number; status: string }, idx: number) => (
              <StatusBubble key={`${i}-${idx}-${item.id}`} num={item.id} status={item.status} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ComplianceGauge = ({ score, title, color }: { score: number, title: string, color: string }) => {
  const data = [{ value: score }, { value: 100 - score }];
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-0">{title}</h3>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={data} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={88} outerRadius={100} dataKey="value" stroke="none" cornerRadius={8}>
              <Cell fill={color} />
              <Cell fill="#f1f5f9" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute bottom-0 flex flex-col items-center">
          <span className="font-['Cairo'] text-[44px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4">{score}%</span>
          <span className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize text-center mt-1">Basic Standards 2025</span>
        </div>
      </div>
    </div>
  );
};

const TopLeaders = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
    <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-6">Top Performing Perspective Leaders</h3>
    <div className="divide-y divide-[#E0E8ED]">
      {topLeaders.map((leader, i) => (
          <div key={i} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
            <div className="flex items-center gap-3">
              <img src={`https://i.pravatar.cc/150?u=${leader.name}`} className="w-12 h-12 rounded-full border border-[#E0E8ED] shrink-0" alt={leader.name} />
              <div>
                <p className="font-['Cairo'] text-[16px] font-medium leading-[22px] tracking-normal text-[#1D3557] capitalize mb-1">{leader.name}</p>
                <p className="font-['Cairo'] text-[16px] font-medium leading-[22px] tracking-normal text-[#8597A8] capitalize">{leader.role}</p>
              </div>
            </div>
            <span className="font-['Cairo'] text-[16px] font-bold leading-[22px] tracking-normal text-[#1D3557] capitalize shrink-0">{leader.score}%</span>
          </div>
      ))}
    </div>
  </div>
);

const RecentActivities = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
    <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-6">Recent Activities</h3>
    <div className="divide-y divide-[#E0E8ED]">
      {recentActivities.map((act, i) => (
          <div key={i} className="flex gap-3 items-start py-4 first:pt-0 last:pb-0">
            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 mt-1.5" />
            <div className="flex-1 flex items-start gap-3 min-w-0">
              <p className="font-['Cairo'] text-[16px] font-medium leading-[22px] tracking-normal text-[#1D3557] capitalize flex-1 min-w-0">{act.text}</p>
              <p className="font-['Cairo'] text-[12px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize shrink-0 whitespace-nowrap">{act.time}</p>
            </div>
          </div>
      ))}
    </div>
  </div>
);

const PerformanceChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="bg-white p-6 rounded-xl border border-[#E0E8ED] shadow-sm h-full">
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-8">12-Month Performance</h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData}>
            <defs>
              <linearGradient id="performanceBarGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(0, 120, 215, 0)" />
                <stop offset="100%" stopColor="#0078D7" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#8597A8', fontFamily: 'Cairo', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#8597A8', fontFamily: 'Cairo', fontSize: 12}} />
            <Tooltip cursor={false} />
            <Bar
              dataKey="val"
              fill="url(#performanceBarGradient)"
              radius={[4, 4, 0, 0]}
              barSize={32}
              onMouseEnter={(_data, index) => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {performanceData.map((_, index) => (
                <Cell key={index} stroke={hoveredIndex === index ? '#0078D7' : 'none'} strokeWidth={hoveredIndex === index ? 2 : 0} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const AuditReadiness = () => {
  const { score, overdueStds, missingEvidence } = auditReadinessData;
  const data = [{ value: score }, { value: 100 - score }];
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-0">Audit Readiness</h3>
      <div className="flex flex-col items-center justify-center relative mb-6">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={data} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={88} outerRadius={100} dataKey="value" stroke="none" cornerRadius={8}>
              <Cell fill="#1EA54E" />
              <Cell fill="#F5F8FB" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute bottom-0 flex flex-col items-center">
          <span className="font-['Cairo'] text-[44px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4">{score}%</span>
          <span className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize text-center">Readiness Level</span>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-[#E0E8ED] pt-6">
        <div className="text-center">
          <p className="font-['Cairo'] text-[24px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize">{overdueStds}</p>
          <p className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize mt-4">Overdue Stds</p>
        </div>
        <div className="text-center border-l border-[#E0E8ED]">
          <p className="font-['Cairo'] text-[24px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize">{missingEvidence}</p>
          <p className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize mt-4">Missing Evidence</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Dashboard component ---

const Dashboard: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (activeTab !== 'dashboard') {
    return (
      <div className="flex flex-col items-center justify-center h-full text-slate-400">
        <p className="text-lg font-medium tracking-tight">Accessing {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}...</p>
      </div>
    );
  }

  // Handle drill-down view
  if (selectedCategory) {
    return <StrategicPlanningDetail onBack={() => setSelectedCategory(null)} />;
  }

  const metricIcons = [OverallProgressIcon, TotalCriteriaIcon, CompletedCriteriaIcon, EvidenceDocumentsIcon, EvidenceCompletedIcon, UploadedToDGAIcon];

  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-12 space-y-6">
      <ProjectTimeline />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metricCards.map((card, i) => (
          <MetricCard key={i} label={card.label} value={card.value} icon={metricIcons[i]} color="text-rose-500" />
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h3 className="font-bold text-[#1D3557] text-[18px]">Progress Status</h3>
          <div className="flex flex-wrap gap-4 text-[14px] text-slate-500">
            <div className="flex items-center gap-1.5 text-[#1D3557]"><div className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Not Started</div>
            <div className="flex items-center gap-1.5 text-[#1D3557]"><div className="w-2.5 h-2.5 rounded-full bg-amber-500" /> In Progress</div>
            <div className="flex items-center gap-1.5 text-[#1D3557]"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Completed</div>
            <div className="flex items-center gap-1.5 text-[#1D3557]"><div className="w-2.5 h-2.5 rounded-full bg-[#16263e]" /> Partially Uploaded</div>
            <div className="flex items-center gap-1.5 text-[#1D3557]"><div className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Fully Uploaded</div>
            <div className="flex items-center gap-1.5 text-[#1D3557]"><div className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Delayed</div>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat, i) => (
            <CategoryColumn 
              key={i} 
              {...cat} 
              onClick={() => setSelectedCategory(cat.title)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ComplianceGauge score={65} title="Overall Compliance Score" color="#DB1F26" />
        <TopLeaders />
        <RecentActivities />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <PerformanceChart />
        </div>
        <AuditReadiness />
      </div>
    </div>
  );
};

export default Dashboard;
