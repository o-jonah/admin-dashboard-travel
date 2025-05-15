import { Header, StatsCard, TripCard } from "components";


const Dashboard = () => {
    const user = { name: 'Jonah' };
      const dashboardStats = {
        totalUsers: 1240,
        usersJoined: {currentMonth: 218, lastMonth: 176},
        totalTrips: 3456,
        tripsCreated: { currentMonth: 150, lastMonth: 250},
        userRole: { total: 89, currentMonth: 45, lastMonth: 21},

      }

      const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header 
         title={`Welcome ${user?.name ?? 'Guest'} `}
         description="Track activity, trends and popular destinations in real time."
      />
      <section className="flex flex-col gap-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <StatsCard
              headerTitle="Total users"
              total={totalUsers}
              currentMonthCount={usersJoined.currentMonth}
              lastMonthCount={usersJoined.lastMonth}
            />
              <StatsCard
              headerTitle="Total Trips"
              total={totalTrips}
              currentMonthCount={tripsCreated.currentMonth}
              lastMonthCount={tripsCreated.lastMonth}
            />
              <StatsCard
              headerTitle="Active Users"
              total={userRole.total}
              currentMonthCount={userRole.currentMonth}
              lastMonthCount={userRole.lastMonth}
            />
         </div>
      </section>
      
      <TripCard />

    </main>
  )
}

export default Dashboard