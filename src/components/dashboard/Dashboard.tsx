
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

const ProjectTimeline = () => {
  const milestones = [
    { date: 'Mar 17', label: 'Kickoff Workshop', completed: true },
    { date: 'March 18', label: 'Data Collection', completed: true },
    { date: 'May 8', label: 'Initial Phase', completed: false },
    { date: 'May 9-July 12', label: 'Verification', completed: false },
    { date: 'July 13', label: 'Completion Reviews', completed: false },
    { date: 'August 21', label: 'Cycle Conclusion', completed: false },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize">Project Timeline</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
          2026 <ChevronDown size={16} />
        </button>
      </div>
      <div className="relative pt-4 pb-2">
        <div className="absolute top-[15px] left-0 right-0 h-3 bg-[#F5F8FB] rounded-full mx-2 overflow-hidden">
          <div className="absolute top-0 left-0 w-[35%] h-full bg-[#1EA54E]" />
        </div>
        <div className="relative flex justify-between">
          {milestones.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center w-32 relative z-10">
              <div className={`w-2.5 h-2.5 rounded-full border-0 border-white shadow-sm mb-6 ${m.completed ? 'bg-white' : 'bg-rose-500'}`} />
              <p className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize mb-1">{m.date}</p>
              <p className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#1D3557] capitalize leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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

const StatusBubble = ({ num, status }: { num: number, status: string }) => {
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
            {sub.items.map((item: any, idx: number) => (
              <StatusBubble key={idx} num={item.id} status={item.status} />
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
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4">{title}</h3>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <ResponsiveContainer width="100%" height={160} className="mb-4">
          <PieChart>
            <Pie data={data} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={70} outerRadius={85} dataKey="value" stroke="none">
              <Cell fill={color} />
              <Cell fill="#f1f5f9" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute bottom-4 flex flex-col items-center">
          <span className="font-['Cairo'] text-[44px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4">{score}%</span>
          <span className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize text-center mt-1">Basic Standards 2025</span>
        </div>
      </div>
    </div>
  );
};

const TopLeaders = () => {
  const leaders = [
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', score: 96 },
    { name: 'Sarah Al-Khaled', role: 'Beneficiary Perspective', score: 94 },
    { name: 'Mohammad Al-Mansour', role: 'IT Perspective', score: 92 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-6">Top Performing Perspective Leaders</h3>
      <div className="divide-y divide-[#E0E8ED]">
        {leaders.map((leader, i) => (
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
};

const RecentActivities = () => {
  const activities = [
    { text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', time: '5 Mins Ago' },
    { text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', time: '20 Mins Ago' },
    { text: 'New Criterion "5.3 Digital Identity" Was Created By Admin', time: '1 Hour Ago' },
  ];
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-6">Recent Activities</h3>
      <div className="divide-y divide-[#E0E8ED]">
        {activities.map((act, i) => (
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
};

const PerformanceChart = () => {
  const performanceData = [
    { name: 'Jan', val: 85 }, { name: 'Feb', val: 75 }, { name: 'Mar', val: 80 }, { name: 'Apr', val: 40 },
    { name: 'May', val: 85 }, { name: 'Jun', val: 78 }, { name: 'Jul', val: 55 }, { name: 'Aug', val: 85 },
    { name: 'Sept', val: 78 }, { name: 'Oct', val: 55 }, { name: 'Nov', val: 85 }, { name: 'Dec', val: 78 }
  ];
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-8">12-Month Performance</h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
            <Tooltip />
            <Bar dataKey="val" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const AuditReadiness = () => {
  const score = 80;
  const data = [{ value: score }, { value: 100 - score }];
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
      <h3 className="font-['Cairo'] text-[16px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize mb-4">Audit Readiness</h3>
      <div className="flex flex-col items-center justify-center relative mb-6">
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie data={data} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={70} outerRadius={90} dataKey="value" stroke="none">
              <Cell fill="#1EA54E" />
              <Cell fill="#F5F8FB" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute bottom-4 flex flex-col items-center">
          <span className="text-4xl font-bold text-slate-900">{score}%</span>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-[#E0E8ED] pt-6">
        <div className="text-center">
          <p className="font-['Cairo'] text-[24px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize">12</p>
          <p className="font-['Cairo'] text-[14px] font-normal leading-[16px] tracking-normal text-[#8597A8] capitalize mt-4">Overdue Stds</p>
        </div>
        <div className="text-center border-l border-[#E0E8ED]">
          <p className="font-['Cairo'] text-[24px] font-bold leading-[16px] tracking-normal text-[#1D3557] capitalize">5</p>
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

  const categories = [
    { title: "Strategy And Planning", percent: "97.78", subCategories: [
      { name: "Digital Transformation", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}] },
      { name: "Digital Governance", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'in-progress'}] },
      { name: "Enterprise Architecture", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}, {id: 4, status: 'completed'}] }
    ]},
    { title: "Organization And Culture", percent: "70.83", subCategories: [
      { name: "Digital Culture And Environment", items: [{id: 1, status: 'completed'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'completed'}] },
      { name: "Leadership Development", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}, {id: 4, status: 'completed'}] },
      { name: "Skills & Capacity Building", items: [{id: 1, status: 'in-progress'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'in-progress'}] }
    ]},
    { title: "Operations And Execution", percent: "80.00", subCategories: [
      { name: "Business Processes", items: [{id: 1, status: 'completed'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'in-progress'}, {id: 4, status: 'completed'}] }
    ]},
    { title: "Business Continuity", percent: "90.59", subCategories: [
      { name: "Risk Management", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}, {id: 4, status: 'completed'}, {id: 5, status: 'completed'}] },
      { name: "Business Continuity", items: [{id: 1, status: 'completed'}, {id: 2, status: 'not-started'}, {id: 3, status: 'not-started'}, {id: 4, status: 'completed'}, {id: 5, status: 'completed'}, {id: 6, status: 'not-started'}, {id: 7, status: 'completed'}] }
    ]},
    { title: "Information Technology", percent: "75.00", subCategories: [
      { name: "Support Systems", items: [{id: 1, status: 'fully-uploaded'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}, {id: 4, status: 'completed'}, {id: 5, status: 'completed'}] },
      { name: "IT Infrastructure", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}, {id: 4, status: 'completed'}, {id: 5, status: 'fully-uploaded'}, {id: 6, status: 'completed'}, {id: 7, status: 'completed'}] },
      { name: "Cloud Infrastructure", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'fully-uploaded'}] }
    ]},
    { title: "Comprehensive Governance", percent: "64.44", subCategories: [
      { name: "Governance Platforms", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}, {id: 4, status: 'not-started'}, {id: 5, status: 'completed'}, {id: 6, status: 'completed'}, {id: 7, status: 'completed'}, {id: 8, status: 'completed'}, {id: 9, status: 'completed'}] }
    ]},
    { title: "Channels And Services", percent: "100", subCategories: [
      { name: "Service Quality", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}] },
      { name: "Digital Channels", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'completed'}, {id: 4, status: 'completed'}] }
    ]},
    { title: "Beneficiary Centralization", percent: "60.00", subCategories: [
      { name: "User Engagement", items: [{id: 1, status: 'completed'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'in-progress'}, {id: 4, status: 'in-progress'}] },
      { name: "User Relationship", items: [{id: 1, status: 'completed'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'in-progress'}] },
      { name: "User Experience", items: [{id: 1, status: 'completed'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'completed'}, {id: 4, status: 'in-progress'}, {id: 5, status: 'completed'}] }
    ]},
    { title: "Government Data", percent: "87.50", subCategories: [
      { name: "Data Governance", items: [{id: 1, status: 'completed'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'in-progress'}] },
      { name: "Data Usage & Availability", items: [{id: 1, status: 'completed'}, {id: 2, status: 'in-progress'}, {id: 3, status: 'in-progress'}] },
      { name: "Open Data", items: [{id: 1, status: 'completed'}, {id: 2, status: 'completed'}, {id: 3, status: 'in-progress'}] }
    ]},
    { title: "Research And Innovation", percent: "17.65", subCategories: [
      { name: "Innovation", items: [{id: 1, status: 'delayed'}, {id: 2, status: 'delayed'}, {id: 3, status: 'delayed'}, {id: 4, status: 'delayed'}] },
      { name: "Creative Solutions", items: [{id: 1, status: 'in-progress'}, {id: 2, status: 'delayed'}] }
    ]}
  ];

  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-12 space-y-6">
      <ProjectTimeline />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <MetricCard label="Overall Progress" value="78.65%" icon={OverallProgressIcon} color="text-rose-500" />
        <MetricCard label="Total Criteria" value="95" icon={TotalCriteriaIcon} color="text-rose-500" />
        <MetricCard label="Completed Criteria" value="52" icon={CompletedCriteriaIcon} color="text-rose-500" />
        <MetricCard label="Evidence Documents" value="386" icon={EvidenceDocumentsIcon} color="text-rose-500" />
        <MetricCard label="Evidence (Completed)" value="302" icon={EvidenceCompletedIcon} color="text-rose-500" />
        <MetricCard label="Uploaded To DGA" value="258" icon={UploadedToDGAIcon} color="text-rose-500" />
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
        <ComplianceGauge score={65} title="Overall Compliance Score" color="#1EA54E" />
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
