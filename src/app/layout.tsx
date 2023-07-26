import React from "react";
import './globals.css'


export const metadata = {
    title: 'Spotify',
    description: 'Musics',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'bg-zinc-800'}>{children}</body>
        </html>
    )
}
