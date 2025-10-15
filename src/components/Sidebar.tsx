import React from 'react';
import { Home, Gamepad2, Wallet, BarChart3, Gift, Settings, FileText, HelpCircle, Mail, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  hasArrow?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ icon: Icon, label, isActive, hasArrow }) => (
  <a
    href="#"
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-vanta-text-light transition-all hover:bg-vanta-active-bg",
      isActive && "bg-vanta-active-bg text-vanta-accent-blue"
    )}
  >
    <Icon className="h-5 w-5" />
    {label}
    {hasArrow && <ChevronRight className="ml-auto h-4 w-4 text-vanta-text-muted" />}
  </a>
);

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-vanta-border bg-vanta-blue-dark p-4">
      <div className="flex items-center justify-center h-16 mb-6">
        <h1 className="text-2xl font-bold text-vanta-text-light">VANTA WIN</h1>
      </div>
      <nav className="grid items-start gap-2 text-sm font-medium">
        <NavLink icon={Home} label="Home" />
        <NavLink icon={Gamepad2} label="Games" isActive />
        <NavLink icon={BarChart3} label="Pools" />
        <NavLink icon={BarChart3} label="Leaderboard" />
        <NavLink icon={Wallet} label="Wallet" />
      </nav>
      <Separator className="my-6 bg-vanta-border" />
      <nav className="grid items-start gap-2 text-sm font-medium">
        <NavLink icon={Gift} label="Rewards Hub" hasArrow />
        <NavLink icon={Settings} label="User Settings" hasArrow />
        <NavLink icon={FileText} label="Terms of use" hasArrow />
        <NavLink icon={HelpCircle} label="Help & Information" hasArrow />
        <NavLink icon={Mail} label="Contact Us" hasArrow />
      </nav>
    </div>
  );
};

export default Sidebar;