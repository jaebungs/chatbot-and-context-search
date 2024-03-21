export interface ChatMessage {
  date: number
  text: string
  sender: 'user' | 'bot'
}
