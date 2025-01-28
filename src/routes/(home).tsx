import { For } from "solid-js";
import { posts } from "~/data/posts";
import { Posts } from "~/components/Posts";

const links = [
	"https://github.com/minhtrannhat",
	"https://linkedin.com/in/minh-tran-nhat",
	"https://git.minhtrannhat.com/explore/repos",
];
const Homepage = () => {
	return (
		<div>
			<section class="flex flex-col sm:flex-row gap-2v sm:gap-3h">
				<div class="font-medium">
					<div class="flex items-end mb-1v gap-1h">
						<p>Hi, Minh here.</p>
					</div>
					<p class="mb-1v">
						I'm Minh Tran, a Computer Engineering student at Concordia
						University, Montreal, Canada.
						<br />
						<br />
						I'm most passionate about designing distributed systems that scales
						but I'm also interested in compilers and systems programming. When
						I'm not coding, I read books, listen to podcasts or study music
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
				<ul class="sm:mt-3v text-slate-600 dark:text-slate-200 text-base sm:text-sm leading-1">
					<For each={links}>
						{(link) => (
							<li class="list-square hover:text-black dark:hover:text-white ml-2h leading-1">
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

			<hr />
		</div>
	);
};

export default Homepage;
