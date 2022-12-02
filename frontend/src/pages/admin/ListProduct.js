import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { listOfProducts, deleteProduct } from '../../actions/productAction';
import { PRODUCT_LIST_RESET } from '../../constants/productConstants';

const ListProduct = () => {
    const navigate = useNavigate();

    const { products: prods, loading: loadingList, count, error: errorList, success, isUpdated } = useSelector(state => state.productList);

    const [pageNumber, setPageNumber] = useState(1);
    const [cat, setCat] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: PRODUCT_LIST_RESET });
        dispatch(listOfProducts(pageNumber, cat));

    }, [dispatch, pageNumber, cat, errorList, isUpdated])

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

                            loadingList ? "loading" : prods && prods.map(product => (


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
                                        <Link style={{ paddingLeft: "5px" }} to={`/admin/edit/product/${product._id}`}> <i className="fas fa-edit btn_hover"></i></Link>
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