import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  withRouter,
  Redirect,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Hammer from "rc-hammerjs";

import UINotifications from "../../pages/notifications";
import TablesStatic from "../../pages/tables/static";
import MapsGoogle from "../../pages/components/maps/google";
import CoreTypography from "../../pages/typography";
import Charts from "../../pages/components/charts/Charts";
import Dashboard from "../../pages/dashboard";

import Header from "../Header";
import Sidebar from "../Sidebar";
import BreadcrumbHistory from "../BreadcrumbHistory";
import { openSidebar, closeSidebar } from "../../actions/navigation";
import s from "./Layout.module.scss";
import BurgerIcon from "../Icons/HeaderIcons/BurgerIcon";
import Burger from './icon'
import Type2 from "../../pages/typography/type2";
import Typography from "../../pages/typography";
import Profile from "../../pages/profile/Profile";

const Layout = () => {

  const location = useLocation();
  const [menuResponsiveShow, setmenuResponsiveShow] = useState(false);



  return (
    <div className={s.root}>
      <div className={s.wrap}>


        <Header />
        {/* <Chat chatOpen={this.state.chatOpen} /> */}
        {/* <Helper /> */}
        <Burger menuResponsiveShow={menuResponsiveShow} setmenuResponsiveShow={setmenuResponsiveShow}/>

        <Sidebar menuResponsiveShow={menuResponsiveShow} />
        {/* <Hammer onSwipe={this.handleSwipe}> */}
          <BreadcrumbHistory url={location.pathname} />
        <main className={s.content}>
          <TransitionGroup className="w-100">
            <CSSTransition key={location.key} classNames="fade" timeout={200} >
              <Switch>
                <Route
                  path="/app/main"
                  exact
                  render={() => <Redirect to="/dashboard" />}
                />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/dashboard/Typography" exact component={Typography} />
                <Route path="/dashboard/Profile" exact component={Profile} />
                {/* <Route path="/app/components/icons" exact component={UIIcons} />
                    <Route path="/app/notifications" exact component={UINotifications} />
                    <Route path="/app/components/charts" exact component={Charts} />
                    <Route path="/app/tables" exact component={TablesStatic} />
                    <Route path="/app/components/maps" exact component={MapsGoogle} />
                    <Route path="/app/typography" exact component={CoreTypography} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <footer className={s.contentFooter}>
            developed by {" "}
            <a href="https://www.gradientdp.com/">Gradient</a>
          </footer>
        </main>
        {/* </Hammer> */}
      </div>
    </div>
  );
};



export default Layout;


