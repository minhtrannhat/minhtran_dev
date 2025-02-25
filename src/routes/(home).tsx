import { For } from "solid-js";
import Experience from "../components/Experience";
import { Title, Meta } from "@solidjs/meta";

const links = [
	"https://github.com/minhtrannhat",
	"https://linkedin.com/in/minh-tran-nhat",
	"https://git.minhtrannhat.com/explore/repos",
];

const Homepage = () => {
	return (
		<div>
			<Title>minhtran_dev</Title>

			<Meta property="og:title" content="minhtran_dev" />
			<Meta property="og:description" content="just trying my best :)" />
			<Meta property="og:image" content="/og.png" />
			<Meta property="og:image:alt" content="minhtran_dev site" />
			<Meta property="og:image:width" content="1200" />
			<Meta property="og:image:height" content="630" />

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
						Things that I'm most passionate about: distributed systems, backend
						development, compilers and systems programming.
						<br />
						<br />
						When I'm not coding, I read books, listen to podcasts or study music
						theory.
					</p>
					<p>
						Email me at:{" "}
						<a
							class="underline hover:text-nord-11"
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
							<li class="list-square hover:text-nord-11 ml-2h leading-1">
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
