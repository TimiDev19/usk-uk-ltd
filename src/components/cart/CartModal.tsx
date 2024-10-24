'use client';
import emailjs from '@emailjs/browser';
emailjs.init('vniYYZ7cQTr3doimy');
import CartItem from './CartItem';
import { useAppSelector, useAppDispatch } from '@/store/hooks/hooks';
import {
  emptyCart,
} from '@/store/audophileSlice';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const CartModal = () => {
  const dispatch = useAppDispatch();
  const [isOrdering, setIsOrdering] = useState(false)
  const cart = useAppSelector((state) => state.appState.cart);
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<string | null>(null);
  const totalCostArr = cart.flatMap((crt) => crt.quantity * crt.price);
  const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const sendCartContent = async () => {
    if (cart.length === 0) {
      toast('Your cart is empty. Please add items before placing an order.', {
        duration: 4000, // Duration in milliseconds
        position: 'top-center', // Position of the toast
        style: {
          background: 'red', // Green background
          color: '#fff', // White text
          padding: '16px', // Padding
          borderRadius: '8px', // Rounded corners
          fontSize: '16px', // Font size
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
        },
      });
      setIsOrdering(false)
      return;
    }

    const serviceID = "service_xpo4uhb";
    const templateID = "template_fxk86xg";
    const userID = "vniYYZ7cQTr3doimy";

    const filteredCart = cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const emailParams = {
      cart_content: filteredCart,
      from_email: userEmail,
    };
    setIsOrdering(true)
    console.log("Email Params:", emailParams);

    try {
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);
      if (res.status === 200) {
        console.log("Email sent successfully!");
        setOrder("Order placed successfully !")
        toast('Order placed successfully !', {
          duration: 4000, // Duration in milliseconds
          position: 'top-center', // Position of the toast
          style: {
            background: '#4CAF50', // Green background
            color: '#fff', // White text
            padding: '16px', // Padding
            borderRadius: '8px', // Rounded corners
            fontSize: '16px', // Font size
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
          },
        });
        setIsOrdering(false)
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast('Failed to send email. Please try again.', {
        duration: 4000, // Duration in milliseconds
        position: 'top-center', // Position of the toast
        style: {
          background: 'red', // Green background
          color: '#fff', // White text
          padding: '16px', // Padding
          borderRadius: '8px', // Rounded corners
          fontSize: '16px', // Font size
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
        },
      });
      setIsOrdering(false)
    }
  };

  const handleCheckout = () => {
    if (!userEmail) {
      toast('Please enter your email address', {
        duration: 4000, // Duration in milliseconds
        position: 'top-center', // Position of the toast
        style: {
          background: 'red', // Green background
          color: '#fff', // White text
          padding: '16px', // Padding
          borderRadius: '8px', // Rounded corners
          fontSize: '16px', // Font size
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
        },
      });
    } else {
      sendCartContent();
      setError(null);
    }
  };

  return (
    <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[0.5rem]">
      <div className="flex justify-between">
        <p className="font-semibold text-[1.1rem] tracking-widest">{`CART (${cart.length})`}</p>
        <p
          onClick={() => dispatch(emptyCart())}
          className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
        >
          Remove all
        </p>
      </div>
      <div className="max-h-[17rem] pb-[1rem] overflow-scroll border-b-[1px] border-blue-500">
        {cart.length === 0 ? (
          <p className="mt-[1rem] font-semibold italic">No Items In Cart 🤧</p>
        ) : (
          cart.map((crt, index) => (
            <CartItem
              key={index}
              id={crt.id}
              img={crt.img}
              name={crt.name}
              price={crt.price}
              quantity={crt.quantity}
            />
          ))
        )}
      </div>
      <div className="flex justify-between items-center pt-[1rem]">
        <p className="opacity-50 text-[1rem]">TOTAL</p>
        <p className="font-semibold text-[1.1rem] tracking-wider">{`£ ${totalCost.toLocaleString()}`}</p>
      </div>

      <input
        type="email"
        placeholder="Enter your email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded mb-2"
      />
      {error && (
        <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
      )}
      {order && (
        <p style={{ color: 'green', marginBottom: '10px' }}>{order}</p>
      )}
      {
        isOrdering ? (
          <button
            className={`bg-blue-500 ${!userEmail && `opacity-65`} md:hover:bg-blue-400 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
          >
            <div className="animate-spin h-5 w-5 mx-auto border-2 border-white rounded-full border-t-transparent"></div>
          </button>
        )
          :
          (
            <button
              onClick={handleCheckout}
              className={`bg-blue-500 ${!userEmail && `opacity-65`} md:hover:bg-blue-400 w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
            >
              Checkout
            </button>
          )
      }
    </div>
  );
};

export default CartModal;




