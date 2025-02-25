import { posts } from "~/data/posts";
import dayjs from "dayjs";
import { Title, Meta } from "@solidjs/meta";
import { For } from "solid-js";

const Articles = () => {
	return (
		<div>
			<Title>minhtran_dev - Articles</Title>

			<Meta property="og:title" content="minhtran_dev Articles" />
			<Meta property="og:description" content="My articles" />
			<Meta property="og:image" content="/og.png" />
			<Meta property="og:image:alt" content="minhtran_dev site" />
			<Meta property="og:image:width" content="1200" />
			<Meta property="og:image:height" content="630" />

			<ol class="flex flex-col gap-1v list-square ml-2h">
				<For each={Object.values(posts)}>
					{(post) => (
						<li class="list-square ml-2h mb-1v">
							<a
								class="font-medium underline block"
								href={`/blog/${post.slug}`}
							>
								{post.title}
							</a>
							<span class="text-xs leading-1 text-slate-600 dark:text-slate-400">
								{dayjs(post.date).format("MMMM YYYY")}
							</span>
						</li>
					)}
				</For>
			</ol>
		</div>
	);
};

export default Articles;
