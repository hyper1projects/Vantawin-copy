"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { X } from 'lucide-react';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignup: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onOpenChange, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Login successful!');
    onOpenChange(false);
    // Add actual login logic here
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-vanta-blue-medium border-none text-vanta-text-light max-w-md rounded-3xl">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4 text-vanta-text-light" />
          <span className="sr-only">Close</span>
        </button>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Welcome Back to <span className="text-vanta-neon-blue">VantaWin</span>
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center">
            Login to continue your winning streak
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-vanta-text-light">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-vanta-blue-dark border-none text-white placeholder:text-gray-500 focus-visible:ring-0 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-vanta-text-light">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-vanta-blue-dark border-none text-white placeholder:text-gray-500 focus-visible:ring-0 rounded-xl"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-vanta-neon-blue text-vanta-blue-dark hover:bg-vanta-neon-blue/80 font-bold"
          >
            Login
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-400">Don't have an account? </span>
            <button
              type="button"
              onClick={() => {
                onOpenChange(false);
                onSwitchToSignup();
              }}
              className="text-vanta-neon-blue hover:underline font-medium"
            >
              Sign up
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
