import { useAuth } from "@/Hooks/context/AuthContext";

function MyRequests() {
  const { user } = useAuth();

  return (
    <div className="mx-auto flex flex-col min-h-screen max-w-[90%] items-center justify-center py-16 md:max-w-[85%] md:py-20 lg:max-w-[80%] 3xl:py-36">
      <h1>
        {user.role === "agent" ? "Client Requests Dashboard" : "My Requests"}
      </h1>
      {/* Content will differ based on role */}
      {user.role === "agent" ? (
        <p>View and manage all client requests</p>
      ) : (
        <p>View your submitted requests</p>
      )}
    </div>
  );
}

export default MyRequests;
