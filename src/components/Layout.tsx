import { A } from "@solidjs/router";
import type { ParentComponent } from "solid-js";
import { clientOnly } from "@solidjs/start";

const DarkModeToggle = clientOnly(() =>
	import("./DarkModeToggle").then((r) => ({
		default: r.DarkModeToggle,
	})),
);

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
			<div class="flex flex-col min-h-screen pt-2v py-1v px-2h max-w-thread mx-auto relative overflow-x-hidden leading-1 box-border decoration-2 underline-offset-2">
				<header class="flex flex-col items-center justify-center gap-2v px-4h py-2v">
					<a href="/" class="text-2v leading-2 font-bold">
						~/minhtrannhat
					</a>

					<DarkModeToggle />

					<nav>
						<ul class="flex items-center gap-7h">
							<A end class="hover:underline" activeClass="font-bold" href={"/"}>
								Home
							</A>
							<A
								end
								class="hover:underline"
								activeClass="font-bold"
								href={"/articles"}
							>
								Articles
							</A>
							<A
								end
								class="hover:underline"
								activeClass="font-bold"
								href={"/tags"}
							>
								Tags
							</A>
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noreferrer"
								onClick={() => changeFavicon("./favicon.ico")}
							>
								Resume
							</a>
						</ul>
					</nav>
				</header>

				<main id="main-content" class="mt-1v flex-auto">
					{props.children}
				</main>

				<div class="debug-grid" />
			</div>
		</>
	);
};
