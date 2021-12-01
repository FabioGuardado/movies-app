import React from 'react';
import FactsSectionProps from '../../../types/FactsProps';
import formatQuantities from '../../../utils/formatQuantities';

const FactsSection: React.FunctionComponent<FactsSectionProps> = ({ data }) => {
  return (
    <div className="mb-4 text-sm lg:text-base lg:ml-5 lg:my-auto">
      <h2 className="text-3xl font-bold mb-5">Additional facts</h2>
      <div className="text-center mb-2 lg:text-left">
        <h3 className="font-bold">Original title</h3>
        <span>{data.original_title}</span>
      </div>
      <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-4 lg:w-1/6 lg:grid-cols-1">
        <div className="text-center">
          <h3 className="font-bold">Status</h3>
          <span>{data.status}</span>
        </div>
        <div className="text-center">
          <h3 className="font-bold">Original language</h3>
          <span className="uppercase">{data.original_language}</span>
        </div>
        <div className="text-center">
          <h3 className="font-bold">Budget</h3>
          <span>{`$${formatQuantities(data.budget)}`}</span>
        </div>
        <div className="text-center">
          <h3 className="font-bold">Revenue</h3>
          <span>{`$${formatQuantities(data.revenue)}`}</span>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
