import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, deleteProduct } = context;

    return (
        <div>
            <div className="py-5">
                <h1 className="text-xl text-cyan-900 font-bold">All Orders</h1>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse border-cyan-900 text-white">
                    <thead>
                        <tr className="bg-cyan-900 text-white font-bold">
                            <th className="h-12 px-6 border border-cyan-900">S.No.</th>
                            <th className="h-12 px-6 border border-cyan-900">Order Id</th>
                            <th className="h-12 px-6 border border-cyan-900">Image</th>
                            <th className="h-12 px-6 border border-cyan-900">Title</th>
                            <th className="h-12 px-6 border border-cyan-900">Category</th>
                            <th className="h-12 px-6 border border-cyan-900">Price</th>
                            <th className="h-12 px-6 border border-cyan-900">Quantity</th>
                            <th className="h-12 px-6 border border-cyan-900">Total Price</th>
                            <th className="h-12 px-6 border border-cyan-900">Status</th>
                            <th className="h-12 px-6 border border-cyan-900">Name</th>
                            <th className="h-12 px-6 border border-cyan-900">Address</th>
                            <th className="h-12 px-6 border border-cyan-900">Pincode</th>
                            <th className="h-12 px-6 border border-cyan-900">Phone Number</th>
                            <th className="h-12 px-6 border border-cyan-900">Email</th>
                            <th className="h-12 px-6 border border-cyan-900">Date</th>
                            <th className="h-12 px-6 border border-cyan-900">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllOrder.map((order) =>
                            order.cartItems.map((item, index) => {
                                const { id, productImageUrl, title, category, price, quantity } = item;
                                return (
                                    <tr key={id || `${order.id}-${index}`} className="text-white even:bg-gray-800 border border-cyan-900">
                                        <td className="h-12 px-6 border border-cyan-900">{index + 1}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{order.id}</td>
                                        <td className="h-12 px-6 border border-cyan-900">
                                            <img src={productImageUrl} alt="Product" className="w-16 h-16 object-cover rounded-md" />
                                        </td>
                                        <td className="h-12 px-6 border border-cyan-900">{title}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{category}</td>
                                        <td className="h-12 px-6 border border-cyan-900">₹{price}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{quantity}</td>
                                        <td className="h-12 px-6 border border-cyan-900">₹{price * quantity}</td>
                                        <td className="h-12 px-6 border cyan-900 text-green-600">{order.status}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{order.addressInfo.name}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{order.addressInfo.address}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{order.addressInfo.pincode}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{order.addressInfo.mobileNumber}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{order.email}</td>
                                        <td className="h-12 px-6 border border-cyan-900">{order.date}</td>
                                        <td
                                            onClick={() => deleteProduct(order.id)}
                                            className="h-12 px-6 border border-cyan-900 text-red-800 cursor-pointer  hover:underline"
                                        >
                                            Delete
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
