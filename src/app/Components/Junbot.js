import React, { useState, useEffect } from "react";
import Button from "./Button";

const Junbot = ({ className }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const initialMessage = [
    {
      id: 1,
      message: "Ask Away!",
      sender: "junbot",
    },
  ];

  useEffect(() => {
    const chatContainer = document.querySelector(".chat-messages-container");
    if (chatContainer) {
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  useEffect(() => {
    setMessages(initialMessage);
    const envApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
    if (envApiKey) {
      setApiKey(envApiKey);
    }
  }, []);

  async function fetchBotReply(userInput) {
    if (!apiKey) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            `You need to set up your Groq API key. Please add it to .env.local file.`
          );
        }, 1000);
      });
    }

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [
              {
                role: "system",
                content:
                  "You are Junheng Zheng. Junheng Zheng is a Web & Mobile Computing student at Rochester Institute of Technology (RIT) with a 3.66 GPA, expected to graduate in December 2026. He specializes in frontend development and UI/UX design, with strong skills in React, Next.js, Flutter, Tailwind CSS, and Figma. He currently works part-time at Tiger Snack Box, redesigning their e-commerce client-side in React/Next.js and designing a mobile game's UI/UX. Previously, he completed a UI/UX and Frontend Co-op at D&D Motor Systems, increasing website engagement and SEO performance through a full website redesign. He also participated in the Headstarter AI Software Engineering Fellowship, leading teams to build AI apps with Next.js, OpenAI, and Pinecone. Junheng has developed multiple projects including an AI-powered website optimization tool, a full RIT Student Information System redesign, and a cross-platform weather app with Flutter. He is proficient in Python, Java, HTML, CSS, JavaScript, TypeScript, PHP, and SQL. His tech stack includes React, Next.js, MongoDB, MySQL, Firebase, Clerk, and tools like VS Code, Figma, and Adobe Creative Suite. Junheng is passionate about frontend development, UI/UX design, and using data-driven methods to iterate and improve user experiences. Always answer in 1-2 sentences, dont do starter lines, give straight info.If something is asked and youre not sure, say you dont know. Your contact info is jz7259@g.rit.edu",
              },
              ...messages.map((msg) => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.message,
              })),
              {
                role: "user",
                content: userInput,
              },
            ],
            temperature: 0.7,
            max_tokens: 200,
          }),
        }
      );

      const data = await response.json();

      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content;
      } else {
        return "You're texting too fast, slow down!!";
      }
    } catch (error) {
      console.error("Error calling Groq API:", error);
      return "Sorry, there was an error connecting to the Groq AI service. Please try again later.";
    }
  }

  const handleSend = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      message: newMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setLoading(true);

    const botReply = await fetchBotReply(newMessage);

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        message: botReply,
        sender: "junbot",
      },
    ]);
    setLoading(false);
  };

  return (
    <div className={`absolute top-0 right-0 w-full h-full`}>
      {fullScreen && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/20 z-2000"
          onClick={() => setFullScreen(false)}
        ></div>
      )}
      <div
        className={`${
          fullScreen ? "translate-x-0" : "translate-x-[140%]"
        } z-6000 absolute bottom-0 w-[40%] shadow-lg shadow-black h-full right-0 transition-all duration-300 p-5 gap-5 flex flex-col bg-white rounded-l-lg`}
      >
        <div className="flex items-center pb-2 border-b border-gray-200 justify-between">
          <p className="text-black font-semibold">Junheng Zheng</p>

          <button
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
            className="cursor-pointer hover:rotate-90 hover:bg-black  text-black hover:text-white transition-all duration-300 w-[35px] h-[35px] flex items-center justify-center border  rounded-full "
          >
            <i className="fa-solid fa-xmark text-lg font-semibold"></i>
          </button>
        </div>
        <div className="chat-messages-container w-full flex-1 border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 overflow-y-scroll">
          {messages.map((mess) => (
            <div key={mess.id} className="flex items-end border-black gap-1">
              {mess.sender === "user" ? (
                <div className="w-full justify-end flex gap-2 items-end">
                  <p className="bg-gray-200 text-sm font-semibold text-black p-4 rounded-t-lg rounded-bl-lg">
                    {mess.message}
                  </p>
                </div>
              ) : (
                <div className="w-full flex gap-2 items-end">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQEQA8VChkxQuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722657596274?e=1751500800&v=beta&t=mN9feXsua7yqWd5X6FTBXHwL5Bp4PjXXtws8lqdM10k"
                    className="border border-gray-700 w-[50px] h-[50px] aspect-square bg-gray-200 rounded-full"
                    alt="Junbot"
                  />
                  <p className="bg-white border border-gray-200 text-sm font-semibold text-black/70 p-4 rounded-t-lg rounded-br-lg">
                    {mess.message}
                  </p>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-2 items-end">
              <p className=" text-sm font-semibold text-black/50 py-4 rounded-t-lg rounded-br-lg">
                Typing...
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-5 p-5 border  border-gray-200 rounded-3xl">
          <div className="flex w-full justify-between items-center gap-2">
            <div className="flex gap-2">
              <button className=" cursor-pointer py-3 px-4 text-sm rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold">
                Passion
              </button>
              <button className=" cursor-pointer py-3 px-4 text-sm rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold">
                Experience
              </button>
              <button className=" cursor-pointer py-3 px-4 text-sm rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold">
                Projects
              </button>
            </div>
            <button className=" cursor-pointer py-3 px-4 text-sm rounded-full gradientbackground border-1 border-black text-white font-semibold flex items-center gap-2">
              <p>Contact Me</p>
            </button>
          </div>
          <form
            className="h-[50px] overflow-hidden rounded-full border border-gray-200 w-full flex items-center gap-2"
            onSubmit={handleSend}
          >
            <input
              type="text"
              placeholder="Ask me anything"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full py-3 px-4 outline-none text-black placeholder:text-black/50 rounded-lg"
            />
            <button
              type="submit"
              className="font-semibold text-black border border-gray-200 cursor-pointer py-3 px-4 bg-[rgb(157,255,0)] rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <Button
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
        variant="secondary"
        className={` ${className} absolute bottom-10 right-10`}
      >
        Have a Question?
      </Button>
    </div>
  );
};

export default Junbot;
