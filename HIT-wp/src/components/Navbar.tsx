import { Button ,Navbar as NavbarBs,Nav,  Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function Navbar() {
    return(
        <div>
            <NavbarBs sticky="top" className="bg-dark text-white shadow-sm mb-3 ">
                
                <Container>
                    <Nav className="me-auto " >     
                    <a className="navbar-brand text-white"  href="#">
         <h1> CANTEEN E-TICKETING SYSTEM</h1>
        </a>

              <Nav.Link className="text-white" to="/" as={NavLink}>
                            Home
                </Nav.Link>
                <Nav.Link className="text-white" to="/store" as={NavLink}>
                            Store
                </Nav.Link>
                 <Nav.Link className="text-white" to="/login" as={NavLink}>
                            Login
                        </Nav.Link>
                    </Nav>
                    <Button  className="rounded-circle" >
                        <img src="svgs/cart.png" style={ {width:"3rem", height:"3rem", position: "relative"}}  alt=""></img>
                    
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-text-center" style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom:0,right:121, transform: "translate(25%,2%)"}}>3</div>
                    </Button>



                </Container>
                </NavbarBs>
        </div>
    )
}