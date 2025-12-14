import mother from '../assets/galery/mother.jpg'
import Lord from '../assets/galery/Lord.jpg'
import TheMockingofChristCarlBloch from '../assets/galery/TheMockingofChrist-CarlBloch.webp'
import divineMercy from '../assets/galery/divinemercy.jpg'
import saintAugostin from '../assets/galery/saintAugostin.jpg'
import LordHand from '../assets/galery/LordHand.jpg'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Suspense, useState } from 'react'

const galeryImages = [
  {
    title: 'Saint Mary - Mother of Jesus',
    src: mother,
    description:
      'E Maria disse: A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus, meu Salvador. (Lucas 1:46-47)',
  },
  {
    title: 'The Mocking of Christ - Carl Bloch',
    src: TheMockingofChristCarlBloch,
    description:
      'Então cuspiram nele, e tomaram a cana, e batiam-lhe na cabeça. E, escarnecendo dele, despiram-lhe a capa, e o levaram para ser crucificado. (Mateus 27:30-31)',
  },
  {
    title: 'Divine Mercy',
    src: divineMercy,
    description:
      'Bem-aventurados os misericordiosos, porque eles alcançarão misericórdia. (Mateus 5:7)',
  },
  {
    title: 'Saint Augustin',
    src: saintAugostin,
    description:
      'Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto. (Isaías 55:6)',
  },
  {
    title: 'Lord',
    src: Lord,
    description:
      'Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão por mim. (João 14:6)',
  },
  {
    title: "Lord's Hand",
    src: LordHand,
    description:
      'A mão do Senhor não está encolhida para que não possa salvar, nem surdo o seu ouvido para que não possa ouvir. (Isaías 59:1)',
  },
]

export const Galery = () => {
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false)

  const handleCopyDescription = (description: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(description)
        .then(() => {
          setCopyTooltipOpen(true)
          setTimeout(() => setCopyTooltipOpen(false), 777)
        })
        .catch(() => {})
    }
  }

  return (
    <ul className="columns-1  sm:columns-2 lg:columns-3  gap-4   lg:w-200 mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        {galeryImages.map((image) => (
          <Dialog>
            <DialogTrigger asChild>
              <li key={image.title} className="mb-4 break-inside-avoid">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full hover:-translate-y-2 cursor-pointer transition mx-auto object-fill"
                />
              </li>
            </DialogTrigger>
            <DialogContent className="border-gray-700 border-2 sm:max-w-106 bg-gray-950 text-gray-300">
              <DialogHeader className="gap-6">
                <DialogTitle className="text-center">{image.title}</DialogTitle>
                <DialogDescription
                  onClick={() => handleCopyDescription(image.description)}
                  title="Click to copy description"
                  className="italic cursor-pointer"
                >
                  <Tooltip open={copyTooltipOpen}>
                    <TooltipTrigger
                      title=""
                      className="cursor-pointer focus-visible:outline-none"
                    >
                      {image.description}
                    </TooltipTrigger>
                    <TooltipContent className="fill-green-400 bg-green-400">
                      <div className="rounded-md text-gray-950 ">Copiado!</div>
                    </TooltipContent>
                  </Tooltip>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </Suspense>
    </ul>
  )
}
