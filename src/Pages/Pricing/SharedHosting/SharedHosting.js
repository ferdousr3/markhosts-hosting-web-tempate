import React from 'react';
import PricingSubPageTitle from '../../../components/PageTitle/PricingSubPageTitle';
import data from '../../../data/data';
import DataRow from '../DataRow';

const SharedHosting = () => {
  return (
    <>
      <div className="mb-6">
        <PricingSubPageTitle title="Shared Hosting" />
      </div>
      <div className=" overflow-x-auto sm:rounded-sm">
        <table className="w-full text-sm text-left ">
          <thead className="text-sm  text-third md:text-base  ">
            <tr>
              <th className="px-6 py-4  md:pb-10">Plans</th>
              <th className="px-6 py-4  md:pb-10">Websites</th>
              <th className="px-6 py-4  md:pb-10">Accounts</th>
              <th className="px-6 py-4  md:pb-10">Domain</th>
              <th className="px-6 py-4  md:pb-10">Backups</th>
              <th className="px-6 py-4  md:pb-10">Price</th>
            </tr>
          </thead>
          <tbody className="my-24 shadow-3xl ">
            {data.plans.map((plan) => (
              <DataRow key={plan.id} plan={plan} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SharedHosting;
