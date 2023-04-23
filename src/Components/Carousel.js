import React from 'react'

export default function Carousel() {
    return (
        <div >
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active c-item" >
                        <img src="https://images.unsplash.com/photo-1544801466-8de7143ea602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100 c-img" alt="..."/>
                            <div className="carousel-caption top-0 mt-4 color-black">
                                <h1 className='fw-bolder display-1 text-capitalize my-4'>TravelX Tours</h1>
                                <p className='fs-3 text-uppercase'>Discover the hidden World</p>
                                <button className='btn btn-primary px-4 py-2 fs-5 mt-5'>Book Tour</button>
                            </div>
                    </div>
                    <div className="carousel-item c-item" >
                        <img src="https://images.unsplash.com/photo-1547994985-540696199b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100 c-img" alt="..."/>
                        <div className="carousel-caption top-0 mt-4 color-black">
                                <h1 className='fw-bolder display-1 text-capitalize my-4'>TravelX Tours</h1>
                                <p className='fs-3 text-uppercase'>Discover the hidden World</p>
                                <button className='btn btn-primary px-4 py-2 fs-5 mt-5'>Book Tour</button>
                            </div>
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" className="d-block w-100 c-img" alt="..."/>
                        <div className="carousel-caption top-0 mt-4 color-black">
                                <h1 className='fw-bolder display-1 text-capitalize my-4'>TravelX Tours</h1>
                                <p className='fs-3 text-uppercase'>Discover the hidden World</p>
                                <button className='btn btn-primary px-4 py-2 fs-5 mt-5'>Book Tour</button>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
