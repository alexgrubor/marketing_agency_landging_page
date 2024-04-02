'use client'
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BsThreeDotsVertical } from "react-icons/bs";
const AnalyticsData = () => {
  const [chartData, setChartData] = useState([
    { name: 'Jan', clients: 10, campaigns: 5, revenue: 15000 },
    { name: 'Feb', clients: 12, campaigns: 7, revenue: 18500 },
    { name: 'Mar', clients: 8, campaigns: 6, revenue: 12000 },
    { name: 'Apr', clients: 15, campaigns: 9, revenue: 25000 },
    { name: 'May', clients: 14, campaigns: 8, revenue: 21000 },
    { name: 'Jun', clients: 18, campaigns: 10, revenue: 30000 },
  ]);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className=" ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
      <button className='absolute top-3 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-md' onClick={()=>setOpenMenu(!openMenu)}>
        <BsThreeDotsVertical size={20}/>
      </button>
      {openMenu && <div className='absolute top-12 right-2  bg-white border border-gray-200 p-4 rounded-md shadow-md z-10'>
        <ul>
          <li className="cursor-pointer hover:text-myPurple-700 p-2 rounded-md">Add new data</li>
          <li className="cursor-pointer hover:text-myPurple-700 p-2 rounded-md">View Google Analytics</li>
          <li className="cursor-pointer hover:text-myPurple-700 p-2 rounded-md">View Page Analytics</li>
        </ul>
      </div>
      }
      <div>
        <h2 className='text-xl md:text-3xl  mb-0 md:mb-3'>Clients Over Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="clients" stroke="#8884d8" strokeWidth={3}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div>
        <h2 className='text-xl md:text-3xl  mb-0 md:mb-3'>Active Campaigns</h2> 
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="campaigns" stroke="#82ca9d" strokeWidth={3} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
     
      <div>
        <h2 className='text-xl md:text-3xl  mb-0 md:mb-3'>Revenue (USD)</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="revenue" stroke="#ffc658"  strokeWidth={3}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  )
}
export default AnalyticsData