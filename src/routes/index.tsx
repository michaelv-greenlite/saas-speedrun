import { createFileRoute, Link } from "@tanstack/react-router";
import { SignedIn, SignedOut, useUser } from "@clerk/tanstack-react-start";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { user } = useUser();

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />

        <SignedOut>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Welcome to TanStack + Clerk</h1>
            <p>Sign in to access protected features</p>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">
              Welcome back, {user?.firstName || "User"}!
            </h1>
            <p>You're successfully authenticated</p>
            <div className="flex gap-4 justify-center mt-6">
              <Link
                to="/dashboard"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Go to Dashboard
              </Link>
              <Link
                to="/profile/$"
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              >
                View Profile
              </Link>
            </div>
          </div>
        </SignedIn>

        <div className="mt-8 space-x-4">
          <a
            className="text-[#61dafb] hover:underline"
            href="https://clerk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Clerk
          </a>
          <a
            className="text-[#61dafb] hover:underline"
            href="https://tanstack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn TanStack
          </a>
        </div>
      </header>
    </div>
  );
}
