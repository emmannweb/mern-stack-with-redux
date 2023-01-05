import React, { useEffect, useState } from 'react'
import { listOfProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';



const Home = () => {
    const navigate = useNavigate();

    const { products, loading, count, error } = useSelector(state => state.productList);

    const [pageNumber, setPageNumber] = useState(1);
    const [cat, setCat] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOfProducts(pageNumber, cat));
    }, [dispatch, pageNumber, cat])
    return (
        <>
            <div className="home_page container">
                <Navbar />
                <div className="row">

                    {

                        loading ? "loading" : products && products.map(product => (

                            <Card productName={product.name} price={product.price} category={product.category ? product.category.name : ''} image={product.image ? product.image.url : ''} />

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home