import React from 'react'
import Facebook from "../assets/sosmed/Facebook.png"
import Instagram from "../assets/sosmed/Instagram.png"
import Twitter from "../assets/sosmed/Twitter.png"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-20">
        <div className="container mx-3 max-w-5xl flex flex-row  space-x-24" id='contact'>
          <div className="flex-1 space-y-5">
            {/* <img src={IconLaslesVpn} alt="logo lasles vpn" className="w-36" /> */}
            <div className='font-bold'>
              My Contact and Social Media
            </div>
            <div className=" md-3 flex flex-row">
              <img src={Facebook} alt="facebook icon" className="w-16 h-16" />
              <div>
                <ul>
                  <li><a href="https://www.facebook.com/bocahkalemafif/">Facebook</a></li>
                </ul>
              </div>
              <img src={Twitter} alt="twitter icon" className="w-16 h-16" />
              <div>
                <ul>
                  <li><a href="https://twitter.com/AfifGreatagain">Twitter</a></li>
                </ul>
              </div>
              <img src={Instagram} alt="IG icon" className="w-16 h-16" />
              <div>
                <ul>
                  <li><a href="https://www.instagram.com/afifrizqon36/?hl=en">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div>©2022</div>
          </div>
        </div>
      </footer>
      
  
  )
}
