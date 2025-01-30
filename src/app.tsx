import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Layout } from "./components/Layout";
import { MetaProvider, Title, Meta } from "@solidjs/meta";

export default function App() {
	return (
		<MetaProvider>
			<Title>minhtran_dev</Title>
			<Meta property="og:title" content="minhtran_dev" />
			<Meta property="og:description" content="just trying my best :)" />
			<Meta property="og:image" content="/og.png" />
			<Meta property="og:image:alt" content="minhtran_dev site" />
			<Meta property="og:image:width" content="1200" />
			<Meta property="og:image:height" content="630" />
			<Router
				root={(props) => {
					return (
						<Layout>
							<Suspense>{props.children}</Suspense>
						</Layout>
					);
				}}
			>
				<FileRoutes />
			</Router>
		</MetaProvider>
	);
}
