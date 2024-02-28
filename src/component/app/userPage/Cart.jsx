import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-10 overflow-y-auto">
      <div className="text-white text-xl font-semibold flex justify-between bg-[#32220c] py-5 px-5 rounded-t-md">
        <h1>Image</h1>
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
      </div>
      <div className="mt-5 mx-5 text-primary text-xl flex justify-between items-center">
        <div>
          <img
            className="w-20 h-20"
            src="https://demo.themexpert.com/wordpress/gamez/game-review/wp-content/uploads/sites/3/2016/10/witcher-300x300.jpg"
            alt=""
          />
        </div>
        <h1>The Witcher 3</h1>
        <h1>$50</h1>
        <div className="flex space-x-2">
            <RemoveIcon sx={{fontSize: "40px"}}/>
            <div className="w-10 h-10 border border-primary flex items-center justify-center">1</div>
            <AddIcon sx={{fontSize: "40px"}}/>
        </div>
        <h1>$50</h1>
      </div>
    </div>
  );
};

export default Cart;
