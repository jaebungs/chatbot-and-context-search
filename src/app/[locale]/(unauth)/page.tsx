import { getTranslations } from 'next-intl/server'

import { ChatUI } from '@/components/ChatUI'

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  })

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default function Index() {
  return (
    <>
      <h1>Compare Chatbots</h1>

      <div className="chatbots-wrapper flex">
        <div className="openai-chatbot mx-3 w-4/12">
          <h2>Chatbot1 - OpenAI</h2>
          <ChatUI />
        </div>
        <div className="openai-chatbot-with-VD mx-3 w-4/12">
          <h2>Chatbot2 - OpenAI with VectorDB</h2>
          <ChatUI />
        </div>
      </div>
    </>
  )
}
