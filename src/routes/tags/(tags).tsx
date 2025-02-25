import { For } from "solid-js";
import { tags } from "~/data/tags";
import { Title, Meta } from "@solidjs/meta";

/*
 * Code from andii.dev
 */
const Tags = () => {
	return (
		<div>
			<Title>minhtran_dev - Article Tags</Title>

			<Meta property="og:title" content="minhtran_dev Article Tags" />
			<Meta property="og:description" content="Tags for my articles" />
			<Meta property="og:image" content="/og.png" />
			<Meta property="og:image:alt" content="minhtran_dev site" />
			<Meta property="og:image:width" content="1200" />
			<Meta property="og:image:height" content="630" />

			<h1 class="text-xl text-nord-1 font-bold mt-1v mb-1v">All tags:</h1>
			<ol class="flex flex-col gap-1v list-square ml-2h">
				<For each={Object.values(tags)}>
					{(tag) => (
						<li class="">
							<a class="underline underline-offset-2" href={`/tags/${tag.id}`}>
								{tag.id}
							</a>
							<span>
								{" "}
								- {tag.posts.length} Post{tag.posts.length === 1 ? "" : "s"}
							</span>
						</li>
					)}
				</For>
			</ol>
		</div>
	);
};

export default Tags;
