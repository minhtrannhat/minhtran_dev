import { A } from "@solidjs/router";
import { For, type ParentComponent } from "solid-js";
import { TextHoverJump } from "./TextHoverJump";
import { clientOnly } from "@solidjs/start";

const DarkModeToggle = clientOnly(() =>
	import("./DarkModeToggle").then((r) => ({
		default: r.DarkModeToggle,
	})),
);

export const Layout: ParentComponent = (props) => {
	return (
		<>
			<a href="#main-content" class="sr-only">
				Skip to main content
			</a>
			<div class="flex flex-col min-h-screen pt-2v py-1v px-2h max-w-thread mx-auto relative overflow-x-hidden leading-1 box-border decoration-2 underline-offset-2">
				<header class="flex flex-col items-center justify-center gap-2v px-4h py-2v">
					<a href="/" class="text-2v leading-2 font-bold">
						<TextHoverJump text="~/minhtrannhat.com" />
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
							<a href="/resume.pdf" target="_blank" rel="noreferrer">
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
