import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }
  render () {
    return (
        {this.renderRedirect()}
    )
  }
}
  renderRedirect2 = () => {
    if (this.state.redirect) {
      return <Redirect to='/signup' />
    }
  }
  render () {
    return (
        {this.renderRedirect2()}
    )
  }
}
componentWillMount() {
    if (sessionStorage.getItem('jwt'))
      this.props.loginSuccess();
  }

  render() {
    console.log("logged_in: ", this.props.logged_in);

    if (this.props.logged_in) {
      return (
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/"><img src='image/ico.png' height="30" width="41"/></NavbarBrand>

                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/index'> HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/books'> BOOK</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/mylibrary'> MY LIBRARY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='#contact'> CONTACT US</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>

                <Nav className="myBorder1" navbar>
                    <NavItem>
                        <a href="/logout"><span className="fa fa-sign-out"></span></a>						
                    </NavItem>
                </Nav>

                </div>
        </Navbar>
    </div>
    } else {
      return (
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/"><img src='image/ico.png' height="30" width="41"/></NavbarBrand>

                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/index'> HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/books'> BOOK</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/mylibrary'> MY LIBRARY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='#contact'> CONTACT US</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>

                <Nav className="myBorder1" navbar>
                    <NavItem>
                        <Button outline onClick={this.setRedirect}}><span className="fa fa-sign-in fa-lg"></span></Button>
                        <Button outline onClick={this.setRedirect2}><span className="fa fa-user-plus"></span></Button>						
                    </NavItem>
                </Nav>

                </div>
        </Navbar>
    </div>	  
    );
  }
}

export default Header;