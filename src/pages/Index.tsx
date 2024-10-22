import React from 'react';
import ChangeRequestForm from '../components/ChangeRequestForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">フォーム</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Aプランへ変更するにあたり、下記ご回答ください。</h1>
            <ChangeRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;