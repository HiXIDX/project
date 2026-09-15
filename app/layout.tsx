import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Supabase App',
  description: 'Testing Supabase connection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}