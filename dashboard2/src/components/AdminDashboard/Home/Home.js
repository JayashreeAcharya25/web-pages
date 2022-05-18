import React, { Component } from 'react'
import './Home.css'

import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const curTime = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

export default class Home extends Component {

    render() {
       
        return (
            
            <div className="dash-class">
                
                <div className="dash-home">
                    <div className="dash-header">
                        <a href="/admin_dashboard/Home">Dashboard</a>
                        <div>
                            <p>{date} &nbsp; | &nbsp; {curTime}</p>
                        </div>
                    </div>
                    <div className="dash-title">
                        <h2>Blog</h2>
                        <hr />
                    </div>
               
                    <div className="div-card-row card-list">
                        <div className="content-cards">
                            <div className="card-single">
                                <div className="card-body">
                                    <i class="fas fa-blog"></i>
                                    <span>All Post</span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div className="card-body">
                                    <i class="fas fa-clipboard"></i>
                                    <span>Create Post</span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div className="card-body">
                                    <i class="fas fa-layer-group"></i>
                                    <span>All Categories</span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div className="card-body">
                                    <i class="fas fa-list-ul"></i>
                                    <span>Add category</span>
                                </div>
                            </div>
                            <div className="card-single">
                                <div className="card-body">
                                    <i class="fal fa-user-chart"></i>
                                    <span>Statistics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-card-row">
                        <div className="row">
                            <input className='search-bar' type="search" placeholder='Search here...'/>
                        </div>
                    </div>
                    <div className="div-card-row">
                        <div className="row">
                            <div className="col-sm-7">
                                
                                <img src={process.env.PUBLIC_URL + "/img/dashboard-banner.jpg"} alt="" />
                            </div>
                            <div className="col-sm-5 contacts-list">
                                <ul class="list-unstyled">
                                        <li class="media">
                                            <img class="mr-3 img-fluid" src={process.env.PUBLIC_URL + "/img/user1.png"} alt="Generic placeholder"/>
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-1">Mary Smith</h5>
                                                <p>Address: <em>906 Ramblewood Dr. Mesa, AZ 85203</em></p>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <img class="mr-3 img-fluid" src={process.env.PUBLIC_URL + "/img/user2.png"} alt="Generic placeholder"/>
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-1">James Williams</h5>
                                                <p>Address: <em>2 Wilson Ave. Nazareth, PA 18064</em></p>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <img class="mr-3 img-fluid" src={process.env.PUBLIC_URL + "/img/user3.png"} alt="Generic placeholder"/>
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-1">Patricia Davis</h5>
                                                <p>Address: <em>3 Buttonwood Drive Madisonville, KY 42431</em></p>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <img class="mr-3 img-fluid" src={process.env.PUBLIC_URL + "/img/user4.png"} alt="Generic placeholder"/>
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-1">Amy Thomas</h5>
                                                <p>Address: <em>8569 Bellevue Drive Summerville, SC 29483</em></p>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <img class="mr-3 img-fluid" src={process.env.PUBLIC_URL + "/img/user5.png"} alt="Generic placeholder"/>
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-1">Mark Jackson</h5>
                                                <p>Address: <em>66 Bridgeton Rd. Fuquay Varina, NC 27526</em></p>
                                            </div>
                                        </li>
                                    <li class="btn-link"><a href="/blogs">View All</a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>

                    <div className="div-card-row">
                        <div className="row">
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
