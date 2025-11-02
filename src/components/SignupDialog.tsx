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

interface SignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToLogin: () => void;
}

const SignupDialog: React.FC<SignupDialogProps> = ({ open, onOpenChange, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    toast.success('Account created successfully!');
    onOpenChange(false);
    // Add actual signup logic here
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
            Join <span className="text-vanta-neon-blue">VantaWin</span>
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center">
            Create your account and start winning
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSignup} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-vanta-text-light">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-vanta-blue-dark border-none text-white placeholder:text-gray-500 focus-visible:ring-0 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-email" className="text-sm font-medium text-vanta-text-light">
              Email
            </Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-vanta-blue-dark border-none text-white placeholder:text-gray-500 focus-visible:ring-0 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password" className="text-sm font-medium text-vanta-text-light">
              Password
            </Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-vanta-blue-dark border-none text-white placeholder:text-gray-500 focus-visible:ring-0 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-sm font-medium text-vanta-text-light">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-vanta-blue-dark border-none text-white placeholder:text-gray-500 focus-visible:ring-0 rounded-xl"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-vanta-neon-blue text-vanta-blue-dark hover:bg-vanta-neon-blue/80 font-bold"
          >
            Sign Up
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-400">Already have an account? </span>
            <button
              type="button"
              onClick={() => {
                onOpenChange(false);
                onSwitchToLogin();
              }}
              className="text-vanta-neon-blue hover:underline font-medium"
            >
              Login
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
