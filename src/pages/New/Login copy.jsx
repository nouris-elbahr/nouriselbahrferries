// import { useState } from "react";
// import { useAuth } from "@/Hooks/context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import loginImage from "/public/static/images/login-image.png"; // Make sure this path is correct

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("agent@example.com");
  // const { login } = useAuth();
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(email, password);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  return (
    // <div className="mx-auto flex min-h-screen max-w-[90%] items-center justify-center py-16 md:max-w-[85%] md:py-20 lg:max-w-[80%] 3xl:py-36">
    //   <div className="flex w-full flex-col gap-10 rounded-3xl bg-white p-8 shadow-2xl md:flex-row md:p-12 lg:gap-12 xl:gap-16">
    //     {/* Left Column - Form */}
    //     <div className="flex w-full flex-col space-y-6 xl:w-[65%] md:w-[50%]  md:space-y-8">
    //       <div className="space-y-3">
    //         <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl xl:text-6xl">
    //           <span className="text-nouris">Welcome </span>
    //           Back
    //         </h1>
    //         <p className="text-lg text-gray-600 md:text-xl w-1/2 xl:text-[1.3rem] xl:leading-[1.8rem]">
    //           Sign in to access your personalized dashboard and manage your
    //           cruise experiences.
    //         </p>
    //       </div>

    //       <form onSubmit={handleSubmit} className="space-y-6">
    //         <div className="space-y-1">
    //           <label
    //             htmlFor="email"
    //             className="text-lg font-medium text-gray-700"
    //           >
    //             Email Address
    //           </label>
    //           <input
    //             id="email"
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
    //             placeholder="agent@example.com"
    //             required
    //           />
    //         </div>

    //         <div className="space-y-1">
    //           <label
    //             htmlFor="password"
    //             className="text-lg font-medium text-gray-700"
    //           >
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
    //             required
    //           />
    //         </div>

    //         <div className="flex items-center justify-between">
    //           <label className="inline-flex items-center cursor-pointer">
    //             <input type="checkbox" className="peer hidden" />
    //             <div className="h-5 w-5 rounded border-2 border-gray-300 peer-checked:bg-nouris peer-checked:border-nouris flex items-center justify-center">
    //               <svg
    //                 className="w-3 h-3 text-white peer-checked:block hidden"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="3"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M5 13l4 4L19 7"
    //                 />
    //               </svg>
    //             </div>
    //             <span className="ml-2 text-gray-700">Remember me</span>
    //           </label>

    //           <a href="#" className="text-nouris hover:text-nouris-dark">
    //             Forgot password?
    //           </a>
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full transform rounded-xl bg-nouris py-4 text-xl font-semibold text-white shadow-lg transition duration-300 hover:bg-nouris-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-nouris focus:ring-opacity-50"
    //         >
    //           Sign In
    //         </button>
    //       </form>

    //       <div className="text-center">
    //         <p className="text-gray-600">
    //           Don&apos;t have an account?{" "}
    //           <a
    //             href="#"
    //             className="font-medium text-nouris hover:text-nouris-dark"
    //           >
    //             Register
    //           </a>
    //         </p>
    //       </div>

    //       <div className="space-y-3 pt-4">
    //         <p className="text-center text-gray-500">Or try demo accounts:</p>
    //         <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
    //           <button
    //             type="button"
    //             onClick={() => {
    //               setEmail("agent@example.com");
    //               setPassword("password123");
    //             }}
    //             className="rounded-xl bg-gray-100 px-4 py-2 text-gray-700 transition hover:bg-gray-200"
    //           >
    //             Agent Account
    //           </button>
    //           <button
    //             type="button"
    //             onClick={() => {
    //               setEmail("user@example.com");
    //               setPassword("password123");
    //             }}
    //             className="rounded-xl bg-gray-100 px-4 py-2 text-gray-700 transition hover:bg-gray-200"
    //           >
    //             User Account
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Column - Image */}
    //     <div className="hidden relative md:block xl:w-[35%] md:w-[50%]">
    //       <div className="h-full overflow-hidden rounded-2xl">
    //         <img
    //           src={loginImage}
    //           alt="Cruise ship luxury interior"
    //           className="h-full w-full object-cover"
    //         />
    //         <div className=" absolute h-1/2 top-0 pt-20 px-8 rounded-t-2xl text-center bg-gradient-to-b from-black/40 to-transparent text-white">
    //           <h2 className="mb-4 text-3xl font-extrabold xl:text-4xl">
    //             Discover Your Next Adventure
    //           </h2>
    //           {/* <p className="text-lg xl:text-xl">
    //             Access exclusive cruise deals when you sign in
    //           </p> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mx-auto flex min-h-screen max-w-[90%] items-center justify-center py-16 md:max-w-[85%] md:py-20 lg:max-w-[80%] 3xl:py-36">
      <div className="flex w-full flex-col gap-10 rounded-3xl bg-white p-8 shadow-2xl md:p-12">
        {/* Header Section */}
        {/* <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            <span className="text-nouris">Request </span>
            Changes
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            {user.role === "agent"
              ? "Submit change requests on behalf of clients"
              : "Request changes to your bookings"}
          </p>
        </div> */}

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
                <p className="mt-1 text-sm text-gray-500">[New desired date]</p>
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
                <p className="mt-1 text-sm text-gray-500">[New desired date]</p>
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
                <p className="mt-1 text-sm text-gray-500">New registration</p>
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
              {/* {user.role === "agent" && (
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
              )} */}
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

export default Login;
