
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation()

    if (loading || isInstructorLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && isInstructor) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;