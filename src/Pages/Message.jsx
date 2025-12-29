import { useRef, useState, useEffect } from "react";
import { Send, Plus } from "lucide-react";

/* ---------------- MESSAGE BUBBLE ---------------- */
function Message({ text, time, sent }) {
  return (
    <div className={`flex w-full ${sent ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
          sent
            ? "bg-emerald-500 text-white rounded-tr-none"
            : "bg-white border border-slate-200 rounded-tl-none"
        }`}
      >
        <p className="break-words leading-5">{text}</p>
        <span
          className={`mt-1 block text-xs ${
            sent ? "text-emerald-100" : "text-slate-400"
          }`}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

/* ---------------- CHAT WINDOW ---------------- */
export default function MessengerReplica() {
  const [messages, setMessages] = useState([
    { text: "ahhh", time: "8:40 PM", sent: false },
    { text: "ani hamro pr lead?", time: "8:41 PM", sent: false },
    {
      text: "maile chai sochya hai ki uslai hai ki kaniska lai liyera aayuda hunxa bhanya split bhayerw gumna jada sajilo hunxa",
      time: "8:42 PM",
      sent: true,
    },
  ]);

  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);

  /* -------- AUTO RESIZE TEXTAREA -------- */
  const handleInput = (e) => {
    setInput(e.target.value);

    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  /* -------- SEND MESSAGE -------- */
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sent: true,
      },
    ]);

    setInput("");
    textareaRef.current.style.height = "auto";
  };

  /* -------- ENTER TO SEND -------- */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /* -------- SCROLL TO BOTTOM -------- */
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <div className=" left-[250px] flex h-screen flex-col bg-slate-100 overflow-Y-hidden">
      {/* HEADER */}
      <header className="flex-none border-b border-slate-200 bg-white px-4 py-3 font-medium">
        Chat
      </header>

      {/* MESSAGES */}
      <main className="flex-1 overflow-y-auto px-4 py-3">
        <div className="flex flex-col space-y-3">
          {messages.map((msg, i) => (
            <Message key={i} {...msg} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* INPUT BAR */}
      
    </div>
  );
}
