import { useState} from 'react';
import { iconFiltersList } from "./privateVeriable/iconFiltersVeriable";
import {LeftOutlined,RightOutlined} from '@ant-design/icons';
import TuneIcon from '@mui/icons-material/Tune';
import { Switch } from 'antd';





export const mainNavBarBottom = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [selectedImgFilter , setSelectedImgFilter] = useState(0)
    const createIconFilters = iconFiltersList.map((e,i) => {
        return(
            <div className="filterInside" style={{transform: `translateX(${scrollPosition * 100}px)`}}  key={i}>
                <img style={{cursor: 'pointer',height:"23.75px",marginBottom:"10px",color:"#dddddd"}} src={e.img} alt="homeIcon" />
                <h3 style={{cursor: 'pointer',width: "max-content"}}>{e.title}</h3>
            </div>
        )
    });
    return(
        <>
            <div className="bottomNavBarContainer">
                    <LeftOutlined className={`scrollBtn ${scrollPosition < 0 ? "active":"deactive"}`} onClick={() => {scrollPosition < -10 ? setScrollPosition(scrollPosition + 1.24):setScrollPosition(scrollPosition + 2)}} style={{backgroundColor:"white",position:"absolute",left:"60px",border:"1px solid rgb(0 0 0/0.3)",padding:"6px",borderRadius:"48px",zIndex:"9999",marginTop:"40px",fontSize:"14px"}}/>
                    <RightOutlined className={`scrollBtn ${scrollPosition >= -10 ? "active":"deactive"}`} onClick={() => {scrollPosition <= -10 ? setScrollPosition(scrollPosition - 1.24):setScrollPosition(scrollPosition - 2)}} style={{zIndex:1,backgroundColor:"white",position:"absolute",left:"1425px",border:"1px solid rgb(0 0 0/0.3)",padding:"6px",borderRadius:"48px",zIndex:"9999",marginTop:"40px",fontSize:"14px"}}/>
                <div className="bottomNavBar">
                    <div className="iconFilters">
                        {createIconFilters}
                    </div>
                    <div className="filterOptions">
                        <div className="filterMenu">
                            <TuneIcon style={{fontSize:"medium"}}/>
                            <h5 style={{fontSize:"12px"}}>Filtreler</h5>
                        </div>
                        <div className="singleFilter">
                            <h5>Vergiler hariç toplamı göster</h5>
                            <Switch/>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}