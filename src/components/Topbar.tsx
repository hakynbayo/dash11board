import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/component/featuredInfo.css';


function topbar() {
  return (
    
        <div className='tophead'>
        <div className="featuredHead">
          <h5>Home {'>'} <span className='lhead'>Market</span> </h5>
          <h2 className='sub'>Market</h2>
          <p className='sub2'>Lorem ipsum dolor sit amet consectetur adipisicing</p>

          <div className='featuredButton'>
            <button className='pagebtn'> Page Settings <TuneIcon/> </button>
          </div>

          <div className='featuredButton'>
            <button className='pagebtn2'> Demo <ExpandMoreIcon/> </button>
          </div>
        </div>
        </div>
    

  )
}

export default topbar