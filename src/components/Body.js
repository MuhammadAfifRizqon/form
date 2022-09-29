import React from 'react'

export default function Body() {
  return ( 
     <div class="w-full flex flex-col items-center 
     justify-center border  rounded pt-6" >
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div class="font-bold mb-4">
      <label>Nama Panjang :</label>
        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type = "text" placeholder="Nama Panjang"
          onChange=""/>
    </div>
    <div class="font-bold mb-6">
      <label>Nama Panggilan :</label>
        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type = "text" placeholder="Nama Panggilan"
          onChange=""/>
    </div>
    <div class="font-bold mb-6">
      <label>Alamat :</label>
        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type = "text" placeholder="Alamat"
          onChange=""/>
    </div>
    <div class="font-bold mb-6">
      <label>Tanggal Lahir :</label>
        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type = "text" placeholder="Tanggal Lahir"
          onChange=""/>
    </div>
    <div class="font-bold mb-6">
      <label>No handphone :</label>
        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type = "number" placeholder="No handphone"
          onChange=""/>
    </div>
    <div class=" inline-flex items-center justify-between">
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'> Simpan </button>
      <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick=""> Cancel </button>
    </div>
  </form>
  </div>
	)
}
