
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
    {

      cart.length && 
      <div style={
        {
          marginLeft:"70rem",
        }
      } className="flex flex-col justify-center items-center absolute ">
      <div className="text-right inset-y-3 ">
        <div className="font-bold mt-10 text-2xl ">Your Cart</div>
        <div className="text-3xl uppercase text-right text-green-600 font-bold">Summary</div>
        <p className="mt-2">
          <span>Total Items: {cart.length}</span>
        </p>
      </div>
      <div className="mt-80"> 
<p>Total amount : <span className="text-green-700">${totalAmount}</span></p>
<br/>
<button className="bg-green-700 px-10 rounded py-2 ">Checkout Now</button>
  </div>
     

    </div>
    }
    
    <div className="flex justify-center  ">
      
      {cart.length > 0 ? (
        <div className="flex">
          <div className="flex flex-col justify-center items-center mr-8 ">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

         
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
      </div>
      


    </div>
    
  );
};

export default Cart;


