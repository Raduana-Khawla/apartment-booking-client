import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Dashboard.css";
import Review from "../../Review/Review";
import MyBookings from "../../Dashboard/MyBookings/MyBookings";
import MakeAdmin from "../../Dashboard/MakeAdmin/MakeAdmin";
import useAuth from "../../../Hooks/useAuth";
import ManageOrder from "../ManageOrder/ManageOrder";
import AddServices from "../../AddServices/AddServices";
import BookProperty from "../BookProperty/BookProperty";
import Pay from "../Pay/Pay";
import ManageProducts from "./ManageProducts/ManageProducts";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-3 py-5">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <li className="dashboard-menu">Orders list User</li>
              <Link to={`${url}/BookProperty`}>
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link to={`${url}/BookingList`}>
                <li className="dashboard-menu mt-5">Booking list</li>
              </Link>

              <Link to={`${url}/Pay`}>
                <li className="dashboard-menu mt-5">Pay</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              {admin && (
                <div className="admin-dashboard">
                  <li className="dashboard-menu mt-5">Orders list Admin</li>

                  <Link to={`${url}/addServices`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                  <Link to={`${url}/manageOrder`}>
                    <li className="dashboard-menu">Manage All Orders</li>
                  </Link>

                  <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                  </Link>

                  <Link to={`${url}/manageProducts`}>
                    <li className="dashboard-menu">Manage Products</li>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/Pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/BookProperty`}>
                <BookProperty></BookProperty>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addServices`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/manageOrder`}>
                <ManageOrder></ManageOrder>
              </Route>
              <Route exact path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
