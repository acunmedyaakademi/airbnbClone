import { useState} from 'react';
import { iconFiltersList } from "./privateVeriable/iconFiltersVeriable";
import {LeftOutlined,RightOutlined} from '@ant-design/icons';
import TuneIcon from '@mui/icons-material/Tune';
import { InputText } from 'primereact/inputtext';
import { Button, Space , Slider, Switch , InputNumber } from 'antd';

export const mainNavBarBottom = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [selectedImgFilter , setSelectedImgFilter] = useState(0)
    const [filterDialog,setFilterDialog] = useState(false);
    const [slideAmount,setSliderAmount] = useState([1000,4500]);

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
            <dialog className={`signFilterContainer ${filterDialog}`} >
                <div className="filterSign">
                    <div onClick={() => setFilterDialog (false)} className="signClose">
                        <p>x</p>
                    </div>  
                    <div className="signHeader" style={{borderBottom:"1px solid #dddddd",padding:"16px"}}>
                        Filtreler
                    </div>
                    <div className="scrollContainer">
                        <div className="slider" style={{margin:"24px"}}>
                            <div className="sliderTitle" style={{textAlign:"left"}}>
                                <h1>Fiyatlar</h1>
                                <h4>Ücretler ve vergiler hariç gecelik fiyatlar</h4>
                            </div>
                            <Slider max={9100} min={280} range defaultValue={[1345, 8349]} onChange={(e) => {setSliderAmount(e)}} />
                            <div className="sliderInput" style={{display:"flex",justifyContent:"space-evenly"}}>
                                <InputNumber
                                    style={{width:"200px",height:"50px",fontSize:"14px"}}
                                    size='large'
                                    defaultValue={500}
                                    formatter={() => `₺ ${slideAmount[0]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    value={slideAmount[0]}
                                />
                                <InputNumber
                                    style={{width:"200px",height:"50px",fontSize:"14px"}}
                                    size='large'
                                    defaultValue={4500}
                                    formatter={() => `₺ ${slideAmount[1]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    value={slideAmount[1]}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="signFooter" style={{borderTop:"1px solid #dddddd",padding:"16px",display:"flex",justifyContent:"space-between"}}>
                        <h3 style={{textDecoration:"underline"}}>Tümünü Sil</h3>
                        <Button type="primary" style={{backgroundColor:"black"}}>Filtrelemeyi Uygula</Button>
                    </div>
                </div>
            </dialog>
            <div className="bottomNavBarContainer">
                    <LeftOutlined className={`scrollBtn ${scrollPosition < 0 ? "active":"deactive"}`} onClick={() => {scrollPosition < -10 ? setScrollPosition(scrollPosition + 1.24):setScrollPosition(scrollPosition + 2)}} style={{backgroundColor:"white",position:"absolute",left:"60px",border:"1px solid rgb(0 0 0/0.3)",padding:"6px",borderRadius:"48px",zIndex:"9999",marginTop:"40px",fontSize:"14px"}}/>
                    <RightOutlined className={`scrollBtn ${scrollPosition >= -10 ? "active":"deactive"}`} onClick={() => {scrollPosition <= -10 ? setScrollPosition(scrollPosition - 1.24):setScrollPosition(scrollPosition - 2)}} style={{zIndex:1,backgroundColor:"white",position:"absolute",left:"1425px",border:"1px solid rgb(0 0 0/0.3)",padding:"6px",borderRadius:"48px",zIndex:"9999",marginTop:"40px",fontSize:"14px"}}/>
                <div className="bottomNavBar">
                    <div className="iconFilters">
                        {createIconFilters}
                    </div>
                    <div className="filterOptions">
                        <div className="filterMenu" onClick={() => setFilterDialog(true)}>
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