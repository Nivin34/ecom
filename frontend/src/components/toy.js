import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination';

export default function Toy() {
    const dispatch = useDispatch();
    
    // Get the products, loading state, error message, product count, and results per page from the store
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);

    const [currentPage, setCurrentPage] = useState(1); // Current page state

    // Function to update the current page number for pagination
    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo);
    };

    useEffect(() => {
        if (error) {
            // Show an error message if there is an error
            toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }

        // Dispatch action to fetch products, passing the "toy" category and the current page number
        dispatch(getProducts('book', null, null, null, currentPage));
    }, [error, dispatch, currentPage]);

    return (
        <Fragment>
            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                <Fragment>
                    <MetaData title={'Buy Toys Now'} /> {/* Update title for toy products */}
                    <h1 id="products_heading">Toy Products</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map(product => (
                                <Product col={3} key={product._id} product={product} /> // Display each product
                            ))}
                        </div>
                    </section>

                    {productsCount > 0 && productsCount > resPerPage ? (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                onChange={setCurrentPageNo}
                                totalItemsCount={productsCount}
                                itemsCountPerPage={resPerPage}
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass={'page-item'}
                                linkClass={'page-link'}
                            />
                        </div>
                    ) : null}
                </Fragment>
            )}
        </Fragment>
    );
}
