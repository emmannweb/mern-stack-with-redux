import React from 'react'

const Card = ({ productName, price, category, image }) => {
    return (
        <>
            <div className="col-sm-4">

                <figure className="card card-product-grid card-lg"> <a href="#" className="img-wrap" data-abc="true"> <img src={image} /> </a>
                    <figcaption className="info-wrap">
                        <div className="row">
                            <div className="col-md-9 col-xs-9"> <a href="#" className="title" data-abc="true">{productName}</a> <span className="rated">{category}</span> </div>
                            <div className="col-md-3 col-xs-3">
                                <div className="rating text-right"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <span className="rated">Rated 4.0/5</span> </div>
                            </div>
                        </div>
                    </figcaption>
                    <div className="bottom-wrap-payment">
                        <figcaption className="info-wrap">
                            <div className="row">
                                <div className="col-md-9 col-xs-9"> <a href="#" className="title" data-abc="true">${price}</a> <span className="rated"></span> </div>
                                <div className="col-md-3 col-xs-3">
                                    <div className="rating text-right"> </div>
                                </div>
                            </div>
                        </figcaption>
                    </div>
                    <div className="bottom-wrap"> <a href="#" className="btn btn-primary float-right" data-abc="true"> Add to cart </a>
                        <div className="price-wrap"> <a href="#" className="btn btn-warning float-left" data-abc="true">  </a> </div>
                    </div>
                </figure>


            </div>
        </>
    )
}

export default Card