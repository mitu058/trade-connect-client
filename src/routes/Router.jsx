import { createBrowserRouter } from "react-router-dom";
import MainLoyOut from "../layouts/MainLoyOut";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRout";
import JobDetails from "../pages/JobDetails";
import UpdateJob from "../pages/UpdateJob";
import AddJob from "../pages/AddJob";
import MyBids from "../pages/MyBids";
import MyPostedJobs from "../pages/MyPostedJobs";
import BidRequests from "../pages/BidRequests";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLoyOut></MainLoyOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/jobs',
                element: <AllJobs />,
              },
              {
                path: '/login',
                element: <Login />,
              },
              {
                path: '/registration',
                element: <Registration></Registration>
              },
              {
                path: '/job/:id',
                element: (
                  <PrivateRoute>
                    <JobDetails />
                  </PrivateRoute>
                ),
              },
              {
                path: '/update/:id',
                element: (
                  <PrivateRoute>
                    <UpdateJob />
                  </PrivateRoute>
                ),
              },
              {
                path: '/add-job',
                element: (
                  <PrivateRoute>
                    <AddJob />
                  </PrivateRoute>
                ),
              },
              {
                path: '/my-bids',
                element: (
                  <PrivateRoute>
                    <MyBids />
                  </PrivateRoute>
                ),
              },
              {
                path: '/my-posted-jobs',
                element: (
                  <PrivateRoute>
                    <MyPostedJobs />
                  </PrivateRoute>
                ),
              },
              {
                path: '/bid-requests',
                element: (
                  <PrivateRoute>
                    <BidRequests />
                  </PrivateRoute>
                ),
              },
        ]
    }
])

export default Router;