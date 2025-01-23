// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<link rel="icon" type="image/png" href="/favicon.png" />
					<script>
						{`document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches)`}
					</script>
					{assets}
				</head>
				<body class="font-mono bg-white dark:bg-black dark:text-white">
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
