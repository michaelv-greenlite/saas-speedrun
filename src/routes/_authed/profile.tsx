import { createFileRoute } from '@tanstack/react-router'
import { useUser } from '@clerk/tanstack-react-start'

export const Route = createFileRoute('/_authed/profile')({
  component: Profile,
})

function Profile() {
  const { user } = useUser()
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {user && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {user.imageUrl && (
              <img 
                src={user.imageUrl} 
                alt="Profile" 
                className="w-20 h-20 rounded-full"
              />
            )}
            <div>
              <h2 className="text-xl font-semibold">{user.fullName || 'No name set'}</h2>
              <p className="text-gray-600">{user.primaryEmailAddress?.emailAddress}</p>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Account Details</h3>
            <dl className="space-y-2">
              <div>
                <dt className="inline font-medium">User ID: </dt>
                <dd className="inline text-gray-600">{user.id}</dd>
              </div>
              <div>
                <dt className="inline font-medium">Created: </dt>
                <dd className="inline text-gray-600">
                  {new Date(user.createdAt!).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Last Updated: </dt>
                <dd className="inline text-gray-600">
                  {new Date(user.updatedAt!).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  )
}