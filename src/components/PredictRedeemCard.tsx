import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PredictRedeemCard: React.FC = () => {
  return (
    <Card className="fixed top-0 right-0 h-screen w-80 bg-vanta-blue-dark border-l border-vanta-border text-vanta-text-light rounded-none p-4 z-50 overflow-y-auto">
      <CardHeader className="pb-0">
        <Tabs defaultValue="predict" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-vanta-blue-medium border border-vanta-border rounded-lg p-1">
            <TabsTrigger
              value="predict"
              className="data-[state=active]:bg-vanta-accent-blue data-[state=active]:text-vanta-blue-dark data-[state=active]:font-semibold rounded-md px-4 py-2 text-vanta-text-light"
            >
              Predict
            </TabsTrigger>
            <TabsTrigger
              value="redeem"
              className="data-[state=active]:bg-vanta-accent-blue data-[state=active]:text-vanta-blue-dark data-[state=active]:font-semibold rounded-md px-4 py-2 text-vanta-text-light"
            >
              Redeem
            </TabsTrigger>
          </TabsList>
          <TabsContent value="predict" className="mt-4">
            <CardTitle className="text-lg font-semibold mb-4">Predict & Win</CardTitle>
            <div className="space-y-4">
              <div>
                <label htmlFor="team-prediction" className="block text-sm font-medium text-vanta-text-muted mb-1">
                  Team Prediction
                </label>
                <Input
                  id="team-prediction"
                  placeholder="Enter team name"
                  className="bg-vanta-blue-medium border-vanta-border text-vanta-text-light"
                />
              </div>
              <div>
                <label htmlFor="points-bet" className="block text-sm font-medium text-vanta-text-muted mb-1">
                  Points to Bet
                </label>
                <Input
                  id="points-bet"
                  type="number"
                  placeholder="0"
                  className="bg-vanta-blue-medium border-vanta-border text-vanta-text-light"
                />
              </div>
              <Button className="w-full bg-vanta-accent-blue text-vanta-blue-dark hover:bg-vanta-accent-blue/90 font-semibold">
                PLACE PREDICTION
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="redeem" className="mt-4">
            <CardTitle className="text-lg font-semibold mb-4">Redeem Points</CardTitle>
            <div className="space-y-4">
              <div>
                <label htmlFor="redeem-amount" className="block text-sm font-medium text-vanta-text-muted mb-1">
                  Points to Redeem
                </label>
                <Input
                  id="redeem-amount"
                  type="number"
                  placeholder="0"
                  className="bg-vanta-blue-medium border-vanta-border text-vanta-text-light"
                />
              </div>
              <Button className="w-full bg-vanta-accent-purple text-white hover:bg-vanta-accent-purple/90 font-semibold">
                REDEEM
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardContent className="mt-6">
        {/* Additional content or ads can go here */}
      </CardContent>
    </Card>
  );
};

export default PredictRedeemCard;