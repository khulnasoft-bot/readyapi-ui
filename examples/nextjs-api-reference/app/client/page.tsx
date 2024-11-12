import Link from 'next/link'
import React from 'react'

import { Button, ClientWrapper } from './components'

const Page = () => {
  return (
    <ClientWrapper>
      <Button />
      <Link href="/another-client">Go to another client</Link>
    </ClientWrapper>
  )
}

export default Page