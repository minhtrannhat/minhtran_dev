import { For } from "solid-js";
import Experience from "../components/Experience";

const links = [
	"https://github.com/minhtrannhat",
	"https://linkedin.com/in/minh-tran-nhat",
	"https://git.minhtrannhat.com/explore/repos",
];
const Homepage = () => {
	return (
		<div>
			<section class="mx-4 flex flex-col sm:flex-row gap-2v sm:gap-3h">
				<div class="font-medium">
					<div class="text-nord-1 flex items-end mb-1v gap-1h">
						<p>Hi, Minh here.</p>
					</div>
					<p class="mb-1v text-nord-1">
						I'm a Computer Engineering student at Concordia University,
						Montreal, Canada.
						<br />
						<br />
						I'm most passionate about designing distributed systems that scales
						but I'm also interested in compilers and systems programming.
						<br />
						<br />
						When I'm not coding, I read books, listen to podcasts or study music
						theory.
					</p>
					<p>
						Say hi:{" "}
						<a
							class="underline"
							target="_blank"
							rel="noreferrer"
							href="mailto:minh@minhtrannhat.com"
						>
							minh@minhtrannhat.com
						</a>
					</p>
				</div>
				<ul class="mx-4 sm:mx-6 sm:mt-3v text-slate-600 text-base sm:text-sm leading-1">
					<For each={links}>
						{(link) => (
							<li class="list-square hover:text-black ml-2h leading-1">
								<a
									target="_blank"
									rel="noreferrer"
									href={link}
									class="underline"
								>
									{link.replace("https://", "")}
								</a>
							</li>
						)}
					</For>
				</ul>
			</section>

			<br />
			<Experience />
		</div>
	);
};

export default Homepage;
