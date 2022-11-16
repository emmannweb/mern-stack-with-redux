import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { listOfProducts, deleteProduct } from '../../actions/productAction';

const ListProduct = () => {

    const { products, loading, count, error } = useSelector(state => state.productList);

    const [pageNumber, setPageNumber] = useState(1);
    const [cat, setCat] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOfProducts(pageNumber, cat));
    }, [dispatch, pageNumber, cat])

    const deleteSingleProduct = (id) => {
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteProduct(id));
            dispatch(listOfProducts(pageNumber, cat));
        }
    }

    return (
        <>
            <div className="container">

                <h1>list of products</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            loading ? "loading" : products && products.map(product => (


                                <tr key={product._id}>
                                    <th scope="row">{product._id}</th>
                                    <td>{product.name}</td>
                                    <td>
                                        <img width={"80px"} src={product.image ? product.image.url : ''} alt={product.name} />
                                    </td>
                                    <td>${product.price} </td>
                                    <td>{product.category ? product.category.name : ''}</td>
                                    <td>
                                        <i onClick={() => deleteSingleProduct(product._id)} className="fa fa-trash btn_hover" aria-hidden="true"></i>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>


        </>
    )
}

export default ListProduct