
import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Sparkles, User, LogOut, ChevronDown } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  toggleAI: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleAI }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-[#E0E8ED] px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="relative w-96 max-w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8597A8]" size={18} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 bg-[#F5F8FB] border border-[#E0E8ED] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
      </div>

      <div className="flex items-center gap-2">

        <button className="relative p-2 text-[#8597A8] hover:bg-[#F5F8FB] rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-1.5 pr-3 hover:bg-[#F5F8FB] rounded-full border border-transparent hover:border-[#E0E8ED] transition-all group"
          >
            <div className="w-8 h-8 bg-[#F5F8FB] rounded-full flex items-center justify-center text-[#8597A8] group-hover:bg-[#E0E8ED] transition-colors overflow-hidden">
              <User size={18} />
            </div>
            <div className="text-left hidden sm:block">
              <p className="font-['Cairo'] text-[14px] font-medium leading-[16px] tracking-normal text-[#1D3557] capitalize">Mohammed</p>
            </div>
            <ChevronDown size={14} className={`text-[#8597A8] transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Logout Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200 z-50">
              <div className="px-4 py-2 border-b border-slate-100 mb-1 sm:hidden">
                <p className="text-sm font-bold text-slate-900">Sarah Chen</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Sr. Compliance Lead</p>
              </div>
              <button 
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors text-left"
                onClick={() => {
                  console.log("Logout triggered");
                  setIsProfileOpen(false);
                }}
              >
                <LogOut size={16} className="text-slate-400 group-hover:text-red-600" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
