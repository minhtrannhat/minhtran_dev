export type Post = {
	title: string;
	date: Date;
	slug: string;
	tags: string[];
	featuredImage?: string;
	featuredImageDesc?: string;
	description: string;
};

export type Tag = {
	// id/name of tag
	id: string;
	// indexes of posts with tag (they point to the posts list coming from virtual:blog-posts)
	posts: number[];
};
