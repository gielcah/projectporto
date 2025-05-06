import React, { useState } from 'react';
import { CommissionType } from '../types';

interface CommissionProps {
  commissionTypes: CommissionType[];
}

const Commission: React.FC<CommissionProps> = ({ commissionTypes }) => {
  const [selectedTab, setSelectedTab] = useState<string>(commissionTypes[0].id);
  
  const selectedCommission = commissionTypes.find(comm => comm.id === selectedTab) || commissionTypes[0];

  return (
    <section id="commission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Commission Information</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          I'm currently accepting commissions for various types of artwork. Please review the information below before making a request.
        </p>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-wrap border-b">
            {commissionTypes.map((type) => (
              <button
                key={type.id}
                className={`px-6 py-4 font-medium text-sm focus:outline-none transition-colors ${
                  selectedTab === type.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedTab(type.id)}
              >
                {type.name}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6">
                <img
                  src={selectedCommission.sampleImage}
                  alt={`${selectedCommission.name} sample`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">Pricing</h4>
                  <ul className="space-y-2">
                    {selectedCommission.pricing.map((price, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{price.type}</span>
                        <span className="font-medium">${price.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">{selectedCommission.name}</h3>
                <p className="text-gray-700 mb-4">{selectedCommission.description}</p>
                
                <h4 className="font-bold text-lg mb-2">What's Included</h4>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                  {selectedCommission.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <h4 className="font-bold text-lg mb-2">Turnaround Time</h4>
                <p className="text-gray-700 mb-6">{selectedCommission.turnaround}</p>
                
                <a 
                  href="#contact" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  Request Commission
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-6">Terms of Service</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Payment Terms</h4>
              <p className="text-gray-700">
                50% non-refundable deposit required upfront to secure your commission slot. The remaining 50% is due upon completion before final files are delivered.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">Revision Policy</h4>
              <p className="text-gray-700">
                Each commission includes 2 rounds of minor revisions. Additional revisions or major changes will incur extra charges at an hourly rate.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">Commercial Usage</h4>
              <p className="text-gray-700">
                Standard commissions are for personal use only. Commercial rights can be purchased for an additional fee. Please inquire for commercial licensing rates.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">Cancellation Policy</h4>
              <p className="text-gray-700">
                If you need to cancel after work has begun, the initial deposit is non-refundable. Cancellations after the sketch phase will be charged based on work completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;