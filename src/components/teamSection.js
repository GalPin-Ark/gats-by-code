import React from "react"
import Img from 'gatsby-image'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const TeamSection = ({ equipo}) => (
  <>
   <section className="section-80 color-blue special shadow" style={{backgroundImage: `linear-gradient(90deg, ${equipo.color.hex} 0%, ${equipo.color.hex} 100%)`}}>
        <div className="container">
          <header className="major">
            <h1><strong>{equipo.titulo}</strong></h1>
          </header>
        </div>
      </section>
      <section className="section-80 special">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <header className="major">
                <h2>{equipo.subtitulo}</h2>
              </header>
              <p>{equipo.descripcion}</p>
            </div>
            {
              equipo.integrantes.map(item => (
                <div key={item.id} className="col-sm-10 col-md-5 col-lg-4 col-xl-3 shadow rounded m-2">
                  {/* <div className="container"> */}

                  <div className="row justify-content-center card-body">
                    <div className="col-sm-8 col-md-12 col-lg-12 d-flex justify-content-center m-3" >
                      <Img className="card-img-top rounded-circle img-size shadow rounded" fluid={item.perfil.fluid} />
                      <div className="position-absolute" style={{ bottom: `-1.5rem` }}>
                        <Fab color="primary" aria-label="add">
                          <AddIcon />
                        </Fab>
                      </div>
                    </div>
                    <div className="col-sm-8 col-md-12 col-lg-12 row justify-content-center mt-3" >
                      <h3 className="card-title font-weight-bold col-12">{item.nombre}</h3>
                      <h5 className="card-title font-weight-bold col-12">{item.puesto}</h5>

                    </div>
                    <div className="container">
                      <ul className="list-inline">
                        <li className="list-inline-item"><a
                          href="https://www.facebook.com/unozerocode/" target="_blank" rel="noreferrer"><i className="icon fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a
                          
                          href="https://twitter.com/unozerocode/" target="_blank" rel="noreferrer"><i className="icon fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a
                          href="https://api.whatsapp.com/send?phone=529514083222&amp;text=¡Hola!%20Estoy%20interesado%20en%20obtener%20más%20información%20sobre%20sus%20servicios"
                          target="_blank" rel="noreferrer"><i className="icon fa-whatsapp mdi"></i></a>
                        </li>
                        <li className="list-inline-item"><a
                          
                          href="https://www.linkedin.com/company/unozerocode/about/" target="_blank" rel="noreferrer"><i className="icon fa fa-linkedin"></i></a></li>

                      </ul>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              ))
            }

          </div>
        </div>
      </section>

      
  </>
)

export default TeamSection
