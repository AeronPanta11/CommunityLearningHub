import { ArrowBigRight,Phone,Video,MoreHorizontal } from "lucide-react";    
import Navbar2 from "../Components/Navbar2";

export default function Message2() {
    const activeConversations = [
        { name: "Kaniska Kafle" },
        { name: "[BCT AB ERC]" },
        { name: "Your huss bhai" },
        { name: "SaFal Gautam" },
      ];
  return (
    <>
      <Navbar2 />
      <div className="flex flex-col w-full h-[720px] overflow-hidden border border-slate-200 rounded-lg">
        {/* Header */}
      

      {/* Main content area: sidebar + messages */}
      <div className="flex flex-1 ">
        {/* Active Conversations Sidebar */}
        <aside className="w-72 bg-white border border-slate-200 p-4 relative fixed h-full">
          <h2 className="text-lg font-semibold mb-4">Active Conversations</h2>
            <div className="space-y-3 overflow-y-auto h-[calc(100%-60px)] pr-2">
                {activeConversations.map((conv, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-100 rounded-md border border-gray-200 cursor-pointer">
                    <img
                      src="https://i.pravatar.cc/40"
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="ml-2 font-semibold">{conv.name}</span>
                  </div>
                ))}
            </div>
        </aside>

        {/* Messages Section */}
        <main className="flex flex-col flex-1 bg-slate-50 p-6 border border-slate-200 ">
                <div className="chatheader flex items-center justify-between mb-4 h-12 bg-red-100 px-6 border-b border-gray-200">
                <div className="flex items-center">
                    <img
                    src="https://i.pravatar.cc/40"
                    alt="Profile"
                    className="w-8 h-8 rounded-full hover:opacity-80 cursor-pointer"
                    onClick={() => navigate("/profile")}
                    />
                    <h2 className="text-lg font-semibold ml-3">Messages</h2>
                </div>

                <div className="flex items-center space-x-4 text-gray-600">
                    <Phone className="w-6 h-6 cursor-pointer hover:text-emerald-500" />
                    <Video className="w-6 h-6 cursor-pointer hover:text-emerald-500" />
                    <MoreHorizontal className="w-6 h-6 cursor-pointer hover:text-emerald-500" />
                </div>
                </div>


          {/* Messages content scrollable area */}
          <div className="flex-1 overflow-auto mb-4">
            {/* Your messages content goes here */}
          </div>

          {/* Footer: input + send button */}
          <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-md p-4">
            <input
              type="text"
              className="border border-slate-300 rounded-md p-2 flex-grow"
              placeholder="Type your message..."
            />
            <button className="bg-emerald-500 text-white rounded-md px-4 py-2 flex items-center">
              Send
            </button>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
