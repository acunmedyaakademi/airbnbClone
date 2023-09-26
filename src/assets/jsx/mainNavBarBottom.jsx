import { iconFiltersList } from "./privateVeriable/iconFiltersVeriable";
import TuneIcon from '@mui/icons-material/Tune';
import { Switch } from 'antd';

const createIconFilters = iconFiltersList.map((e,i) => {
    console.log(i);
    return(
        <div className="filterInside" key={i}>
            <img style={{height:"23.75px",marginBottom:"10px",color:"#dddddd"}} src={e.img} alt="homeIcon" />
            <h3 style={{width: "max-content"}}>{e.title}</h3>
        </div>
    )
});

export const mainNavBarBottom = () => {
    return(
        <div className="bottomNavBarContainer">
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
    )
}