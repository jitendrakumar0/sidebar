import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/context";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RouteComponent from "./routes/Routes";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    return (
        <Context.Provider value={{}}>
            <BrowserRouter>
                <div className="hidden">
                    <span className="fixed inset-0 z-0 block w-full h-full overflow-x-hidden overflow-y-auto outline-none"></span>
                    <span className="w-screen max-w-none h-full m-0 relative"></span>
                </div>
                <main className="h-full border-0 relative flex flex-col w-full">
                    <Header />
                        <div className="overflow-hidden flex relative grow shrink basis-auto">
                            <div className="w-auto h-full bg-blacklighter">
                                <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} toggleSidebar={toggleSidebar} />
                            </div>
                            <div className={` h-full bg-purple ${isSidebarOpen ? 'w-[calc(100%-256px)]':'grow'}`}>
                                <RouteComponent />
                            </div>
                        </div>
                    <Footer />
                </main>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
