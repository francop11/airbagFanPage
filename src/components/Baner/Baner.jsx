import "./Baner.css"
import logo from '/logo.jpg'
import baner2 from '/baner2.jpg'
const Baner =()=>{
    return(



        <div className="container-fluid">
        <div className="row">
            <div class="col-sm-12 col-lg-12">
        
                <div className="col-sm-12 col-lg-12 banner">
        <img  id="baner" className="banner-image img-fluid" src={baner2} alt="Banner" />
      </div>
                    
                </div>
            </div>
           
        </div>


      
    )
}


export default Baner