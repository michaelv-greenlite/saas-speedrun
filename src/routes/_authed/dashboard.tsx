import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '@clerk/tanstack-react-start'

export const Route = createFileRoute('/_authed/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  const { userId } = useAuth()
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Protected Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your dashboard! This page is only accessible when you're signed in.
      </p>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-sm">Your User ID: <code className="bg-gray-200 px-2 py-1 rounded">{userId}</code></p>
      </div>
    </div>
  )
}