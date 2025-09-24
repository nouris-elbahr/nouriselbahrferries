// // src/App.jsx
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// import { AuthProvider } from './Hooks/context/AuthContext';
// import ProtectedRoute from './components/ui/New/ProtectedRoute';
// import AppLayout from './pages/AppLayout';
// import Login from './pages/New/Login';
// import Unauthorized from './pages/New/Unauthorized';

// import MyRequests from './pages/New/MyRequests';
// import RequestChange from './pages/New/RequestChange';


// import Home from "./pages/Home";
// import About from "./pages/About";
// import Cracovia from "./pages/Cracovia";
// import Bookings from "./pages/Bookings";
// import Contact from "./pages/Contact";

// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/unauthorized',
//     element: <Unauthorized />,
//   },
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         element: <ProtectedRoute />, // Requires auth but any role
//         children: [
//           {
//             path: '/',
//             element: <Home />,
//           },
//           {
//             path: '/bookings',
//             element: <Bookings />,
//           },
//           {
//             path: '/request-change',
//             element: <RequestChange />,
//           },
//         ],
//       },
//       {
//         element: <ProtectedRoute allowedRoles={['agent']} />,
//         children: [
//           {
//             path: '/my-requests',
//             element: <MyRequests />,
//           },
//         ],
//       },
//       // Public routes
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/cracovia',
//         element: <Cracovia />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   );
// }

// export default App;

import ProtectedRoute from './components/ui/New/ProtectedRoute';
import { AuthProvider } from './Hooks/context/AuthContext';
import MyRequests from './pages/New/MyRequests';
import RequestChange from './pages/New/RequestChange';
import Login from './pages/New/Login';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Error from "./components/ui/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Cracovia from "./pages/Cracovia";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cracovia",
        element: <Cracovia />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/request-change",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <RequestChange />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-requests",
        element: (
          <ProtectedRoute allowedRoles={["agent"]}>
            <MyRequests />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
