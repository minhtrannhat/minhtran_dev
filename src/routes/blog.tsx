import { For, Show } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";
import { Meta, Title } from "@solidjs/meta";
import { posts } from "~/data/posts";
//@ts-expect-error
import { MDXProvider } from "solid-mdx";
import { markdownComponents, PostImage } from "~/components/Markdown";
import dayjs from "dayjs";
import "../css/prism-nord.css";
import type { Post } from "~/types";

/*
 * Code from andii.dev
 */
const Blog = (props: RouteSectionProps<unknown>) => {
	const meta = () =>
		posts.find((p) => props.location.pathname.endsWith(p.slug)) as Post;
	const index = () => posts.indexOf(meta());

	const prevMeta = () =>
		index() === posts.length - 1 ? undefined : posts[index() + 1];
	const nextMeta = () => (index() === 0 ? undefined : posts[index() - 1]);

	return (
		<article class="pb-5v">
			<Title>minhtran_dev - {meta()?.title}</Title>
			<Meta name="og:title" content={meta().title} />
			<Meta name="description" content={meta().description} />
			<Meta name="og:description" content={meta().description} />
			<Meta property="og:type" content="article" />

			<Meta
				property="og:url"
				content={`https://minhtranhat.com/blog/${meta()?.slug}`}
			/>

			<Meta property="og:image" content="/og.png" />
			<Meta property="og:image:alt" content="minhtran_dev site" />
			<Meta property="og:image:width" content="1200" />
			<Meta property="og:image:height" content="630" />

			<Show when={meta().featuredImage}>
				<PostImage
					class="mb-3v saturate-0"
					src={meta().featuredImage || ""}
					alt={meta().featuredImageDesc || ""}
				/>
			</Show>

			<h1 class="text-2v leading-2 font-bold mb-1v">{meta().title}</h1>

			<div class="flex items-center gap-4h mb-2v text-sm leading-1">
				<p>{dayjs(meta().date).format("D MMMM YYYY")}</p>

				<div class="">
					<For each={meta().tags}>
						{(tag, index) => (
							<>
								<a
									href={`/tags/${tag}`}
									class="font-medium underline underline-offset-2 italic"
								>
									{tag}
								</a>
								{index() === meta().tags.length - 1 ? "" : ", "}
							</>
						)}
					</For>
				</div>
			</div>

			<MDXProvider components={markdownComponents}>
				{props.children}
			</MDXProvider>

			<div class="mt-3v flex flex-col gap-1v">
				<Show when={prevMeta()} fallback={<div />}>
					<div class="flex gap-1h">
						<span>Previous:</span>
						<a
							class="underline underline-offset-2"
							href={`/blog/${prevMeta()?.slug}`}
						>
							{prevMeta()?.title}
						</a>
					</div>
				</Show>
				<Show when={nextMeta()} fallback={<div />}>
					<div class="flex gap-1h">
						<span>Next:</span>
						<a
							class="underline underline-offset-2"
							href={`/blog/${nextMeta()?.slug}`}
						>
							{nextMeta()?.title}
						</a>
					</div>
				</Show>
			</div>
		</article>
	);
};
export default Blog;
