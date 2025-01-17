'use client';
import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const SearchBar = () => {
  return (
    <div className='w-full border border-[#ccc] rounded-[3px] mt-[10px] flex'>
        <input type='text' placeholder='Search for Anything' className='w-full text-[15px] p-[5px] flex-grow border-none'/>
       <div className='flex justify-center items-center pl-[20px] pr-[20px] hover:bg-[#7b7b7b] bg-[#999]'> <SearchRoundedIcon/></div>
    </div>
  )
}

export default SearchBar