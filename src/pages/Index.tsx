import React, { useState } from 'react';
import ChangeRequestForm from '../components/ChangeRequestForm';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">プランを選択</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Aプランへ変更するにあたり、下記ご回答ください。</h2>
              <ChangeRequestForm onCancel={() => setIsOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Index;