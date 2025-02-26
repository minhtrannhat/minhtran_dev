import type { RouteSectionProps } from "@solidjs/router";
import { type Component, Show } from "solid-js";
import { posts } from "~/data/posts";
import { Posts } from "~/components/Posts";
import { tags } from "~/data/tags";
import { Title, Meta } from "@solidjs/meta";

/*
 * Code from andii.dev
 */
const TagId: Component<RouteSectionProps<unknown>> = (props) => {
	const tag = () => tags[props.params.id];
	return (
		<Show when={tag()} fallback={<div>No posts with that tag</div>}>
			<Title>minhtran_dev - Tag: {tag().id}</Title>

			<Meta
				property="og:title"
				content={`minhtran_dev Articles Tag: ${tag().id}`}
			/>
			<Meta property="og:description" content={`My ${tag().id} Articles`} />
			<Meta property="og:image" content="/og.png" />
			<Meta property="og:image:alt" content="minhtran_dev site" />
			<Meta property="og:image:width" content="1200" />
			<Meta property="og:image:height" content="630" />

			<div>
				<h1 class="text-lg font-bold mb-6">Tag: {tag().id}</h1>

				<Posts posts={tag().posts.map((i) => posts[i])} />
			</div>
		</Show>
	);
};

export default TagId;
