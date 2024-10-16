import React from 'react'

const Badge = ({ title }) => {
    return (
        <span style = {{backgroundColor : "#2d2d2d"}} className='py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full'>{title}</span>
    )
}

export default Badge