export const MENU_ITEM_TYPES = {
  HEADING: 'HEADING',
  SUB_MENU: 'SUB_MENU',
  LINK: 'LINK',
  LINK_COUNT: 'LINK_COUNT',
  LINK_BADGE_COUNT: 'LINK_BADGE_COUNT',
}

export const MENU = [
  {
    title: 'Dashboard',
    icon: 'menu_dashboard',
    route: 'dashboard',
    type: MENU_ITEM_TYPES.LINK,
  },
  {
    title: 'Projects',
    icon: 'menu_projects',
    route: 'projects',
    type: MENU_ITEM_TYPES.LINK_COUNT,
    count: 3,
  },
  {
    title: 'Calendar',
    icon: 'menu_calendar',
    route: 'calendar',
    type: MENU_ITEM_TYPES.LINK,
  },
  {
    title: 'Documents',
    icon: 'menu_documents',
    route: 'documents',
    type: MENU_ITEM_TYPES.SUB_MENU,
  },
  {
    title: 'Store',
    icon: 'menu_store',
    route: 'store',
    type: MENU_ITEM_TYPES.LINK,

  },
  {
    title: 'Integrations',
    type: MENU_ITEM_TYPES.HEADING,
  },
  {
    title: 'Figma',
    icon: 'menu_figma',
    route: 'figma',
    type: MENU_ITEM_TYPES.LINK,
  },
  {
    title: 'Slack',
    icon: 'menu_slack',
    route: 'slack',
    type: MENU_ITEM_TYPES.LINK_BADGE_COUNT,
    badgeCount: '99+',
    color: '#FA2256',
  },
  {
    title: 'Jira',
    icon: 'menu_jira',
    route: 'jira',
    type: MENU_ITEM_TYPES.LINK,
  },
  {
    title: 'Account',
    type: MENU_ITEM_TYPES.HEADING,
  },
  {
    title: 'Settings',
    icon: 'menu_settings',
    route: 'settings',
    type: MENU_ITEM_TYPES.SUB_MENU,
  },
  {
    title: 'Logout',
    icon: 'menu_logout',
    route: 'logout',
    type: MENU_ITEM_TYPES.LINK,
  },

]; 