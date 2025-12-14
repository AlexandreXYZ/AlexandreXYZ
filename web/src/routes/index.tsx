import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

import SocialLinks from "../components/socialLinks";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import discord from "../assets/icons/discord.svg";
import { CarouselAvatar } from "@/components/carousselAvatar";
import { Galery } from "@/components/galery";

const items = [
	{
		href: "https://github.com/AlexandreXYZ",
		src: github,
		alt: "GitHub Logo, click to view my profile",
	},
	{
		href: "https://www.linkedin.com/in/alexandrexyz/",
		src: linkedin,
		alt: "LinkedIn Logo, click to connect",
	},
	{
		href: "https://discord.com/users/1005116348751421470",
		src: discord,
		alt: "Discord Logo, click to add me",
	},
];

function App() {
	return (
		<div className="relative bg-gray-950 w-full min-h-screen text-gray-300 p-8">
			<div className="rounded-full mx-auto size-42 brightness-75 mt-8">
				<CarouselAvatar />
			</div>
			<h1 className="text-center text-2xl my-2 font-medium ">Alexandre XYZ</h1>
			<SocialLinks items={items} />
			{/* <div className="mt-8">
				<div className="max-w-md mx-auto">
					<Link to="/" className="hover:text-gray-300 text-gray-400">
						<div className="text-justify">
							lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</Link>
				</div>
			</div> */}
			<h2 className="text-center text-2xl mt-16 mb-8 font-medium ">Galeria</h2>
			<Galery />
		</div>
	);
}
