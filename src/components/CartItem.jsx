
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { useState } from "react";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  const handleClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    if (showFullDescription) {
      return item.description;
    } else {
      const words = item.description.split(" ");
      const limitedDescription = words.slice(0, 12).join(" ");
      return limitedDescription + (words.length > 12 ? "..." :  "");
    }
  };

  return (
    <div className="flex justify-center items-center mb-4 h-full w-full  ">
      <div className="flex items-center  h-full  w-full   border-t-2 pt-4 ">
        <div className="h-[270px] w-[200px]  mr-4">
          <img src={item.image} className=" h-full w-full object-contain rounded " />
        </div>
        <div className="flex flex-col justify-between ">
          <h1 className="font-semibold mb-2">{item.title}</h1>
          <p
            onClick={handleClick}
            className="text-xs cursor-pointer text-gray-600"
          >
            {renderDescription()}
          </p>
          <div className="flex space-between items-center mt-2  ">
            <p className="text-green-600 font-bold">${item.price}</p>
           
          </div>
          <div
              onClick={removeFromCart}
              className="text-red-500 hover:text-red-700 cursor-pointer justify-between ml-80 -mt-6"
            >
              <FcDeleteDatabase size={24} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
