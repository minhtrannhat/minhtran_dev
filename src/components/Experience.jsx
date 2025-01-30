import { For } from "solid-js";
import JobCard from "./JobCard";
import { createSignal } from "solid-js";

const Experience = () => {
	const [jobs, _] = createSignal([
		{
			title: "Software Developer Engineer Intern",
			company: "Amazon (Delivery Extensions Team)",
			location: "Toronto, Ontario, Canada",
			range: "May 2025 - July 2025",
			url: "https://amazon.jobs/content/en/teams/ftr",
		},
		{
			title: "Software Engineer Intern",
			company: "Cisco Systems",
			location: "Remote",
			range: "January 2023 - May 2023",
			url: "https://developer.cisco.com/docs/modeling-labs/cat-9000v/",
		},
	]);

	return (
		<section class="mt-16 px-4">
			<h2 class="text-xl text-nord-1 font-bold mb-6">Experience</h2>

			<div class="!flex !flex-col !gap-0.5v ml-2h">
				<For each={jobs()}>{(job) => <JobCard job={job} />}</For>
			</div>
		</section>
	);
};

export default Experience;
