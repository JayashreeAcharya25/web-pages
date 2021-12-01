import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

import '../core-ui/dashboard.css'

import Home from './home'

export default class dashboard extends Component {
    render() {
        return (
            <>
                <div className="side-nav">
                <input type="checkbox" id="check"/>
                    {/* header area start */}
                <header>
                    
                    
                    <div class="right_area">
                        <button class="logout_btn">Logout</button>
                    </div>
                </header>
                    {/* header area end */}
                    {/* sidebar start */}
                <Router>
                    <div class="sidebar">
                        <div class="left_area">
                            <h3><img src={process.env.PUBLIC_URL + '/svg/framer.svg'} alt="disc" /> <span>Admin</span></h3>
                        </div>
                        <hr/>
                        
                            <Link to="/admin_dashboard/Home"><img src={process.env.PUBLIC_URL + '/svg/bar-chart.svg'} alt="disc" /><span>Dashboard</span></Link>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/svg/bell.svg'} alt="disc" /><span>Contact</span></a>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/svg/box.svg'} alt="disc" /><span>Portfolio</span></a>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/svg/settings.svg'} alt="disc" /><span>Setting</span></a>
                            <a href="/"><img src={process.env.PUBLIC_URL + '/svg/user.svg'} alt="disc" /><span>Leaderboard</span></a>
                    
                        <label for="check">
                            <img src={process.env.PUBLIC_URL + '/svg/chevron-right.svg'} alt="disc" id="sidebar_btn"></img>
                        </label>
                    </div>
                        {/* sidebar end */}
                    <div className="content">
                        
                        <Home path="/admin_dashboard/Home"></Home>
                                
                    </div>
                </Router>
            
            </div>
            </>
        )
    }
}
