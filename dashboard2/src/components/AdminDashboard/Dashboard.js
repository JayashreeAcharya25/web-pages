import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './sidenav.css'

import Home from './Home/Home'

export default class Dashboard extends Component {

  render(){  

    return (
      <>
        <div className="side-nav">
          <input type="checkbox" id="check"/>
            {/* header area start */}
            <header>
              <div className="div-wrapper">
                <label for="check">
                  <i class="fas fa-bars" id="sidebar_btn"></i>
                </label>
                
              </div>
              <div class="right_area">
              
                <button class="logout_btn">Logout</button>
              </div>
            </header>
            {/* header area end */}
            {/* sidebar start */}
            <Router>
            <div class="sidebar">
              <div class="left_area">
                <h3><Link to="/dashboard/Home">Blog</Link></h3>
              </div>
              <br/>
              <div class="dashboard-profile">
                <img src={process.env.PUBLIC_URL + '../img/images.png'} class="profile_image" alt=""/>
                  <h4>Admin</h4>
              </div>

              <br/>
              
              <Link to="/dashboard/Home"><i class="fal fa-desktop"></i><span>Dashboard</span></Link>
              <Link to="/"><i class="fal fa-blog"></i><span>All Post</span></Link>
              <Link to="/"><i class="fal fa-comments-alt"></i><span>Latest Comments</span></Link>
              <Link to="/"><i class="fal fa-clipboard"></i><span>Create Post</span></Link>
              <Link to="/"><i class="fal fa-hashtag"></i><span>Tags</span></Link>
              <br/>

              <span class="span">Categories</span>
              <Link to="/"><i class="fal fa-layer-group"></i><span>All Categories</span></Link>
              <Link to="/"><i class="fal fa-draw-square"></i><span>Design</span></Link>
              <Link to="/"><i class="fal fa-project-diagram"></i><span>Interior Design</span></Link>
              <Link to="/"><i class="fal fa-pencil-alt"></i><span>Graphics</span></Link>
              <Link to="/"><i class="fal fa-list-ul"></i><span>Add category</span></Link>
                
              <br />
              <span class="span">Others</span>
              <Link to="/"><i class="fal fa-user-chart"></i><span>Statistics</span></Link>
              <Link to="/"><i class="fal fa-comment-alt-lines"></i><span>Feedback</span></Link>
              <Link to="/"><i class="fal fa-users"></i><span>Contact</span></Link>
              <i onClick={ this.handleLogOut } class="fal fa-sign-out-alt sign-out"></i>

              <div className="footer">
                <p>Copyright @ 2022 | Jayashree Acharya</p>
              </div>
            </div>
            {/* sidebar end */}
            <div className="content">
              <Switch>
                <Route path="/dashboard/Home" component={Home}></Route>
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
 }
}
