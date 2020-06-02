import React from "react"
import Img from 'gatsby-image'

const ServiceSection = ({servicio }) => {
    
    return (
        <>
         <section className="section-80 special color-purple shadow " style={{backgroundImage: `linear-gradient(90deg, ${servicio.color.hex} 0%, ${servicio.color.hex} 100%)`}}>
              <div className="container">
                <header className="major">
                  <h1><strong>{servicio.titulo} </strong></h1>
                </header>
              </div>
            </section>
            <section className="section-80 special">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <header className="major">
                      <h2><strong>{servicio.descripcion}</strong>
                      </h2>
                    </header>
                  </div>
      
      
                  {
                    servicio.modulos.map(item => (
                      <div key={item.id} className="col-sm-10 col-md-5 col-lg-3">
                        <span className="image fit shadow rounded"><Img fluid={item.imagen.fluid} alt={item.imagen.alt} /></span>
                        <h3 className="font-weight-bold">{item.titulo}</h3>
                        <p className="font-weight-bold">{item.palabrasClave}</p>
                      </div>
                    ))
                  }
      
                </div>
      
              </div>
            </section>
            <section className="section-80 special color-orange shadow">
              <div className="container">
                <header className="major">
                  <h1><strong>SERVICIOS POR INDUSTRIAS</strong></h1>
                </header>
              </div>
            </section>
            <section className="section-80 special">
              <div className="grid-wrapper">
                <div className="col-12">
                  <header className="major">
                    <h2>Creamos Interfaces Funcionales y Experiencia Digital Atractiva para Mejorar el Rendimiento de tu Marca
      </h2>
                  </header>
                </div>
                <div className="col-12">
                  <ul className="major-icons">
                    <li className="row justify-content-center" ><span className="icon style1 major fa-coffee" ></span><div className="font-weight-bold">Cafeterias</div></li>
                    <li className="row justify-content-center"><span className="icon style3 major fa-plane"></span><div className="font-weight-bold">Agencias Inmobiliarias</div></li>
                    <li className="row justify-content-center"><span className="icon style2 major fa-home"></span><div className="font-weight-bold">Agencias de Viajes</div></li>
                    <li className="row justify-content-center"><span className="icon style4 major fa-hospital-o"></span><div className="font-weight-bold">Medicina</div></li>
                    <li className="row justify-content-center"><span className="icon style5 major fa-hotel"></span><div className="font-weight-bold">Hoteles</div></li>
                    <li className="row justify-content-center"><span className="icon style6 major fa-glass"></span><div className="font-weight-bold">Restaurantes</div></li>
                  </ul>
                </div>
      
              </div>
            </section>
        </>
      )
}

export default ServiceSection
