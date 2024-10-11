'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

import { siteConfig } from "@/config/site"
import ThemeToggle from '@/containers/buttons/theme-toggle'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="
      relative inline-block text-left p-0 hover:bg-transparent 
      active:bg-transparent focus:bg-transparent
    ">
      <button 
        className="mb-1 btn"
        onClick={handleToggle}
      >
        <FaBars size={24} />
      </button>
      {isOpen && (
        <ul className="
          menu dropdown-content bg-base-100 rounded-xl 
          z-[1] p-2 shadow-md w-40 absolute right-0"
          onClick={(e) => e.stopPropagation()}
        >
          {siteConfig.navigation.map(page => (
            <li>
              <Link 
                className="font-medium" 
                href={page.url}
              >
                {page.title}
              </Link>
            </li>
          ))}
          <li className="hover:bg-base-100">
            <div className="flex flex-row gap-3 items-center justify-between hover:bg-base-100">
              <span className="font-medium">Theme: </span> <ThemeToggle />
            </div>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Menu
