import React from 'react'

type SocialItem = {
  href: string
  src: string
  alt: string
  className?: string
}

export default function SocialLinks({ items }: { items: Array<SocialItem> }) {
  return (
    <div className="flex justify-center mt-4 gap-6">
      {items.map((item) => (
        <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
          <img
            src={item.src}
            alt={item.alt}
            className={
              item.className ??
              'size-8 bg-gray-500 border-2 border-gray-500 rounded-full hover:opacity-80'
            }
          />
        </a>
      ))}
    </div>
  )
}
