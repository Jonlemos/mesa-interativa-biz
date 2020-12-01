import React from 'react'
import carding from '../../../styles/Carding.module.css'

const Card = ({children}) => {
    return(
        <>
            <div className={carding.card}>
                {children}
            </div>
        </>
    )
}

export default Card;