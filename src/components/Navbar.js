import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = props => {
    
    return (
        <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.check===true?props.theme:props.mode} bg-${props.check===true?props.theme:props.mode} shadow mb-2 rounded`}>
                    <Link className="navbar-brand mx-3" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.abouttext}</Link>
                            </li>
                            
                            
                        </ul>
                        <div className="d-flex">
                            <div className="bg-white rounded mx-2 border border-dark" defaultChecked onClick={()=>{props.togglemode('white')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-danger rounded mx-2 border border-dark" onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-success rounded mx-2 border border-dark" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-warning rounded mx-2 border border-dark" onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                        </div>

                    <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={()=>{props.mode==='light'?props.togglemode('#00244a'):props.togglemode('light')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'? 'dark' : 'light'} Mode</label>
                      </div>
                    </div>
                </nav>
        </div>
    )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    abouttext:PropTypes.string.isRequired
}
Navbar.defaultProps = {  //will execute when there will be no title and about in navbar object
    title:"Set title ",
    abouttext:"Set about "
}

export default Navbar