import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const PredictRedeemCard: React.FC = () => {
  return (
    <Card className="bg-vanta-blue-dark border border-vanta-border text-vanta-text-light rounded-xl">
      <CardHeader className="pb-0">
        <Tabs defaultValue="predict" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-vanta-blue-medium border border-vanta-border rounded-lg p-1">
            <TabsTrigger
              value="predict"
              className="data-[state=active]:bg-vanta-accent-blue data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md text-vanta-text-light"
            >
              Predict
            </TabsTrigger>
            <TabsTrigger
              value="redeem"
              className="data-[state=active]:bg-vanta-accent-blue data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md text-vanta-text-light"
            >
              Redeem
            </TabsTrigger>
          </TabsList>
          <TabsContent value="predict" className="mt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Aston Villa Vs Crystal Palace</h3>
              <div className="flex -space-x-2">
                <img src="/public/placeholder.svg" alt="Team 1" className="h-6 w-6 rounded-full border-2 border-vanta-blue-dark" />
                <img src="/public/placeholder.svg" alt="Team 2" className="h-6 w-6 rounded-full border-2 border-vanta-blue-dark" />
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full bg-vanta-active-bg border-vanta-accent-blue text-vanta-accent-blue hover:bg-vanta-active-bg/80 rounded-lg mb-4"
            >
              Aston Villa
            </Button>

            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium text-vanta-text-muted mb-2">
                Amount
              </label>
              <div className="flex items-center gap-2">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0"
                  className="flex-grow bg-vanta-blue-medium border border-vanta-border text-vanta-text-light rounded-lg px-3 py-2 focus:ring-vanta-accent-blue focus:border-vanta-accent-blue"
                />
                <span className="text-2xl font-bold text-vanta-text-light">₦ 0</span>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Button
                variant="outline"
                className="flex-1 bg-vanta-blue-dark border-vanta-border text-vanta-text-light hover:bg-vanta-active-bg hover:border-vanta-accent-blue hover:text-vanta-accent-blue rounded-md px-3 py-1 text-xs"
              >
                ₦ 100
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-vanta-blue-dark border-vanta-border text-vanta-text-light hover:bg-vanta-active-bg hover:border-vanta-accent-blue hover:text-vanta-accent-blue rounded-md px-3 py-1 text-xs"
              >
                ₦ 200
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-vanta-blue-dark border-vanta-border text-vanta-text-light hover:bg-vanta-active-bg hover:border-vanta-accent-blue hover:text-vanta-accent-blue rounded-md px-3 py-1 text-xs"
              >
                ₦ 500
              </Button>
            </div>

            <div className="flex items-center justify-between text-lg font-semibold">
              <span>To win</span>
              <span className="text-vanta-accent-blue">500 XP</span>
            </div>
          </TabsContent>
          <TabsContent value="redeem" className="mt-4">
            <p className="text-vanta-text-muted text-center py-8">Redeem functionality coming soon!</p>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
};

export default PredictRedeemCard;