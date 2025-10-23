import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const RightSidebar = () => {
  return (
    <aside className="w-80 p-4 border-l border-gray-700 bg-right-sidebar-bg flex flex-col"> {/* Apply custom right sidebar background color */}
      <div className="mb-4">
        <Input placeholder="Search Dyad" className="bg-gray-800 border-gray-700 text-white" />
      </div>

      <Card className="mb-4 bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-lg">Subscribe to Premium</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to unlock new features and if eligible, receive a share of ads revenue.
          </p>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Subscribe
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-lg">Trends for you</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3">
            <p className="text-gray-500 text-sm">Trending in India</p>
            <p className="font-semibold">#IPL2024</p>
            <p className="text-gray-500 text-sm">1.2M posts</p>
          </div>
          <div className="mb-3">
            <p className="text-gray-500 text-sm">Politics · Trending</p>
            <p className="font-semibold">#Elections</p>
            <p className="text-gray-500 text-sm">500K posts</p>
          </div>
          <div>
            <p className="text-blue-500 text-sm hover:underline cursor-pointer">Show more</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default RightSidebar;