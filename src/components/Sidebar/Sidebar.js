import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Progress, Alert } from "reactstrap";
import { withRouter } from "react-router-dom";
import { dismissAlert } from "../../actions/alerts";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup";

import { changeActiveSidebarItem } from "../../actions/navigation";
import { logoutUser } from "../../actions/user";
import HomeIcon from "../Icons/SidebarIcons/HomeIcon";
import TypographyIcon from "../Icons/SidebarIcons/TypographyIcon";
import TablesIcon from "../Icons/SidebarIcons/TablesIcon";
import NotificationsIcon from "../Icons/SidebarIcons/NotificationsIcon";
import ComponentsIcon from "../Icons/SidebarIcons/ComponentsIcon";
import { Link } from "react-router-dom";
import BurgerIcon from "../Icons/HeaderIcons/BurgerIcon";
import ProfileIcon from "../Icons/SidebarIcons/Proflie";

const Sidebar = ({ menuResponsiveShow }) => {
  // static propTypes = {
  //   sidebarStatic: PropTypes.bool,
  //   sidebarOpened: PropTypes.bool,
  //   dispatch: PropTypes.func.isRequired,
  //   activeItem: PropTypes.string,
  //   location: PropTypes.shape({
  //     pathname: PropTypes.string,
  //   }).isRequired,
  // };

  // static defaultProps = {
  //   sidebarStatic: false,
  //   activeItem: "",
  // };

  // constructor(props) {
  //   super(props);

  //   this.doLogout = this.doLogout.bind(this);
  // }

  // componentDidMount() {
  //   this.element.addEventListener(
  //     "transitionend",
  //     () => {
  //       if (this.props.sidebarOpened) {
  //         this.element.classList.add(s.sidebarOpen);
  //       }
  //     },
  //     false
  //   );
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
  //     if (nextProps.sidebarOpened) {
  //       this.element.style.height = `${this.element.scrollHeight}px`;
  //     } else {
  //       this.element.classList.remove(s.sidebarOpen);
  //       setTimeout(() => {
  //         this.element.style.height = "";
  //       }, 0);
  //     }
  //   }
  // }

  // dismissAlert(id) {
  //   this.props.dispatch(dismissAlert(id));
  // }

  // doLogout() {
  //   this.props.dispatch(logoutUser());
  // }

  return (
    <nav
      className={cx(s.root)}
      // ref={(nav) => {
      //   this.element = nav;
      // }}
      style={
        menuResponsiveShow
          ? {
              transform: "translateX(0)",
              zIndex: 1000,
              transition: "transform 0.5s",
            }
          : {
              transform: "translateX(200px)",
              zIndex: 1000,
              transition: "transform 0.5s",
            }
      }
    >
      <header className={s.logo}>
        <div>
          {/* Light <span className="fw-bold">Blue</span> */}
          ???????? ????????
        </div>
      </header>
      <div className="d-flex pr-4 mt-3">
        <Link className={s["sideBar-link"]} to={sideBarMenu[0].route}>
          <div className={s["sidebar-icon-hover"]}>{sideBarMenu[0].icon}</div>
          <div className="d-flex justify-content-center align-items-center mx-1">
            {sideBarMenu[0].label}
          </div>
        </Link>
      </div>
      <h5 className={s.navTitle}>
        ??????????
        {/* eslint-disable-next-line */}
      </h5>
      <ul className={s.nav}>
        {sideBarMenu.map((itm, ind) => (
          <>
            {ind !== 0 && (
              <li className="d-flex pr-4 mt-3">
                <Link className={s["sideBar-link"]} to={itm.route}>
                  <div className={s["sidebar-icon-hover"]}>{itm.icon}</div>
                  <div className="d-flex justify-content-center align-items-center mx-1">
                    {itm.label}
                  </div>
                </Link>
              </li>
            )}
          </>
        ))}

        {/* <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Dashboard"
                        isHeader
                        iconName={<HomeIcon className={s.menuIcon} />}
                        link="/app/main"
                        index="main"
                    />
                    <h5 className={[s.navTitle, s.groupTitle].join(' ')}>TEMPLATE</h5>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Typography"
                        isHeader
                        iconName={<TypographyIcon className={s.menuIcon} />}
                        link="/app/typography"
                        index="core"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
                        activeItem={this.props.activeItem}
                        header="Tables Basic"
                        isHeader
                        iconName={<TablesIcon className={s.menuIcon} />}
                        link="/app/tables"
                        index="tables"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Notifications"
                        isHeader
                        iconName={<NotificationsIcon className={s.menuIcon}/>}
                        link="/app/notifications"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Components"
                        isHeader
                        iconName={<ComponentsIcon className={s.menuIcon}/>}
                        link="/app/components"
                        index="components"
                        childrenLinks={[
                            {
                                header: 'Charts', link: '/app/components/charts',
                            },
                            {
                                header: 'Icons', link: '/app/components/icons',
                            },
                            {
                                header: 'Maps', link: '/app/components/maps',
                            },
                        ]}
                    /> */}
      </ul>
      <h5 className={s.navTitle}>
        ???????? ????
        {/* eslint-disable-next-line */}
      </h5>
      {/* eslint-disable */}
      {/* <ul className={s.sidebarLabels}>
                    <li>
                        <a href="#">
                            <i className="fa fa-circle text-success mr-2"/>
                            <span className={s.labelName}>My Recent</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-circle text-primary mr-2"/>
                            <span className={s.labelName}>Starred</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-circle text-danger mr-2"/>
                            <span className={s.labelName}>Background</span>
                        </a>
                    </li>
                </ul> */}
      {/* eslint-enable */}
      <h5 className={s.navTitle}>?????????? ????</h5>
      {/* <div className={s.sidebarAlerts}>
                    {this.props.alertsList?.map(alert => // eslint-disable-line
                        <Alert
                            key={alert.id}
                            className={s.sidebarAlert} 
                            color="transparent"
                            isOpen={true} // eslint-disable-line
                            toggle={() => {
                                this.dismissAlert(alert.id);
                            }}
                        >
                            <span>{alert.title}</span><br/>
                            <Progress className={`bg-subtle-blue progress-xs mt-1`} color={alert.color}
                                      value={alert.value}/>
                            <span className={s.alertFooter}>{alert.footer}</span>
                        </Alert>,
                    )}
                </div> */}
    </nav>
  );
};

// function mapStateToProps(store) {
//     return {
//         sidebarOpened: store.navigation.sidebarOpened,
//         sidebarStatic: store.navigation.sidebarStatic,
//         alertsList: store.alerts.alertsList,
//         activeItem: store.navigation.activeItem,
//     };
// }

export default Sidebar;

let sideBarMenu = [
  {
    label: "????????",
    route: "/dashboard",
    icon: <HomeIcon className={s.menuIcon} />,
  },
  {
    label: "??????????????",
    route: "/dashboard/profile",
    icon: <ProfileIcon className={s.menuIcon} />,
  },
  {
    label: "????????????????????",
    route: "/dashboard/Typography",
    icon: <TypographyIcon className={s.menuIcon} />,
  },

  // {
  //   label: "????????",
  //   route: "/login",
  //   icon:<HomeIcon className={s.menuIcon} />
  // },
];
