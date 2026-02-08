// Dashboard data and types

export interface TimelineMilestone {
  date: string;
  label: string;
  completed: boolean;
}

export interface Leader {
  name: string;
  role: string;
  score: number;
}

export interface Activity {
  text: string;
  time: string;
}

export interface PerformanceDataPoint {
  name: string;
  val: number;
}

export interface CategoryItem {
  id: number;
  status: string;
}

export interface SubCategory {
  name: string;
  items: CategoryItem[];
}

export interface Category {
  title: string;
  percent: string;
  subCategories: SubCategory[];
}

export interface MetricCardItem {
  label: string;
  value: string;
}

export interface AuditReadinessData {
  score: number;
  overdueStds: number;
  missingEvidence: number;
}

// --- Data ---

export const timelineMilestones: TimelineMilestone[] = [
  { date: 'Mar 17', label: 'Kickoff Workshop', completed: true },
  { date: 'March 18', label: 'Data Collection', completed: true },
  { date: 'May 8', label: 'Initial Phase', completed: false },
  { date: 'May 9-July 12', label: 'Verification', completed: false },
  { date: 'July 13', label: 'Completion Reviews', completed: false },
  { date: 'August 21', label: 'Cycle Conclusion', completed: false },
];

export const topLeaders: Leader[] = [
  { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', score: 96 },
  { name: 'Sarah Al-Khaled', role: 'Beneficiary Perspective', score: 94 },
  { name: 'Mohammad Al-Mansour', role: 'IT Perspective', score: 92 },
];

export const recentActivities: Activity[] = [
  { text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', time: '5 Mins Ago' },
  { text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', time: '20 Mins Ago' },
  { text: 'New Criterion "5.3 Digital Identity" Was Created By Admin', time: '1 Hour Ago' },
];

export const performanceData: PerformanceDataPoint[] = [
  { name: 'Jan', val: 85 }, { name: 'Feb', val: 75 }, { name: 'Mar', val: 80 }, { name: 'Apr', val: 40 },
  { name: 'May', val: 85 }, { name: 'Jun', val: 78 }, { name: 'Jul', val: 55 }, { name: 'Aug', val: 85 },
  { name: 'Sept', val: 78 }, { name: 'Oct', val: 55 }, { name: 'Nov', val: 85 }, { name: 'Dec', val: 78 },
];

export const auditReadinessData: AuditReadinessData = {
  score: 80,
  overdueStds: 12,
  missingEvidence: 5,
};

export const metricCards: MetricCardItem[] = [
  { label: 'Overall Progress', value: '78.65%' },
  { label: 'Total Criteria', value: '95' },
  { label: 'Completed Criteria', value: '52' },
  { label: 'Evidence Documents', value: '386' },
  { label: 'Evidence (Completed)', value: '302' },
  { label: 'Uploaded To DGA', value: '258' },
];

export const categories: Category[] = [
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
