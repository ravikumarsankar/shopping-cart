import React from "react";

const Footer = () => {
  return (
    <div className="flex m-[30px] h-[320px] justify-around bg-[#eee]">
      <div className="flex flex-col font-normal p-[20px]">
        <strong>Customer</strong>
        <span>Order Status</span>
        <span>Help Services</span>
        <span>Returns & Replacements</span>
        <span>Accessibility</span>
      </div>
      <div className="flex flex-col p-[20px]">
        <strong>Shopping</strong>
        <span>On sale items</span>
        <span>Our brands</span>
        <span>Trade Customers</span>
        <span>View Your cart</span>
      </div>
      <div className="flex flex-col p-[20px]">
        <strong>Company Info</strong>
        <span>About us</span>
        <span>Privacy Policy</span>
        <span>Terms of use</span>
      </div>
      <div className="flex flex-col p-[20px]">
        <strong> Customer Support</strong>
        <span>Ready to Order? </span>

        <span>Talk with our Sales Associate </span>
        <span>Monday - Friday: 6:00 a.m. to 5:00 p.m. PST</span>
        <span>Saturday & Sunday: 6:00 a.m. to 3:00 p.m. PST</span>

        <span>Already Order?</span>

        <span>File a Return or Replacement here.</span>

        <span>View Your Order Status here.</span>

        <span>For anything else, visit us at our HelpDesk.</span>
      </div>
    </div>
  );
};

export default Footer;
