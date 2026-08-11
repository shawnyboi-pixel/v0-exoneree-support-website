import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import {
  getConversationDetail,
  getConversations,
  getMessagingDirectory,
} from '@/app/actions/messages'
import { MessagesInbox } from '@/components/messages/messages-inbox'

export const metadata = {
  title: 'Messages',
  description: 'Message other signed-up members.',
}

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>
}) {
  const { conversationId } = await params
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session?.user) {
    redirect(`/sign-in?redirect=/messages/${conversationId}`)
  }

  let detail
  try {
    detail = await getConversationDetail(conversationId)
  } catch {
    redirect('/messages')
  }

  const [conversations, directory] = await Promise.all([
    getConversations(),
    getMessagingDirectory(),
  ])

  return (
    <main className="min-h-[calc(100vh-73px)] bg-background">
      <MessagesInbox
        currentUserId={session.user.id}
        initialConversations={conversations}
        directory={directory}
        activeConversationId={conversationId}
        initialDetail={detail}
      />
    </main>
  )
}
