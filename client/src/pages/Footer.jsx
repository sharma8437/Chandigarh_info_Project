import React from 'react'

const Footer = () => {
  return (
    <div 
    name ="footer"
    className='bg-blue-950 mt-14'>

<footer className="footer sm:footer-horizontal  p-10 text-white">
  <aside className='p-4'>
  <img
                src="https://img.freepik.com/premium-vector/chandigarh-%E2%80%A6-hindi-text-chandigarh-typography_302321-2230.jpg"
                alt=""
                className="w-24 h-24"
              />
    <p>
      Develope by Nikesh Sharma
      <br />
     MERN Stack Developer
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>

  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<div className="footer footer-center bg-base-300 text-base-content p-4">
 
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Nikesh Sharma</p>
 
</div>
    </div>
  )
}

export default Footer