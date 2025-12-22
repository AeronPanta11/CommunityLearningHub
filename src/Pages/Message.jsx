import { Search, Send, MapPin, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Messages() {
  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-x-hidden">
      <ConversationList />
      <ChatWindow />
    </div>
  );
}

/* ===================== Conversation List ===================== */

function ConversationList() {
  const [search, setSearch] = useState("");

  const conversations = [
    { id: 1, name: "Sarah Chen", skill: "JavaScript Fundamentals", active: true },
    { id: 2, name: "Mike Rodriguez", skill: "Python Programming", active: false },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-[320px] border-r border-slate-200 bg-white p-4 z-30">
      <h3 className="font-semibold text-slate-900 mb-4 text-lg">Messages</h3>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>

      {conversations.map((c) => (
        <Conversation key={c.id} {...c} />
      ))}
    </aside>
  );
}

function Conversation({ name, skill, active }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
        active ? "bg-emerald-50" : "hover:bg-slate-50"
      }`}
    >
      <img src={`https://i.pravatar.cc/40?u=${name}`} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-slate-500">{skill}</p>
      </div>
      {active && <span className="w-2 h-2 bg-emerald-500 rounded-full" />}
    </div>
  );
}

/* ===================== Chat Window ===================== */

function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I want to learn JS.", time: "10:30 AM", sent: false },
    { id: 2, text: "Sure! Happy to help.", time: "10:32 AM", sent: true },
  ]);

  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sent: true,
      },
    ]);
    setInput("");
  }

  return (
    <section className="ml-[320px] h-screen relative bg-slate-50">

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-[320px] right-0 h-[72px] bg-white border-b border-slate-200 z-20 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/40?u=Sarah" className="w-9 h-9 rounded-full" />
          <div>
            <p className="font-medium text-slate-900">Sarah Chen</p>
            <p className="text-xs text-emerald-500">JavaScript • Online</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-emerald-100">
          <Phone className="text-emerald-600" />
        </button>
      </header>

      {/* ===== MESSAGES ===== */}
      <main
        className="absolute top-[72px] bottom-[88px] left-[320px] right-0 overflow-y-auto px-4 py-2 flex flex-col gap-4"
      >
        {messages.map((m) => (
          <Message key={m.id} {...m} />
        ))}
        <div ref={endRef} />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="fixed bottom-0 left-[320px] right-0 h-[88px] bg-white border-t border-slate-200 px-4 flex items-center gap-3 z-20">
        <button className="p-2 rounded-lg hover:bg-emerald-100 text-emerald-600">
          <MapPin />
        </button>

        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 min-w-0 resize-none border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={!input.trim()}
          className={`p-2 rounded-lg ${
            input.trim()
              ? "bg-emerald-500 hover:bg-emerald-600 text-white"
              : "bg-emerald-300 cursor-not-allowed"
          }`}
        >
          <Send />
        </button>
      </footer>
    </section>
  );
}

/* ===================== MESSAGE BUBBLE ===================== */

function Message({ text, time, sent }) {
  return (
    <div className={`flex ${sent ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex-shrink-0 max-w-[70%] px-4 py-2 rounded-xl text-sm break-normal ${
          sent
            ? "bg-emerald-500 text-white rounded-tr-none"
            : "bg-white border border-slate-200 rounded-tl-none"
        }`}
      >
        <p className="mb-1">{text}</p>
        <span className={`text-xs ${sent ? "text-emerald-100" : "text-slate-400"}`}>
          {time}
        </span>
      </div>
    </div>
  );
}



