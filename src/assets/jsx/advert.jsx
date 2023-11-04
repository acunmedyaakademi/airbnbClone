import { StarFilled,HeartTwoTone } from '@ant-design/icons';
import { Carousel } from 'antd';



export const createAdverts = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return(
        <>
            

            <div className="card" >
                <Carousel style={{width:"320px"}} afterChange={onChange}>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                
                </Carousel>
                <div className="info">
                    <div className="title" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}>
                        <p className="title" >
                            <strong>Bağcılar, Türkiye</strong>
                        </p>
                        <p><StarFilled style={ {fontSize:"12px"}} /> 4,4</p>
                    </div>
                    <h5 style={{color:"#868686"}}>Geçen hafta 204 kez görüntülendi</h5>
                    <h5 style={{color:"#868686"}}>7 - 14 OCAK</h5>
                    <h5 style={{color:"#1d1d1d"}}><strong>5500TL</strong> Gece</h5>
                </div>
            </div>
  
            <div className="card" >
                <Carousel style={{width:"320px",zIndex:"1"}} afterChange={onChange}>
                    <div style={{zIndex:"1"}}> 
                        <img style={{zIndex:"1"}} src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div style={{zIndex:"1"}}>
                        <img style={{zIndex:"1"}} src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div style={{zIndex:"1"}}>
                        <img style={{zIndex:"1"}} src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div style={{zIndex:"1"}}>
                        <img style={{zIndex:"1"}} src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                
                </Carousel>
                <div className="info">
                    <div className="title" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}>
                        <p className="title" >
                            <strong>Bağcılar, Türkiye</strong>
                        </p>
                        <p><StarFilled style={ {fontSize:"12px"}} /> 4,4</p>
                    </div>
                    <h5 style={{color:"#868686"}}>Geçen hafta 204 kez görüntülendi</h5>
                    <h5 style={{color:"#868686"}}>7 - 14 OCAK</h5>
                    <h5 style={{color:"#1d1d1d"}}><strong>5500TL</strong> Gece</h5>
                </div>
            </div>

            <div className="card" >
                <Carousel style={{width:"320px"}} afterChange={onChange}>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                
                </Carousel>
                <div className="info">
                    <div className="title" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}>
                        <p className="title" >
                            <strong>Bağcılar, Türkiye</strong>
                        </p>
                        <p><StarFilled style={ {fontSize:"12px"}} /> 4,4</p>
                    </div>
                    <h5 style={{color:"#868686"}}>Geçen hafta 204 kez görüntülendi</h5>
                    <h5 style={{color:"#868686"}}>7 - 14 OCAK</h5>
                    <h5 style={{color:"#1d1d1d"}}><strong>5500TL</strong> Gece</h5>
                </div>
            </div>

            <div className="card" >
                <Carousel style={{width:"320px"}} afterChange={onChange}>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                
                </Carousel>
                <div className="info">
                    <div className="title" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}>
                        <p className="title" >
                            <strong>Bağcılar, Türkiye</strong>
                        </p>
                        <p><StarFilled style={ {fontSize:"12px"}} /> 4,4</p>
                    </div>
                    <h5 style={{color:"#868686"}}>Geçen hafta 204 kez görüntülendi</h5>
                    <h5 style={{color:"#868686"}}>7 - 14 OCAK</h5>
                    <h5 style={{color:"#1d1d1d"}}><strong>5500TL</strong> Gece</h5>
                </div>
            </div>

            <div className="card" >
                <Carousel style={{width:"320px",zIndex:"1"}} afterChange={onChange}>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=720" alt="" />
                    </div>
                
                </Carousel>
                <div className="info">
                    <div className="title" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}>
                        <p className="title" >
                            <strong>Bağcılar, Türkiye</strong>
                        </p>
                        <p><StarFilled style={ {fontSize:"12px"}} /> 4,4</p>
                    </div>
                    <h5 style={{color:"#868686"}}>Geçen hafta 204 kez görüntülendi</h5>
                    <h5 style={{color:"#868686"}}>7 - 14 OCAK</h5>
                    <h5 style={{color:"#1d1d1d"}}><strong>5500TL</strong> Gece</h5>
                </div>
            </div>
        </>
    )
}