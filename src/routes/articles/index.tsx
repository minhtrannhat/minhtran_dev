import { posts } from "~/data/posts";
import dayjs from "dayjs";

import { For } from "solid-js";

const Articles = () => {
	return (
		<div>
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
