import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from "../../redux/store";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();

    const { isAuthenticated, loading } = useSelector((state: RootState) => state.authReducer);

    if (loading) {
        return <Typography variant="h5">Checking authenticaton..</Typography>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;