import React, { useState } from "react";
import {
  Search,
  Phone,
  Video,
  Info,
  MoreHorizontal,
  Plus,
  Smile,
  Send,
} from "lucide-react";

const chats = [
  { name: "Kaniska Kafle", status: "Audio call ended · 9m" },
  { name: "[BCT AB ERC]", status: "Apeksha Parajuli · 10m" },
  { name: "Your huss bhai", status: "Active 16m ago", active: true },
  { name: "SaFal Gautam", status: "Missed audio call · 18m" },
];

export default function MessengerReplica() {
  const [messages, setMessages] = useState([
    { text: "ah ho sahihō kaniska dai huda bike ni hunxa jhan sajilo hunxa" },
    { text: "k garda thik hola eso bichar garam na" },
    { text: "umm prachit lai consultancy pathaidim k", mine: true },
    { text: "huss bhaii", mine: true },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, mine: true }]);
    setInput("");
  };

  return (
    <div className="h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-5">
        <h1 className="text-xl font-extrabold">Messenger</h1>
        <div className="flex gap-2">
          <IconBtn><Search size={18} /></IconBtn>
          <IconBtn><MoreHorizontal size={18} /></IconBtn>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-[320px] bg-white border-r border-slate-200 flex flex-col">
          <div className="px-4 py-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Search Messenger"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-slate-200 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2">
            {chats.map((chat, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
                  chat.active ? "bg-emerald-50" : "hover:bg-slate-100"
                }`}
              >
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-400 border-2 border-white rounded-full" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{chat.name}</div>
                  <div className="text-xs text-slate-500 truncate">{chat.status}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* CHAT AREA */}
        <main className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
          {/* Chat Header */}
          <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
            <div>
              <div className="font-semibold">Your huss bhai</div>
              <div className="text-xs text-slate-500">Active 16m ago</div>
            </div>
            <div className="flex gap-2 text-emerald-500">
              <IconBtn><Phone size={18} /></IconBtn>
              <IconBtn><Video size={18} /></IconBtn>
              <IconBtn><Info size={18} /></IconBtn>
            </div>
          </div>

          {/* MESSAGE LIST (ONLY THIS SCROLLS) */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {messages.map((msg, i) => (
              <Bubble key={i} mine={msg.mine}>{msg.text}</Bubble>
            ))}
          </div>

          {/* INPUT */}
          <div className="bg-white border-t border-slate-200 px-4 py-3 flex items-center gap-2">
            <IconBtn><Plus size={18} /></IconBtn>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Aa"
              className="flex-1 px-4 py-2 text-sm rounded-full border border-slate-200 focus:ring-2 focus:ring-emerald-500"
            />

            <button
              onClick={sendMessage}
              className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Send size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Reusable ---------- */

function IconBtn({ children }) {
  return <button className="p-2 rounded-full hover:bg-slate-100">{children}</button>;
}

function Bubble({ children, mine }) {
  return (
    <div
      className={`max-w-[70%] px-4 py-2 text-sm rounded-2xl ${
        mine ? "ml-auto bg-emerald-500 text-white" : "bg-white border border-slate-200"
      }`}
    >
      {children}
    </div>
  );
}
