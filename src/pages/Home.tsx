import React from "react";
import FeaturedInfo from '../components/FeaturedInfo.tsx';
import FeaturedSubHead from '../components/FeaturedSubHead.tsx'
import '../css/page/home.css';
import WidgetLg from '../components/WidgetLg.tsx';
import WidgetLg2 from '../components/WidgetLg2.tsx';
import WidgetLg3 from '../components/WidgetLg3.tsx';
import Scrollbar from '../components/Scrollbar.tsx';
import Topbar from "../components/Topbar.tsx";

function Home() {
  return (
    <div className="home">
      <Topbar/>
      <FeaturedInfo />
      <FeaturedSubHead/>
      <div className="homeWidgets">
        <div className='homeWidgets2'>
        <WidgetLg2/>
        <WidgetLg/>
        </div>
        <div>
        <WidgetLg3/>
        </div>
        <Scrollbar/>
      </div>
    </div>
  );
}

export default Home;
