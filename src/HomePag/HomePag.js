import React from "react"
import ImgAdopcion from "./adopcion perro.jpg";


export const HomePag = () => {
    return (
      <div>
        <section className="mb-5" id="inicio">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="content-left">
                      <img src= {ImgAdopcion} style={{width: "100%" }}alt="img adopcion" />
                      </div>  
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="container mt-5">
                        <h2 className="display-4">Adopta,su amor sera incondicional por siempre</h2>
                       
                        <p className="ml-5 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, maxime.</p>
                        
                        <a href="#" className=" btn btn-outline-secondary header-btn btn-lg mt-2">Read More</a>
                      
                      </div>
                    </div>
                  </div>
                </div>
                
              </section>


              <section className=" mt-5"  id="testimonial">
                <div className="container mt-5">
                  <p className="h5">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid facilis sapiente est maiores corrupti, accusamus dicta animi in illo temporibus libero, modi placeat earum esse quo? Minima molestias, nisi sapiente veritatis commodi aspernatur, asperiores consectetur maxime esse soluta facere at, quia vero minus. Hic facere cumque distinctio quisquam quidem ipsam!
                  </p>
                  <p className="h5">manuel navarro</p>
                </div>
              </section>
      </div>
    );
  };
  