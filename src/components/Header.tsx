
import { Link } from '@tanstack/react-router'
import { SignedIn } from '@clerk/tanstack-react-start'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link 
            to="/"
            activeProps={{
              className: 'text-blue-600',
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
        </div>

        <SignedIn>
          <div className="px-2 font-bold">
            <Link 
              to="/dashboard"
              activeProps={{
                className: 'text-blue-600',
              }}
            >
              Dashboard
            </Link>
          </div>

          <div className="px-2 font-bold">
            <Link 
              to="/profile"
              activeProps={{
                className: 'text-blue-600',
              }}
            >
              Profile
            </Link>
          </div>
        </SignedIn>

        <div className="px-2 font-bold">

          <Link 
            to="/demo/start/server-funcs"
            activeProps={{
              className: 'text-blue-600',
            }}
          >
            Server Functions
          </Link>
          </div>
          

                <div className="px-2 font-bold">
          <Link to="/ui">UI Demos</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/start/server-funcs">Start - Server Functions</Link>
        </div>

        <div className="px-2 font-bold">
          <Link 
            to="/demo/start/api-request"
            activeProps={{
              className: 'text-blue-600',
            }}
          >
            API Request
          </Link>
        </div>
          
          
      </nav>
    </header>
  );
}
