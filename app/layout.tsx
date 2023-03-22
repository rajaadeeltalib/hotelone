import './globals.css'
import RoomProvider from './context/RoomContext'

export const metadata = {
  title: 'Hotel',
  description: 'Created Hotel Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <RoomProvider><body>{children}</body></RoomProvider>
    </html>
  )
}
