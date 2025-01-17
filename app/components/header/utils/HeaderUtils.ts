export enum HEADER_TAB {
  PRO ='Are you a pro?',
  AUTH = 'Login/Logout',
  ORDER_STATUS = 'Order Status',
  FAVORITES = 'My favorites',
  CART = 'Cart'
}

export const HEADER_TABS = [HEADER_TAB.PRO,HEADER_TAB.AUTH,HEADER_TAB.ORDER_STATUS,HEADER_TAB.FAVORITES,HEADER_TAB.CART]

export type TabContextType = {
  activeTab: string;
  setTab: (tabId: string) => void;
};

