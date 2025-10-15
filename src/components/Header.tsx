import React from 'react';
import { Info, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SportLinkProps {
  label: string;
  isActive?: boolean;
}

const SportLink: React.FC<SportLinkProps> = ({ label, isActive }) => (
  <a
    href="#"
    className={cn(
      "relative px-4 py-2 text-vanta-text-light hover:text-vanta-accent-blue transition-colors",
      isActive && "text-vanta-accent-blue"
    )}
  >
    {label}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-vanta-accent-blue rounded-full" />
    )}
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-vanta-blue-dark border-b border-vanta-border">
      <nav className="flex items-center gap-4">
        <SportLink label="Football" isActive />
        <SportLink label="Basketball" />
        <SportLink label="Tennis" />
        <SportLink label="A.Football" />
        <SportLink label="Golf" />
      </nav>
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-1 text-vanta-text-light hover:text-vanta-accent-blue transition-colors">
          <Info className="h-4 w-4" />
          How it works
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-vanta-text-muted" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-2 rounded-lg bg-vanta-blue-medium border border-vanta-border text-vanta-text-light placeholder:text-vanta-text-muted focus:ring-vanta-accent-blue focus:border-vanta-accent-blue"
          />
        </div>
        <Button className="bg-transparent border border-vanta-accent-blue text-vanta-accent-blue hover:bg-vanta-accent-blue hover:text-white rounded-lg px-4 py-2">
          Login
        </Button>
        <Button className="bg-vanta-accent-blue text-white hover:bg-vanta-accent-blue/90 rounded-lg px-4 py-2">
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;