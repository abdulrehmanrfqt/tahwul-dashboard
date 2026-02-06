import React from 'react';
import { 
  Home, 
  Activity, 
  LayoutGrid, 
  FileText, 
  BarChart3, 
  Users
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'perspectives', name: 'Perspectives', icon: Activity },
    { id: 'tasks', name: 'Tasks', icon: LayoutGrid },
    { id: 'documents', name: 'Documents', icon: FileText },
    { id: 'reports', name: 'Reports', icon: BarChart3 },
    { id: 'users', name: 'Users & Roles', icon: Users },
  ];

  return (
    <aside 
      className={`bg-[#16263e] transition-all duration-300 ease-in-out flex flex-col relative ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Sidebar Toggle Button - Top Positioned */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-5 top-3.5 w-10 h-10 bg-[#f1f5f9] border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all shadow-md z-50 hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
      >
        <img 
          src="https://i.ibb.co/0yhg9wHD/hugeicons-arrow-left-05.png" 
          alt="Toggle" 
          className={`w-5 h-5 transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Brand Logo Section */}
      <div className={`p-4 transition-all duration-300 flex items-center ${isOpen ? 'justify-start' : 'justify-center'}`}>
        {isOpen ? (
          <div className="animate-in fade-in duration-500 w-full pr-4">
            <img 
              src="https://tahwul.com/wp-content/uploads/2024/10/Tahwul_02.png" 
              alt="TAHWUL Logo"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="flex items-start gap-1">
                      <div class="w-8 h-8 bg-red-600" style="clip-path: polygon(100% 0, 0 0, 100% 100%)"></div>
                      <div class="flex flex-col">
                        <span class="text-white text-xl font-black leading-none tracking-tight">TAHWUL</span>
                        <span class="text-blue-400 text-[6px] font-bold uppercase tracking-widest mt-0.5">Enabling Digital Transformation</span>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
        ) : (
          <div className="flex justify-center animate-in zoom-in duration-300 py-4">
             <div className="relative w-8 h-8">
               <div className="absolute inset-0 bg-red-600" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
             </div>
          </div>
        )}
      </div>

      <nav className="flex-1 py-4 px-3 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? 'bg-[#2b3c54] text-white' 
                  : 'text-slate-400 hover:bg-[#202f4a] hover:text-slate-200'
              } ${!isOpen ? 'justify-center px-0' : ''}`}
            >
              <item.icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'} strokeWidth={1.5} />
              {isOpen && <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;