import { useNavigate } from "react-router";
import Layout from "../../components/navbar/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";


const AllProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const context = useContext(myContext);
    const { loading , getAllProduct} = context;

    const cartItems = useSelector((state) => state.cart);

    // Convert Firestore Timestamp to a serializable format
    const formatCartItem = (item) => ({
        ...item,
        time: item.time instanceof Timestamp ? item.time.toMillis() : item.time,
    });

    const addCart = (item) => {
        dispatch(addToCart(formatCartItem(item)));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(formatCartItem(item)));
        toast.success("Removed from cart");
    };

    // Save cart items to localStorage when updated
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);





    return (
        <Layout >
    <div className="py-8">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
                <div className="flex justify-center ">
                        {loading && <Loader /> }
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.map((item, index) => {
                             const { id, title, price,productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate(`/productinfo/${id}`)}
                                            className="lg:h-80  h-96 w-full"
                                            src={productImageUrl}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                book shop
                                            </h2>
                                            <h1 className="title-font text-lg font-medium  mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium  mb-3">
                                            ৳{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                            {cartItems.some((p)=> p.id === item.id) 
                                                
                                                ?
                                                <button
                                                    onClick={() => deleteCart(item)}
                                                    className=" bg-green-900 hover:bg-green-500 w-full text-white py-[4px] rounded-lg font-bold"> Delete to Cart
                                                </button>

                                                : 

                                                <button
                                                    onClick={() => addCart(item)}
                                                    className=" bg-cyan-900 hover:bg-cyan-800 w-full text-white py-[4px] rounded-lg font-bold">Add to Cart
                                                </button>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default AllProduct;
