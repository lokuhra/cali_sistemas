import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Confidencialidad de la información.</h3>
                                <p>Encriptación para evitar que cualquiera pueda ver los datos de su empresa.</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Autenticación segura.</h3>
                                <p>Doble y triple autenticación para proteger las cuentas de sus usuarios.</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Integridad</h3>
                                <p>Garantizamos que la información grabada sea lo que se vea.</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Infraestructuras IT</h3>
                                <p>Datacenter, análisis de tecnologías, armado de rack, cableado de Datos, Telefonía CAT 5, 6 y de Fibra Óptica</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consultoria IT</h3>
                                <p>Reconocemos las oportunidades destacadas, diseñamos minuciosamente las mejores soluciones posibles y aseguramos una eficiente implementación.</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Auditoria</h3>
                                <p>Servicio enfocado a la determinación del nivel de cumplimiento que tiene una organización hacia sus políticas, estándares y procedimientos previamente definidos para el uso racional de sus recursos de TI.</p>
                            </header>
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Nosotros</h2>
                            </header>
                            <p>Somos una empresa pionera en la prestación de servicios informáticos empresariales y corporativos, garantizamos la seguridad y correcto funcionamiento de sus sistemas. Provisionamos de servicios y productos de seguridad de la información y continuidad del Negocio, que mejoren la protección de los recursos de nuestros clientes, con el fin de que logren sus objetivos y operen con un nivel de riesgo aceptable, en situación normal y en emergencia.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Soluciones</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
