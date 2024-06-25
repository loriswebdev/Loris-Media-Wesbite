import React, { ReactNode } from 'react'

const ExampleCard = ({children, className='', imgUrl=''}:{className?: string, imgUrl?: string, children?:ReactNode}) => {
  return (
    <div style={imgUrl ?{backgroundImage: `url('${imgUrl}')`}:{ }} className={className}>{children}</div>
  )
}

export default ExampleCard