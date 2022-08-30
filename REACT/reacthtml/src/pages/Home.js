import React from 'react';
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


class Home extends React.Component {
    render() {
        return (
            <main>
         <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Noah Mattocks Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Contacts"
              menuVariant="dark"
            >
              <NavDropdown.Item href="https://www.linkedin.com/in/noah-mattocks-3030bb235/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/TheHalfrican">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.noahmattocks.com/">
                Music & Acting Website
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-xl-7 mb-lg-0 py-5 py-md-6">
              <div className="lc-block mb-3 mb-md-5 lh-1">
                <div editable="rich">
                  <h1 className="rfs-30 text-primary">
                    From UCLA to the Professional World
                  </h1>
                </div>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
            <div className="col-12 col-md-6 col-xl-5">
              <div className="lc-block px-md-4 px-lg-5 lh-lg">
                <div editable="rich">
                  <p className="rfs-7">
                    Noah Mattocks has the expertise and knowledge to take your web
                    design to the next level.
                  </p>
                </div>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
          </div>
          <div className="row">
            <h3>Click on the Image to be swept away to an Anime Search Engine</h3>
            <div className="col-md-12 g-0">
              <div className="lc-block">
                <a href="https://ethanp94.github.io/The-Grand-Line/">
                  <img className="img-fluid w-100" src="./assets/images/grand-line-anime-screenshot01.JPG" alt="Photo by The Grand Line Anime Inc." style={{objectFit: 'cover', maxHeight: '35vh'}} />
                </a>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
          </div>
          <div className="row mt-3">
            <div className="col-md-12 d-flex justify-content-center align-items-baseline">
              <div className="lc-block py-4 me-3">
                <div editable="rich">
                  <h4 className="fw-bolder">From amatuer</h4>
                </div>
              </div>
              {/* /lc-block */}
              <div className="lc-block py-4">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="2em" height="2em" viewBox="0 0 24 24" lc-helper="svg-icon" fill="currentColor">
                  <path d="M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z" />
                </svg>
              </div>
              {/* /lc-block */}
              <div className="lc-block py-4 ms-3">
                <div editable="rich">
                  <h4 className="fw-bolder">to Professional</h4>
                </div>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
          </div>
        </div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <a href="https://thehalfrican.github.io/Random-Password-Generator/">
                <img src="./assets/images/Screen Shot 2022-03-18 at 6.23.54 PM.png" className="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
              </a>
            </div>
            <div className="col-lg-6">
              <div className="lc-block mb-3">
                <div editable="rich">
                  <h2 className="fw-bold display-5">
                    Click the button below to see a great random password generator
                  </h2>
                </div>
              </div>
              <div className="lc-block mb-3">
                <div editable="rich">
                  <p className="lead">
                    This right here is Random Password Generator. It gives the user
                    the option to include uppercase letters, lowercase letters,
                    numbers, and a select amount of accepted industry standard
                    symbols.
                  </p>
                </div>
              </div>
              <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                <a className="btn btn-primary px-4 me-md-2" href="https://thehalfrican.github.io/Random-Password-Generator/" role="button">Click Here!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-4 py-5 my-5 text-center">
          <div className="lc-block mb-4">
            <div editable="rich">
              <h2 className="display-2 fw-bold">
                Level up your <span className="text-primary">WebSite!</span>
              </h2>
            </div>
          </div>
          <div className="lc-block col-lg-6 mx-auto mb-5">
            <div editable="rich">
              <p className="lead">
                Noah also works wonders on the back end. <br />
                This Team Profile Generator dynamically makes a custom webpage for
                your team using node.
              </p>
            </div>
          </div>
          <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a className="btn btn-primary btn-lg px-4 gap-3" href="https://github.com/TheHalfrican/The-Team-Profile-Generator" role="button">Repo Link</a>
          </div>
          <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
            <img className="img-fluid" src="./assets/images/Sample-Image2.png" width height={783} srcSet sizes alt="" />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="container-fluid col-xxl-8">
            <div className="row flex-lg-nowrap align-items-center g-5">
              <div className="order-lg-1 w-100">
                <img style={{clipPath: 'polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)'}} src="./assets/images/Sample-Image3.png" className="d-block mx-lg-auto img-fluid" alt="Photo by Milad Fakurian" loading="lazy" srcSet="./assets/images/Sample-Image3.png" sizes="(max-width: 1080px) 100vw, 1080px" width={2160} height={768} />
              </div>
              <div className="col-lg-6 col-xl-5 text-center text-lg-start pt-lg-5 mt-xl-4">
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <h1 className="fw-bold display-3">
                      Welcome to Key Change.
                    </h1>
                  </div>
                </div>
                <div className="lc-block mb-5">
                  <div editable="rich">
                    <p className="rfs-8">
                      As a musician as well, creating an instrument trading site for fellow instrumentalists was a no-brainer.
                    </p>
                  </div>
                </div>
                <div className="lc-block mb-6">
                  <a className="btn btn-primary px-4 me-md-2 btn-lg" href="https://glacial-gorge-09803.herokuapp.com/" role="button">Come Visit</a>
                </div>
                <div className="lc-block">
                  <div editable="rich">
                    <p className="fw-bold">Familiar with environments and Database Programs such as:</p>
                  </div>
                </div>
                <div className="row">
                  <div className="lc-block col-3">
                    <img className="img-fluid wp-image-975" src="./assets/images/nodejs.jpg" width height={300} srcSet sizes alt="" />
                  </div>
                  <div className="lc-block col-3">
                    <img className="img-fluid wp-image-977" src="./assets/images/mysql.png" width height={300} srcSet sizes alt="" />
                  </div>
                  <div className="lc-block col-3">
                    <img className="img-fluid wp-image-974" src="./assets/images/MongoDB.jpeg" width height={300} srcSet sizes alt="" />
                  </div>
                  <div className="lc-block col-3">
                    <img className="img-fluid wp-image-967" src="./assets/images/graphql.png" width height={300} srcSet sizes alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* /lc-block */}
          </div>
        </div>
        <div>
        <div className="d-flex container-fluid" lc-helper="background" style={{height: '50vh', background: 'url(./assets/images/coding\ thing.jpeg) center / cover no-repeat'}} />
        <div className="container p-5 bg-light" style={{marginTop: '-100px'}}>
          <div className="row">
            <div className="col-md-4 text-center align-self-center">
              <div className="lc-block border-end border-2">
                <div editable="rich">
                  <p className="display-4 text-secondary">WHY Noah?</p>
                </div>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
            <div className="col-md-8">
              <div className="lc-block">
                <div editable="rich">
                  <p className="display-4">
                    Think different and invest in your web page or web application.
                  </p>
                </div>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
          </div>
          <div className="row">
            <div className="col-md-9 offset-md-1">
              <div className="lc-block mt-5">
                <div editable="rich">
                  <p className="lead text-secondary">
                    Noah Mattocks has the knowledge and the skills to elevate your
                    business to the next level with adaptive and inuitative
                    design.&nbsp;
                  </p>
                  <p className="lead text-secondary">
                    You can relax, rest easy, and feel at ease knowing your
                    web-related needs are taken care of. Any problem or concern you
                    have will be addressed with speed and efficiency.
                  </p>
                </div>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
          </div>
        </div>
      </div>
      </div>
    
          </main>
        );
        
    
    }
}

export default Home 