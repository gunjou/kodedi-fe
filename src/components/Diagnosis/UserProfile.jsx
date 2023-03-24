import React from 'react'

const UserProfile = () => {
  // const username = localStorage.getItem("username");
  // const email = localStorage.getItem("email");
  const fullname = localStorage.getItem("fullname");
  return (
    <div className='UserProfile mt-5 flex'>
			<img src={process.env.PUBLIC_URL + "img/dokter.jpg"} alt="profile_picture" className='rounded-full w-24 h-24' />
			<div className='About pl-3 text-left'>
				<span className='text-xl font-bold'>dr. {fullname}</span>
				<p>Dokter Spesialis Penyakit Dalam</p>
				<p>Poliklinik Penyakit Dalam</p>
			</div>
    </div>
  )
}

export default UserProfile