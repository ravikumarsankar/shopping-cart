import { TabProvider } from "./components/header/HeaderNav/TabContext";
import Category from "./components/products/Category";
import SearchBar from "./components/SearchBar";



export default function Home() {
  return (
    <>
      <div className="h-[105px] flex pl-[10px] pr-[10px] justify-around">
        <div className="pt-[20px] ">
          <img src="https://sanccms.z14.web.core.windows.net/site/theme/www_patioproductsusa_com/ppu_site_logo.png"></img>
        </div>
        <div className="flex flex-col p-[10px]">
          <div className="flex ">
            <div className="text-[#018de4]"> Featured Guide: </div>
            <div className="pl-[5px]">Which Heater Brand Should You Buy?</div>
          </div>
          <SearchBar />
        </div>
      </div>

      <Category />
      <img
        className="w-full"
        src="https://images.patioproductsusa.com/site/common/patio/promos/2023/ppu-phs-hero.png?v1"
      ></img>
     
      
      
       
      
   
    </>
  );
}
