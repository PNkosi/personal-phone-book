import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href="/">
        <h3 className="font-bold"><span className='text-yellow-500'>Dev</span><span className='text-slate-500'>Contactly</span></h3>
    </Link>
  )
}

export default Logo