import React, { useState, useEffect } from "react"
import Link from "next/link"

const data = [
  { id: 0, label: "Istanbul, TR (AHL)" },
  { id: 1, label: "Paris, FR (CDG)" },
]

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false)
  const [items, setItem] = useState(data)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : "Blog"}
        <i className={`fa fa-chevron-down icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        <ul id="dropdown-content">
          {blogs &&
            blogs.map((_blog) => {
              return (
                <li key={_blog.id}>
                  <Link href={`/blogs/${_blog.slug}`}>
                    <a id="dropdown-link" className="lg:p-1 py-3 px-0 block">
                      {_blog.name}
                    </a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
