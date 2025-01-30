const JobCard = (props) => {
	return (
		<div class="p-4">
			<h3 class="font-bold text-xl">
				{props.job.title} @
				<a href={props.job.url} class="text-blue-500 hover:text-blue-600">
					{props.job.company}
				</a>
			</h3>
			<p class="text-nord-1 mb-4">
				{props.job.range} | {props.job.location}
			</p>
		</div>
	);
};

export default JobCard;
