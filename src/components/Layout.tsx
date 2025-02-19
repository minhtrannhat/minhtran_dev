import { A } from "@solidjs/router";
import type { ParentComponent } from "solid-js";

/*
 * Code from andii.dev
 */
function changeFavicon(newFaviconPath: string) {
	const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
	if (link) {
		link.href = newFaviconPath;
	} else {
		const newLink = document.createElement("link");
		newLink.rel = "icon";
		newLink.href = newFaviconPath;
		document.head.appendChild(newLink);
	}
}

export const Layout: ParentComponent = (props) => {
	return (
		<>
			<a href="#main-content" class="sr-only">
				Skip to main content
			</a>
			<div class="bg-nord-6 flex flex-col min-h-screen pt-2v py-1v px-2h max-w-full mx-auto relative overflow-x-hidden leading-1 box-border decoration-2 underline-offset-2">
				<header class="flex flex-col items-center justify-center gap-2v px-4h py-2v">
					<a href="/" class="text-nord-3 text-2v leading-2 font-bold">
						~/minh
					</a>

					<nav class="container mx-auto px-4 py-4">
						<ul class="flex flex-wrap justify-center items-center gap-6">
							<A
								end
								class="hover:underline hover:text-nord10"
								activeClass="font-bold"
								href={"/"}
							>
								Home
							</A>
							<A
								end
								class="hover:underline hover:text-nord10"
								activeClass="font-bold"
								href={"/articles"}
							>
								Articles
							</A>
							<A
								end
								class="hover:underline hover:text-nord10"
								activeClass="font-bold"
								href={"/tags"}
							>
								Tags
							</A>
							<A
								class="hover:text-nord10"
								href="/resume.pdf"
								target="_blank"
								rel="noreferrer"
								onClick={() => changeFavicon("./favicon.ico")}
							>
								Resume
							</A>
						</ul>
					</nav>
				</header>

				<main id="main-content" class="mt-1v flex-auto">
					{props.children}
				</main>
			</div>
		</>
	);
};
