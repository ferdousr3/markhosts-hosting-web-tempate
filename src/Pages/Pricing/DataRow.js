import React from 'react';

const DataRow = ({plan}) => {
  return (
    <>
      <tr
        key={plan.id}
        className="bg-white  border-b shadow-lg  font-normal text-sm md:text-lg mb-20"
      >
        <th className="px-4 py-6 md:py-8 md:mb-10">
          <h1 className="text-lg md:text-2xl text-main">{plan.name}</h1>
        </th>
        <td className="px-4 py-6 md:py-8 md:mb-10 text-third">
          {plan.websites}
        </td>
        <td className="px-4 py-6 md:py-8 md:mb-10 text-third">
          {plan.accounts}
        </td>
        <td className="px-4 py-6 md:py-8 md:mb-10 text-third">
          {plan.domain}
        </td>
        <td className="px-4 py-6 md:py-8 md:mb-10 text-third">
          {plan.backups}
        </td>
        <td className="px-4 py-6 md:py-8 md:mb-10">
          <h2 className="text-second text-sm md:text-lg font-bold">
            ${plan.price} <span className="text-base">/{plan.duration}</span>
          </h2>
        </td>
      </tr>
    </>
  );
};

export default DataRow;