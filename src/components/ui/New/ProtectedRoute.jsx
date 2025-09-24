// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/Hooks/context/AuthContext';
import LoadingSpinner from '@/components/ui/New/LoadingSpinner';

/**
 * ProtectedRoute component that handles authentication and authorization
 * @param {object} props - Component props
 * @param {ReactNode} props.children - Child routes to be rendered if authorized
 * @param {string[]} [props.allowedRoles] - Array of allowed roles (optional)
 * @param {boolean} [props.redirectUnauthenticated=true] - Whether to redirect unauthenticated users
 * @param {string} [props.redirectPath] - Custom redirect path (defaults to '/login')
 * @param {string} [props.unauthorizedPath] - Path for unauthorized access (defaults to '/unauthorized')
 * @returns {ReactNode} Either the children, a loading spinner, or a redirect
 */
function ProtectedRoute({
  children,
  allowedRoles = [],
  redirectUnauthenticated = true,
  redirectPath = '/login',
  unauthorizedPath = '/unauthorized'
}) {
  const location = useLocation();
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner fullPage />;
  }

  // Handle unauthenticated users
  if (!isAuthenticated && redirectUnauthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Handle unauthorized roles
  if (isAuthenticated && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={unauthorizedPath} state={{ from: location }} replace />;
  }

  // If authenticated and authorized, render children
  return children;
}

export default ProtectedRoute;