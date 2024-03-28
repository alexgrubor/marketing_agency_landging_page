import AnalyticsData from "../AnalyticsData"

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <div className="bg-secondBg shadow-md rounded-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Total Clients</h2>
          <p className="text-xl font-bold">50</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Active Campaigns</h2>
          <p className="text-xl font-bold">10</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Campaign Performance</h2>
          <p className="text-xl font-bold">75%</p>
        </div>
      </div>
    </div>
    <AnalyticsData/>
  </div>
  )
}
export default Dashboard