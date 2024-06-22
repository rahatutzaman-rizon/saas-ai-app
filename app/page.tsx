
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (

    <main className="root">

<Sidebar></Sidebar>
<MobileNav></MobileNav>

<div>
      home...why page not come
   <UserButton afterSignOutUrl="/">ki likhbo</UserButton>
    </div>
    </main>
   
  );
}
