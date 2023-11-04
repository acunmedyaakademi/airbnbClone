import {SearchOutlined,AppleFilled,MailOutlined} from '@ant-design/icons';
import { Button, Space } from 'antd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { InputText } from 'primereact/inputtext';
import { useState,useEffect,useRef } from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FacebookIcon from '@mui/icons-material/Facebook';

               
    export const mainNavBar = () => {
  

    const [dialogShow,setDialogShow] = useState(false);

    useEffect(() => {
        const handleDocumentClick = (e) => {
          if (e.target.className == "adverts"||e.target.className == "bottomNavBar"||e.target.className == "container"||e.target.className == "navbar"||e.target.className == "upperNavBar") {
            setActiveProfileMenu(false)
          }
        };
      
        document.addEventListener("click", handleDocumentClick);
      
        return () => {
          document.removeEventListener("click", handleDocumentClick);
        };
      }, []);

    const [profileMenu,setActiveProfileMenu] = useState(false)

    return(
        <>
            <dialog className={`signContainer ${dialogShow}`}>
                <div className="sign">
                    <div onClick={() => setDialogShow(false)} className="signClose">
                        <p>x</p>
                    </div>  
                    <div className="signHeader" style={{borderBottom:"1px solid #dddddd",padding:"16px"}}>
                        Oturum açın veya Kaydolun
                    </div>
                    <div className="signUp">
                        <h2 style={{marginBlock:"16px",marginLeft:"16px",textAlign:"left"}}>AirBnb'ye Hoşgeldiniz</h2>
                        <InputText className='signUserName' placeholder="Telefon Numarası" />
                        <InputText className='signPassword' placeholder="Şifre" />
                        <h5 style={{textAlign:"left",fontSize:"11px",margin:"16px"}}>Numaranızı doğrulamak için sizi arayacağız veya bir kısa mesaj göndereceğiz. Standart mesaj ve veri ücretleri uygulanır. <a style={{textDecoration:"underline"}} href="#">Gizlilik Politikası</a></h5>
                        <Button type="primary" danger style={{width:"470px",height:"50px"}}>
                            Devam Et
                        </Button>
                        <div className="optionsForSign" style={{display:"flex",gap:"16px",flexDirection:"column",justifyContent:"center",marginTop:"12px"}}>
                            <Divider textAlign="center" style={{fontSize:"12px"}}>veya</Divider>
                            <Button style={{height:"48px",marginInline:"12px",border:"solid 1px black",display:"flex",justifyContent:"space-between",alignItems:"center"}} ><img style={{width:"24px"}} src="src\assets\icons8-google.svg" alt="" />Google ile devam et <div></div></Button> 
                            <Button style={{height:"48px",marginInline:"12px",border:"solid 1px black",display:"flex",justifyContent:"space-between",alignItems:"center"}} ><FacebookIcon color='primary'></FacebookIcon>Facebook ile devam et <div></div></Button> 
                            <Button style={{height:"48px",marginInline:"12px",border:"solid 1px black",display:"flex",justifyContent:"space-between",alignItems:"center"}} ><AppleFilled style={{fontSize:"24px"}} />Apple ile devam et <div></div></Button> 
                            <Button style={{height:"48px",marginInline:"12px",border:"solid 1px black",display:"flex",justifyContent:"space-between",alignItems:"center"}} ><MailOutlined style={{fontSize:"22px"}}/>Eposta ile devam et <div></div></Button> 
                        </div> 
                        
                    </div>
                </div>
            </dialog>
            <div className='upperNavBar' style={{height:"80px",borderBottom:"1px solid rgba(188, 188, 188, 0.247)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div className={`profileMenu ${profileMenu}`}>
                    <div onClick={() => {setActiveProfileMenu(false),setDialogShow(true)}} className="menuBtn">
                        <h4 style={{color:"black"}}><strong>Kaydolun</strong></h4>
                    </div>
                    <div className="menuBtn">
                        <h4 >Oturum açın</h4>
                    </div>
                    <hr/>
                    <div className="menuBtn">
                        <h4>Evinizi Airbnb'ye taşıyın</h4>
                    </div>
                    <div className="menuBtn">
                        <h4>Yardım Merkezi</h4>
                    </div>          
                </div>
                <img src="../src/assets/airbnb.png" alt="airbnblogo" style={{marginRight:"190px",height:"100px",background: "none"}} />
                <div className="searchBar" style={{width:"440px",cursor:"pointer"}}>
                    <div className='searchBar-text' style={{cursor:"pointer"}}>Herhangi bir yer</div>
                    <div className='searchBar-text' style={{cursor:"pointer"}}>Herhangi hafta</div>
                    <div className='searchBar-textLast' style={{cursor:"pointer"}}>Misafir ekleyin </div>
                    <SearchOutlined  className='searchIcon'/>
                </div>
                <div className="profileContainer">
                    Evinizi Airbnb'ye taşıyın
                    <div className="languageIcon">
                        <LanguageIcon style={{fontSize:"large"}}/>
                    </div>
                    <div className="profile" onClick={() => {profileMenu ? setActiveProfileMenu(false):setActiveProfileMenu(true)}}>

                        <MenuIcon style={{fontSize:"1.2rem"}}/>
                        <AccountCircleIcon style={{color:"grey",fontSize:"2.2rem"}}/>

                    </div>
                </div>
            </div>
        </>
        
    )
}