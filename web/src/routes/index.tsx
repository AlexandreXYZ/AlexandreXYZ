import { createFileRoute } from '@tanstack/react-router'
import SocialLinks from '../components/socialLinks'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import discord from '../assets/icons/discord.svg'
import { CarouselAvatar } from '@/components/carousselAvatar'

export const Route = createFileRoute('/')({
  component: App,
})

const items = [
  {
    href: 'https://github.com/AlexandreXYZ',
    src: github,
    alt: 'GitHub Logo, click to view my profile',
  },
  {
    href: 'https://www.linkedin.com/in/alexandrexyz/',
    src: linkedin,
    alt: 'LinkedIn Logo, click to connect',
  },
  {
    href: 'https://discord.com/users/1005116348751421470',
    src: discord,
    alt: 'Discord Logo, click to add me',
  },
]

function App() {
  return (
    <div className="relative bg-gray-950 w-full h-screen text-gray-400 p-4">
      <div className="rounded-full mx-auto size-42  brightness-75">
        <CarouselAvatar></CarouselAvatar>
      </div>
      <h1 className="text-center text-2xl my-2 font-medium ">Alexandre XYZ</h1>
      <SocialLinks items={items} />
    </div>
  )
}
