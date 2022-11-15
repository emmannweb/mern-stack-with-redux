import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../actions/productAction';



const CreateProduct = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('');
    const [categories, setCategories] = useState([]);

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
    })



    //fetch categories
    const showCategories = async () => {
        try {
            const { data } = await axios.get('/api/category/all');
            setCategories(data.categories);
        } catch (error) {
            console.log(error.response.data.error)
        }
    }

    const { name, description, price, category } = product;

    useEffect(() => {
        showCategories();
    }, [])



    console.log(name, description, price, category, image);
    console.log(categories);

    // handleChange method
    const handleChange = (e) => {
        //console.log("cliked");
        if (e.target.name === 'image') {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])
            reader.onloadend = () => {
                setImage(reader.result);
            }

        } else {
            setProduct({ ...product, [e.target.name]: e.target.value })
        }
    }


    // submit product
    const submitProduct = (e) => {
        e.preventDefault();
        dispatch(createProduct({ name, description, price, category, image }));
    }


    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-3 form_wrapper">
                            <div className="form-signin w-100 m-auto mainform">
                                <form onSubmit={submitProduct}>

                                    <h1 className="h3 mb-3 fw-normal">Create Product</h1>
                                    <div className="form-floating form_style">
                                        <input onChange={handleChange} type="text" name='name' className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>

                                    <div className="form-floating form_style">
                                        <textarea onChange={handleChange} name='description' className="form-control" id="exampleFormControlTextarea1" cols="60" rows="5"></textarea>
                                        <label htmlFor="floatingInput">Description</label>
                                    </div>
                                    <div className="form-floating form_style">
                                        <input onChange={handleChange} type="number" name='price' className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Price</label>
                                    </div>
                                    <select onChange={handleChange} name='category' className="form-select form_style" aria-label="Default select example">
                                        <option defaultValue disabled>Choose a category</option>
                                        {
                                            categories && categories.map(cat => (
                                                <option key={cat._id} value={cat._id}>{cat.name}</option>
                                            ))
                                        }

                                    </select>
                                    <div className="form-floating form_style">
                                        <input onChange={handleChange} type="file" name='image' className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Image</label>
                                    </div>


                                    <button className="w-100 btn btn-lg btn-primary" type="submit">Create product</button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateProduct