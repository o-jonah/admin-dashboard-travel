import Header from "components/Header"

const Dashboard = () => {
    const user = { name: 'Jonah' };

  return (
    <main className="dashboard wrapper">
      <Header 
         title={`Welcome ${user?.name ?? 'Guest'} `}
         description="Track activity, trends and popular destinations in real time."
      />

      Dashboard Page content
    </main>
  )
}

export default Dashboard