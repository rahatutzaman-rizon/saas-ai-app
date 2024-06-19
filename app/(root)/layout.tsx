import Sidebar from "@/components/shared/Sidebar"


function Layout({ children}: {children :React.ReactNode}) {

    return (
      <main className="root">
        <Sidebar></Sidebar>
        <h2>side bar here</h2>
        <div className="root-container">
            <div className="wrapper">
                {children}

            </div>
        </div>
        </main>
    )
  }
  
  export default Layout