import { useAuth } from "@/Hooks/context/AuthContext";

function RequestChange() {
  const { user } = useAuth();

  return (
    <div className="mx-auto flex min-h-screen max-w-[90%] items-center justify-center py-16 md:max-w-[85%] md:py-20 lg:max-w-[80%] 3xl:py-36">
      <div className="flex w-full flex-col gap-10 rounded-3xl bg-white p-8 shadow-2xl md:p-12">
        {/* Header Section */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            <span className="text-nouris">Request </span>
            Changes
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            {user.role === "agent"
              ? "Submit change requests on behalf of clients"
              : "Request changes to your bookings"}
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="space-y-6 rounded-xl border-2 border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Current Ticket Information
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Passenger Name */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Passenger Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                  placeholder="(No change or new name)"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Ex: Is passenger change allowed?
                </p>
              </div>

              {/* Booking Number */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Booking Number
                </label>
                <input
                  type="text"
                  defaultValue="125225"
                  readOnly
                  className="w-full rounded-xl border-2 border-gray-200 bg-gray-100 p-3 text-lg"
                />
              </div>

              {/* Route */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Route
                </label>
                <input
                  type="text"
                  defaultValue="ALG-MAR"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                />
                <p className="mt-1 text-sm text-gray-500">
                  [New destination if changing]
                </p>
              </div>

              {/* Departure Date */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Departure Date
                </label>
                <input
                  type="date"
                  defaultValue="2025-02-22"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                />
                <p className="mt-1 text-sm text-gray-500">
                  [New desired date]
                </p>
              </div>

              {/* Return Date */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Return Date
                </label>
                <input
                  type="date"
                  defaultValue="2025-02-30"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                />
                <p className="mt-1 text-sm text-gray-500">
                  [New desired date]
                </p>
              </div>

              {/* Ticket Type */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Ticket Type
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                  placeholder="(No change or new type)"
                />
              </div>

              {/* Cabin/Seat */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Cabin/Reserved Seat
                </label>
                <input
                  type="text"
                  defaultValue="A4"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                />
                <p className="mt-1 text-sm text-gray-500">
                  [New desired cabin/seat]
                </p>
              </div>

              {/* Registered Vehicle */}
              <div className="space-y-1">
                <label className="text-lg font-medium text-gray-700">
                  Registered Vehicle
                </label>
                <input
                  type="text"
                  defaultValue="CITREON-C4"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                />
                <p className="mt-1 text-sm text-gray-500">
                  New registration
                </p>
              </div>

              {/* Other Services */}
              <div className="space-y-1 md:col-span-2">
                <label className="text-lg font-medium text-gray-700">
                  Other Reserved Services
                </label>
                <input
                  type="text"
                  defaultValue="*******"
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                />
                <p className="mt-1 text-sm text-gray-500">
                  [New services or cancellation]
                </p>
              </div>

              {/* Agent Phone (conditionally shown) */}
              {user.role === "agent" && (
                <div className="space-y-1">
                  <label className="text-lg font-medium text-gray-700">
                    Agent Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                    placeholder="Agent phone number"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Requested Changes */}
          <div className="space-y-1">
            <label className="text-lg font-medium text-gray-700">
              Requested Changes
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
              placeholder="Describe in detail the changes you want to make..."
            />
          </div>

          {/* Comments */}
          <div className="space-y-1">
            <label className="text-lg font-medium text-gray-700">
              Comments (if needed)
            </label>
            <textarea
              rows={3}
              className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
              placeholder="Add any additional comments if necessary..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full transform rounded-xl bg-nouris py-4 text-xl font-semibold text-white shadow-lg transition duration-300 hover:bg-nouris-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-nouris focus:ring-opacity-50"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestChange;