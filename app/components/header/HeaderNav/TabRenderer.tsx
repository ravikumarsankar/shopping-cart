"use client";
import React from "react";

import { HEADER_TAB } from "../utils/HeaderUtils";
import { LoginPage } from "../../TabComponents/LoginPage";
import { Order } from "../../TabComponents/Order";
import Cart from "../../TabComponents/Cart";
import Favorites from "../../TabComponents/Favorites";

const renderActiveTab = (activeTab: HEADER_TAB) => {
  switch (activeTab) {
    case HEADER_TAB.AUTH:
      return <LoginPage />;

    case HEADER_TAB.ORDER_STATUS:
      return <Order />;
    case HEADER_TAB.FAVORITES:
      return <Favorites />;
    case HEADER_TAB.CART:
      return <Cart />;
    default:
      return null;
  }
};
const TabRenderer = ({ activeTab }: { activeTab: string }) => {
  console.log(activeTab);
  return <div>{renderActiveTab(activeTab as HEADER_TAB)}</div>;
};

export default TabRenderer;
