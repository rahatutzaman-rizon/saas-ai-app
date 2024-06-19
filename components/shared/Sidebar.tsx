
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'


const Sidebar = () => {
  

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="https://i.ibb.co/7X0Zx6z/AI-PIXARI.webp" alt="logo" width={180} height={28} />
        </Link>

      
      </div>
    </aside>
  )
}

export default Sidebar