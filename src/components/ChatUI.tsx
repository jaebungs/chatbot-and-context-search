'use client'

import type { FormEvent } from 'react'
import React, { useState } from 'react'

import type { ChatMessage } from '../types/Chat'

const initialForTest: ChatMessage[] = [
  {
    date: 1710812751987,
    text: 'test for Bot',
    sender: 'bot',
  },
  {
    date: 1710812782857,
    text: 'test from user',
    sender: 'user',
  },
]

// Chat UI
const ChatUI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([...initialForTest])
  const [input, setInput] = useState('')

  const sendMessage = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage: ChatMessage = {
      date: Date.now(),
      text: input,
      sender: 'user',
    }

    setMessages((prevMessages) => [...prevMessages, newMessage])
    setInput('')
  }

  return (
    <div className="w-full h-80 bottom-0 right-0 mb-4 mr-4 p-4 border-2 border-gray-300 bg-white rounded-lg shadow-lg flex flex-col space-y-2 text-base">
      <div className="flex-grow overflow-y-auto flex flex-col">
        {messages.map((message) => (
          <div
            key={message.date}
            className={`p-2 rounded-lg animate-slideUp w-80 my-2
              ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 self-start'} `}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-l-lg p-2"
          placeholder="Type a message here..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export { ChatUI }
