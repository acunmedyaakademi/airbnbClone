import { iconFiltersList } from "./privateVeriable/iconFiltersVeriable";

const createIconFilters = iconFiltersList.map(e => {
    console.log(e);
    return(
        <div className="iconFilter">
            <div className="filterInside" >
                <img style={{height:"23.75px",marginBottom:"10px",color:"#dddddd"}} src={e.img} alt="homeIcon" />
                <h3 style={{width: "max-content"}}>{e.title}</h3>
            </div>
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

                    </div>
                    <div className="singleFilter">

                    </div>
                </div>
            </div>
        </div>
    )
}