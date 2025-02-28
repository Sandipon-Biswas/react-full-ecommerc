import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import myContext from "../../../context/myContext";
// Search Data



const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context
    // Search State 
    const [search, setSearch] = useState("");

   // Filter Search Data
// Filter Search Data
const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

const navigate = useNavigate();
  return (
    <div className="mx-3">
    {/* search input  */}
    <div className="input flex justify-center">
        <input
            type="text"
            placeholder='Search here'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='   bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-white '
        />
    </div>

    {/* search drop-down  */}
    <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div onClick={() => navigate(`/productinfo/${item.id}`)}  key={index} className="py-2 px-2 cursor-pointer">
                                 
                                <div  className="flex items-center gap-2 text-blue-gray-900 ">
                                    <img className="w-10" src={item.productImageUrl} alt="" />
                                    {item.title}
                                </div>
                            </div>
                        )
                    })}
                </>
                :

                <>
                    <div className="flex justify-center">
                        <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                    </div>
                </>}
        </div>
        }
    </div>
</div>
  );
}

export default SearchBar;
