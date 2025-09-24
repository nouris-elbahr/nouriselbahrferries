// // src/pages/New/Unauthorized.jsx
// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { AlertTriangle } from 'lucide-react';
// import { useAuth } from '@/Hooks/context/AuthContext';

// export default function Unauthorized() {
//   const { user, logout } = useAuth();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || '/';

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md border border-gray-200 p-8 space-y-6 text-center">
//         <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-50">
//           <AlertTriangle className="h-10 w-10 text-red-500" aria-hidden="true" />
//         </div>
        
//         <div className="space-y-2">
//           <h1 className="text-3xl font-bold text-gray-900">Access Restricted</h1>
//           <p className="text-gray-600">
//             {user ? (
//               <>
//                 Your account ({user.email}) doesn&apos;t have permission to access{' '}
//                 <span className="font-medium text-gray-900">{from}</span>
//               </>
//             ) : (
//               'You need to be logged in to access this page'
//             )}
//           </p>
//         </div>

//         <div className="flex flex-col gap-3 pt-4">
//           {user ? (
//             <>
//               <Button asChild variant="outline" className="w-full">
//                 <Link to="/">Go to Homepage</Link>
//               </Button>
//               <Button asChild className="w-full">
//                 <Link to={from} state={{ from: location }} replace>
//                   Try Again
//                 </Link>
//               </Button>
//               <Button 
//                 variant="ghost" 
//                 onClick={logout} 
//                 className="w-full text-red-600 hover:bg-red-50"
//               >
//                 Sign Out
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button asChild className="w-full">
//                 <Link to="/login" state={{ from: location }}>
//                   Sign In
//                 </Link>
//               </Button>
//               <Button asChild variant="outline" className="w-full">
//                 <Link to="/">Continue as Guest</Link>
//               </Button>
//             </>
//           )}
//         </div>

//         {user?.role && (
//           <p className="text-sm text-gray-500">
//             Your role: <span className="font-medium capitalize">{user.role}</span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }