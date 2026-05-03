import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebhookWatch — Monitor Webhook Endpoint Health & Failures',
  description: 'Monitor webhook endpoints for downtime, track delivery success rates, get real-time alerts on failures, and retry failed deliveries automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="77217bd5-e492-4895-bd51-4ee63ded09a5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
