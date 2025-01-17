"use client";
import { useState } from "react";
import GlobalBar, { CallCenterHover } from "./components/header/GlobarBar";
import "./globals.css";
import HeaderNav from "./components/header/HeaderNav/HeaderNav";
import TabRenderer from "./components/header/HeaderNav/TabRenderer";
import Footer from "./components/footer/Footer";

const Header = () => {
  return (
    <div className="w-full bg-[#03487a] text-[#fff] p-[15px] flex items-center justify-center">
      <div> We've Moved!- Check us out now at </div>
      <a
        className="w-40 bg-[#f0554d] rounded-[4px] ml-2 flex justify-center"
        href="https://www.patioheatandshade.com/?bid=ppu&ac=ppu/"
      >
        PatioHeatandShade
      </a>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab,setActiveTab] = useState<any>();
 
  return (
    <html lang="en">
      <body>
        <header className="flex flex-col h-[110px] bg-[#ecf0f1]">
          <Header />
          <div className="flex items-center justify-around">
            <GlobalBar setIsHovered={setIsHovered} />
            <HeaderNav setActiveTab = {setActiveTab}/>
          </div>
          {isHovered && <CallCenterHover />}
        </header>
        {children}
        <footer>
          <TabRenderer activeTab = {activeTab}/>
           <Footer/>
        </footer>
      </body>
    </html>
  );
}
