import React from 'react';
import { Home, Search, Bell, Mail, User, Bookmark, List, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 border-r border-gray-700 bg-sidebar-bg flex flex-col"> {/* Apply custom sidebar background color */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dyad</h1>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <Home className="mr-2 h-5 w-5" />
              Home
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <Search className="mr-2 h-5 w-5" />
              Explore
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <Mail className="mr-2 h-5 w-5" />
              Messages
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <Bookmark className="mr-2 h-5 w-5" />
              Bookmarks
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <List className="mr-2 h-5 w-5" />
              Lists
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <User className="mr-2 h-5 w-5" />
              Profile
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <MoreHorizontal className="mr-2 h-5 w-5" />
              More
            </Button>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Post
        </Button>
        <div className="flex items-center mt-4 p-2 rounded-full hover:bg-gray-800 cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-white font-semibold">Shadcn</p>
            <p className="text-gray-500 text-sm">@shadcn</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;