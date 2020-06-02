import React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import {
  Dialog, List, ListItem, Divider, AppBar, Toolbar, IconButton, Typography, Slide,
  Chip, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Badge, Checkbox,
  ListItemIcon
}
  from '@material-ui/core'
import { Close, ExpandMore, ShoppingCart } from '@material-ui/icons'
// import Dialog from '@material-ui/core/Dialog'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import Divider from '@material-ui/core/Divider'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
// import Slide from '@material-ui/core/Slide'
import { withStyles, makeStyles } from '@material-ui/core/styles'
// import Chip from '@material-ui/core/Chip'
// import ExpansionPanel from '@material-ui/core/ExpansionPanel'
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import PayPalBtn from '../components/paypalButton'
// import Badge from '@material-ui/core/Badge'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import Checkbox from '@material-ui/core/Checkbox'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ServiceSection from '../components/serviceSection'
import TeamSection from '../components/teamSection'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  inline: {
    display: 'inline',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
const formatPrice = (amount, currency) => {
  let price = amount.toFixed(2)
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(price)
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IndexPage = ({ data: { slides, product,servicio,equipo } }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [cart, setCart] = React.useState(0);
  const [cost, setCost] = React.useState(0);
  const [checked, setChecked] = React.useState([0]);
  const handleClose = () => {
    setOpen(!open);
    setChecked([0]);
    setCart(0);
    setCost(0)
  };

  const handleToggle = (value, precio) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      setCart(cart + 1);
      setCost(cost + precio)
    } else {
      newChecked.splice(currentIndex, 1);
      setCart(cart - 1);
      setCost(cost - precio)
    }
    setChecked(newChecked);
  };

  return (

    <Layout page="Inicio">
      <SEO title="Inicio" />
      { slides.edges[0].node && <section id="header" style={{ backgroundImage: `url('${slides.edges[0].node.imagen.url}')` }}>

        <div className="inner container">
          <span className="icon major fa-cloud"></span>
          <h2>{slides.edges[0].node.titulo}<br />.</h2>
          <h4 >{slides.edges[0].node.slogan}</h4>
          <ul className="actions">
            <li><button className="btn btn-info btn-lg" style={{ backgroundColor: `${slides.edges[0].node.btnColor.hex}` }} onClick={handleClose} > <ShoppingCart /> Comprar Servicio</button></li>
          </ul>
        </div>
      </section>
    }
      <ServiceSection servicio={servicio}/>


      <TeamSection equipo={equipo}/>
      <section>
        <div>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <Close />
                </IconButton>
                <Typography variant="h6" className={classes.title} style={{ color: `white` }}>
                  Pagar Servicios
            </Typography>
                <div>
                  <Chip
                    icon={<IconButton aria-label="cart">
                      <StyledBadge badgeContent={cart} color="secondary">
                        <ShoppingCart />
                      </StyledBadge>
                    </IconButton>}
                    label={`Total: ${formatPrice(cost, "MXN")}`}
                  />

                </div>
              </Toolbar>
            </AppBar>
            <List className="overflow-auto" style={{ height: `73%` }}>
              {
                product.edges.map(({ node: item }, index) => (

                  <ListItem alignItems="flex-start" key={item.id} >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(item.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${item.id}` }}
                        onClick={handleToggle(item.id, item.precio)}
                      />
                    </ListItemIcon>
                    <ExpansionPanel className="rounded" style={{ width: `100%` }} id={`checkbox-list-label-${item.id}`}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                        <div className="col-7">
                          <Typography className={classes.heading}>{item.nombre}</Typography>
                        </div>
                        <div className="col-5">
                          <Typography className={classes.secondaryHeading}> {formatPrice(item.precio, item.moneda)} / Pago {item.tipoPago}</Typography>
                        </div>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                          <Img fluid={item.imagen.fluid} style={{ maxWidth: `150px` }} />

                        </div>
                        <div className="col-sm-8 col-md-9 col-lg-10">
                          <Typography variant="caption">
                            {item.descripcion}
                          </Typography>
                        </div>
                      </ExpansionPanelDetails>
                      <Divider />
                    </ExpansionPanel>
                  </ListItem>

                ))
              }

            </List>

            <div className={`shadow pt-3 d-flex justify-content-center fixed-bottom ${(cart < 1) ? "disable" : null}`} >
              <PayPalBtn
                amount={cost}
                currency={'MXN'}
                onSuccess={(details, data) => {
                  /** Here you can call your backend API
                    endpoint and update the database */
                  console.log(details, data);
                }}
              />
            </div>
          </Dialog>
        </div>
      </section>
    </Layout >

  )
}

export default IndexPage
export const query = graphql`
query ServicioQuery {
  slides: allDatoCmsSlide {
    edges{
      node{
      titulo
      id
      slogan
      btnTexto
      imagen{
        url
      }
      btnColor{
        hex
      }
      }
    }
   }
   product: allDatoCmsProducto {
    edges{
      node{
       id
       nombre
       precio
       tipoPago
       imagen{
         url
         fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
            }
       }
       moneda
       descripcion
       sku
      }
    }
   }
   servicio: datoCmsServicio {
    id
    titulo
    color{
      hex
    }
    descripcion
    modulos{
      id
      imagen{
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
               ...GatsbyDatoCmsFluid
                 }
        alt
      }
      titulo
      palabrasClave
      descripcion
    }
  
  }
  equipo: datoCmsEquipo{
    id
    titulo
    subtitulo
    color{
      hex
    }
    descripcion
    integrantes{
      id
      nombre
      puesto
      definicion
      descripcion
      cita
      perfil{
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
               ...GatsbyDatoCmsFluid
                 }
      }
    }
    
  }
}
`;



/**
 *
 *
 *
 * imagen{
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
               ...GatsbyDatoCmsFluid
                 }
        alt
      }


 * perfil{
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
               ...GatsbyDatoCmsFluid
                 }
      }
*/