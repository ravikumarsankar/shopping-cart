import React from 'react'

export const Order = () => {
  return (
    <div className=' flex flex-col items-center justify-center mt-[20px]'>
    <div className= 'min-h-[128px] p-[20px] bg text-[14px] w-[420px] font-semibold text-xl shadow-1xl rounded-md bg-[#d3d3d3]' >
      <label>Order Status</label>
    <div className="h-[80px] flex flex-col justify-between">
        <div className="pt-[10px] font-medium">Order#</div>
        <input
          type="number"
          placeholder="Order No"
          className="w-100 h-[40px] text-[15px] p-[5px]  border-none"
        />
      </div>
      <div className="h-[80px] flex flex-col justify-between">
        <div className="pt-[10px] font-medium">Postal code</div>
        <input
          type="number"
          placeholder="Postal code"
          className="w-100 h-[40px] text-[15px] p-[5px]  border-none"
        />
      </div>
      <div className="h-[80px] flex flex-col justify-between">
        <div className="pt-[10px] font-medium">Email</div>
        <input
          type="text"
          placeholder="Email"
          className="w-100 h-[40px] text-[15px] p-[5px]  border-none"
        />
      </div>
      <div className="h-[80px] flex flex-col justify-between">
        <div className="pt-[10px] font-medium">Phone number</div>
        <input
          type="number"
          placeholder="Phone Number"
          className="w-100 h-[40px] text-[15px] p-[5px]  border-none"
        />
      </div>
      <div>
        <button  type="submit" className="border-1 bg-[red] text-[#fff] font-light text-xl rounded-sm w-[100px] text-center mt-[10px]">
          Submit
        </button>
      </div>
  </div>
    </div>
  )
}
