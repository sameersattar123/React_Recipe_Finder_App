import React from 'react'

const Header = ({title , bgClass , children }) => {
  return (
    <div className={bgClass}>
        <div className='text-content'>
            <h1 className="header-title">{title}</h1>
            {children}
        </div>
    </div>
  )
}

export default Header