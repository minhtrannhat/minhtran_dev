import { For } from "solid-js";
import JobCard from "./JobCard";
import { createSignal } from "solid-js";

const Experience = () => {
	const [jobs, setJobs] = createSignal([
		{
			title: "Software Developer Engineer Intern",
			company: "Amazon (Delivery Extensions Team)",
			location: "Toronto, Ontario, Canada",
			range: "May 2025 - July 2025",
			url: "",
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
		<section class="mt-6 mx-auto px-4">
			<h2 class="mt-6 text-xl font-bold mb-8">Experience</h2>
			<div>
				<For each={jobs()}>{(job) => <JobCard job={job} />}</For>
			</div>
		</section>
	);
};

export default Experience;
