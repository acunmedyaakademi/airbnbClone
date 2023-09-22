import {SearchOutlined,MenuOutlined} from '@ant-design/icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';

export const mainNavBar = () => {
    return(
        <header style={{paddingInline:"5rem",height:"80px",borderBottom:"1px solid rgba(188, 188, 188, 0.247)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <img src="../src/assets/airbnb.png" alt="airbnblogo" style={{height:"120px",background: "none",marginRight:"146px"}} />
                <div className="searchBar" style={{width:"440px",cursor:"pointer"}}>
                    <div className='searchBar-text' style={{cursor:"pointer"}}>Herhangi bir yer</div>
                    <div className='searchBar-text' style={{cursor:"pointer"}}>Herhangi hafta</div>
                    <div className='searchBar-textLast' style={{cursor:"pointer"}}>Misafir ekleyin </div>
                    <SearchOutlined  className='searchIcon'/>
                </div>
                <div className="profileContainer">
                    Evinizi Airbnb'ye taşıyın
                    <LanguageIcon style={{fontSize:"large",width:"32px"}}/>
                    <div className="profile">
                        <MenuIcon style={{fontSize:"1.2rem"}}/>
                        <AccountCircleIcon style={{color:"grey",fontSize:"2.2rem"}}/>
                    </div>
                </div>
        </header>
    )
}