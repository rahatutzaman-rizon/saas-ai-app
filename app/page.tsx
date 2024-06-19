
import Sidebar from "@/components/shared/Sidebar";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (

    <main className="root">
<h2>sidebar</h2>
<Sidebar></Sidebar>

<div>
      home...why page not come
   <UserButton afterSignOutUrl="/">ki likhbo</UserButton>
    </div>
    </main>
   
  );
}
