import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from '../../actions/productAction';
import { SingleProd } from '../../actions/productAction';
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';



const UpdateProduct = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const navigate = useNavigate();
    const { product, loading, success, error } = useSelector(state => state.singleProduct);
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = useSelector(state => state.updateProd);

    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');


    //fetch categories
    const showCategories = async () => {
        try {
            const { data } = await axios.get('/api/category/all');
            setCategories(data.categories);
        } catch (error) {
            console.log(error.response.data.error)
        }
    }


    useEffect(() => {

        if (successUpdate) {
            navigate('/admin/products');
        }
        if (!product || product._id !== productId || successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET });
            dispatch(SingleProd(productId));
        } else {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setCategory(product.category);
            setImagePreview(product.image ? product.image.url : image);
        }

    }, [dispatch, product, productId, successUpdate]);

    useEffect(() => {
        showCategories();
    }, []);


    const handleImage = (e) => {
        //console.log("cliked");
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () => {
            setImage(reader.result);
        }
        setImagePreview('');
    }


    // submit product
    const submitProduct = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ _id: productId, name, description, price, category, image }));
    }


    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-3 form_wrapper">
                            <div className="form-signin w-100 m-auto mainform">
                                <form onSubmit={submitProduct}>

                                    <h1 className="h3 mb-3 fw-normal">Update Product</h1>
                                    <div className="form-floating form_style">
                                        <input onChange={(e) => setName(e.target.value)} type="text" name='name' className="form-control" id="floatingInput" placeholder="name@example.com" value={name} />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>

                                    <div className="form-floating form_style">
                                        <textarea onChange={(e) => setDescription(e.target.value)} name='description' className="form-control" id="exampleFormControlTextarea1" cols="60" rows="5" value={description}></textarea>
                                        <label htmlFor="floatingInput">Description</label>
                                    </div>
                                    <div className="form-floating form_style">
                                        <input onChange={(e) => setPrice(e.target.value)} type="number" name='price' className="form-control" id="floatingInput" placeholder="name@example.com" value={price} />
                                        <label htmlFor="floatingInput">Price</label>
                                    </div>
                                    <select onChange={(e) => setCategory(e.target.value)} name='category' className="form-select form_style" aria-label="Default select example" value={category}>
                                        <option defaultValue disabled>Choose a category</option>
                                        {
                                            categories && categories.map(cat => (
                                                <option key={cat._id} value={cat._id}>{cat.name}</option>
                                            ))
                                        }

                                    </select>
                                    <div className="form-floating form_style">
                                        <input onChange={handleImage} type="file" name='image' className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Image</label>
                                    </div>


                                    <button className="w-100 btn btn-lg btn-primary" type="submit">{loadingUpdate ? "Updating..." : "Update product"}</button>
                                    <img style={{ marginTop: "20px" }} className='img-fluid' src={imagePreview !== '' ? imagePreview : image} />

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct