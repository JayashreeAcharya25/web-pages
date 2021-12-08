import React, { Component } from 'react'
import '../core-ui/home.css'


export default class home extends Component {

    
    render() {
        return (
            
            <div className="home">
                <h4 className="greet1">Hi Lorem</h4>
                <h1 className="greet2">Welcome Back !!</h1>

                <div className="grid-container-1">

                    <div className="div-grid-item">
                        <div className="grid-item-image">
                            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="" />
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div> 
                        </div>

                        <div className="div-card">
                            <div class="card">
                                
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/">View More</a>
                                </div>
                            </div>
                            <div class="card">
                                
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/">View More</a>
                                </div>
                            </div>
                            <div class="card">
                                
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-grid-item">
                        <h3>Recent Contacts</h3>
                        <div className="grid-item-container">
                            <div className="grid-container-item">
                                <img src={process.env.PUBLIC_URL + '/images/user1.jpg'} alt="" /> 
                                <div className="item-info">
                                    <h4>Name Lorem</h4>
                                    <p>Role : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, cum?</p>
                                </div>
                            </div>
                            <div className="grid-container-item">
                                <img src={process.env.PUBLIC_URL + '/images/user2.jpeg'} alt="" /> 
                                <div className="item-info">
                                    <h4>Name Lorem</h4>
                                    <p>Role : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, cum?</p>
                                </div>
                            </div>
                            <div className="grid-container-item">
                                <img src={process.env.PUBLIC_URL + '/images/user1.jpg'} alt="" /> 
                                <div className="item-info">
                                    <h4>Name Lorem</h4>
                                    <p>Role : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, cum?</p>
                                </div>
                            </div>
                            <div className="grid-container-item">
                                <img src={process.env.PUBLIC_URL + '/images/user1.jpg'} alt="" /> 
                                <div className="item-info">
                                    <h4>Name Lorem</h4>
                                    <p>Role : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, cum?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-container-2">
                    <div id="carouselExampleInterval2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                
                                <div className="carousel-conatiner">
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div className="carousel-conatiner">
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="carousel-conatiner">
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={process.env.PUBLIC_URL + '/images/Bg.jpg'} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                </div>

            </div>
        )
    }
}
