import Link from "next/link"  
import React, { useState, useEffect } from "react"; 

const Header = ({ categories = [], blogs = [] }) => {

  const [isOpen, setOpen] = useState(false);  
  
  const [isShopOpen, setShopOpen] = useState(false); 

  const toggleDropdown = () => setOpen(!isOpen);
  
  const toggleDropdownShop = () => setShopOpen(!isShopOpen);
  
  return (
    <header id="header" className="lg:px-20 flex flex-wrap items-center lg:py-0 py-2 h-20">
    <div className="flex-1 flex justify-between items-center ml-10">
      <a id="brand" href="/">elisabeth</a>
    </div>
    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
      <svg className="fill-current mr-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label> 
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul className="lg:flex items-center justify-between pt-4 ml-10 lg:pt-0"> 
          <div id="dropdown">
          <a id="blog-link" className="font-bold" href="/blog">Blog</a>
          <i id="arrow" className={`fa fa-chevron-up icon ${isOpen && "open"}`} onClick={toggleDropdown}></i>
          <div className={`dropdown-body ${isOpen && 'open'}`}>
          <ul id="dropdown-content">
              {blogs && blogs.map((_blog) => {
                return (
                  <li key={_blog.id}>
                    <Link href={`/blogs/${_blog.slug}`} >
                      <a id="dropdown-link" className="lg:p-1 py-3 px-0 block"   >
                        {_blog.name}
                      </a>
                  </Link>
                  </li>
                )
                })}
              </ul>
          </div>
        </div>
        <div id="dropdown"> 
          <a id="shop-link" className="font-bold" href="/shop">Shop</a> 
          <i id="arrow" className={`fa fa-chevron-up icon ${isShopOpen && "open"}`} onClick={toggleDropdownShop}></i>
          <div className={`dropdown-body ${isShopOpen && 'open'}`}>
          <ul id="dropdown-content">
          {categories.map((_category) => {
            return (
              <li key={_category.id}>
                <Link href={`/categories/${_category.slug}`} >
                  <a id="dropdown-link" className="lg:p-1 py-3 px-0 block"  >
                    {_category.name}
                  </a>
                  
              </Link>
              </li>
            )
            })}
          </ul>
          </div>
        </div>
            <div id ="dropdown">
            <ul>
              <li>
                <a id="menu-link" className="lg:p-4 py-3 px-0 block font-bold" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
          {/*<li><a className="lg:p-4 py-3 px-0 block hover:text-indigo-400 lg:mb-0 mb-2" href="#">Blog</a></li>
          <li><a className="lg:p-4 py-3 px-0 block hover:text-indigo-400 lg:mb-0 mb-2 text-indigo-500" href="#">Sign Up</a></li>*/}
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header



   