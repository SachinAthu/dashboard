import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import classes from './Sidebar.module.scss';
import Logo from '../../assets/svg/logo.svg';
import ShortCut from '../../assets/svg/sidebar_shortcut.svg';
import ProfilePic from '../../assets/img/profile_pic.png';
import ArrowLeft from '../../assets/svg/arrow_left.svg';
import MenuExpand from '../../assets/svg/menu_expand.svg';
import More from '../../assets/svg/more.svg';
import { MENU, MENU_ITEM_TYPES } from './menu';

// menu item icons
import menu_dashboard from '../../assets/svg/menu-items/menu_dashboard.svg';
import menu_projects from '../../assets/svg/menu-items/menu_projects.svg';
import menu_calendar from '../../assets/svg/menu-items/menu_calendar.svg';
import menu_documents from '../../assets/svg/menu-items/menu_documents.svg';
import menu_store from '../../assets/svg/menu-items/menu_store.svg';
import menu_figma from '../../assets/svg/menu-items/menu_figma.svg';
import menu_slack from '../../assets/svg/menu-items/menu_slack.svg';
import menu_jira from '../../assets/svg/menu-items/menu_jira.svg';
import menu_settings from '../../assets/svg/menu-items/menu_settings.svg';
import menu_logout from '../../assets/svg/menu-items/menu_logout.svg';

function Sidebar() {
  const location = useLocation();

  const menuIcons = {
    menu_dashboard,
    menu_projects,
    menu_calendar,
    menu_documents,
    menu_store,
    menu_figma,
    menu_slack,
    menu_jira,
    menu_settings,
    menu_logout,
  }

  function isActive(route) {
    if(route && location.pathname.includes(route)) {
      return true;
    }
    return false;
  }

  function generateMenu() {
    let menuItems = [];

    MENU.forEach((m, i) => {
      if('type' in m === false || 'title' in m === false) {
        return;
      }

      let classList = classes.menu_item;

      if(m.type === MENU_ITEM_TYPES.HEADING) {
        // heading
        classList += ' ' + classes.menu_heading;
      }

      if(isActive(m.route)) {
        classList += ' ' + classes.active;
      }

      let menuItemContent = (
        <li className={classList}>
          { m.icon && <img src={menuIcons[m.icon]} alt={m.icon} /> }

          <span className={classes.title}>{m.title}</span>

          { m.type === MENU_ITEM_TYPES.SUB_MENU && (
            <img className={classes.expand} src={MenuExpand} alt='expand menu' />
          ) }

          { m.type === MENU_ITEM_TYPES.LINK_COUNT && <span className={classes?.count}>{m.count}</span> }

          { m.type === MENU_ITEM_TYPES.LINK_BADGE_COUNT && (
            <span className={classes?.badge_count} style={{ backgroundColor: m.color }}>
              {m.badgeCount}
            </span>
          ) }
        </li>
      );

      let menuItem = (
        <div key={i}>
          { m.type === MENU_ITEM_TYPES.HEADING || m.type === MENU_ITEM_TYPES.SUB_MENU ? (
            <Link>
              <>{menuItemContent}</>
            </Link>
          ) : (
            <Link to={m.route}>
              <>{menuItemContent}</>
            </Link>
          ) }
        </div>
      );

      menuItems.push(menuItem);

    });

    return menuItems;
  }

  return (
    <div className={`card ${classes.sidebar}`}>
      <div className={classes.div_1}>
        <div className={classes.header}>
          <Link to='/'>
            <img src={Logo} alt='logo' />

            <span className={classes.name} style={{ marginLeft: '12px' }}>Dashboard</span>
          </Link>

          <span className='dashboard_gray_btn' style={{ marginLeft: 'auto', marginRight: '8px', padding: '4px' }}>
            <img src={ShortCut} alt='sidebar shortcut' />
          </span>

          <span className='dashboard_gray_btn' style={{ padding: '5px' }}>
            <img src={ArrowLeft} alt='arrow left' />
          </span>
        </div>

        <hr className='hr-1' />

        <div className={classes.body}>
          <ul>
            { generateMenu() }
          </ul>
        </div>
      </div>

      <div className={classes.footer}>
        <img src={ProfilePic} alt='profile' />

        <div>
          <span className={classes.user_name}>Adam Simpson</span>
          <span className={classes.user_email}>Simpson2@mail.com</span>
        </div>

        <span className={classes.more}>
          <img src={More} alt='more icon' />
        </span>
      </div>
    </div>
  )
}

export default Sidebar