import React, { useEffect, useState } from 'react'
import { listOfProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState(true);
    useEffect(() => {

        if (val) {
            navigate('/user/signin')
        }

    }, [val])


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
                <h1>Home page.</h1>
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