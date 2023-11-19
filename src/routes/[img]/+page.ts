import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	// TODO: Cache dump in store
	const dumpUrl = "https://raw.githubusercontent.com/zaneshaw/idleon-database-dumper/main/dump.json";
	let dump: any[] = (await fetch(dumpUrl).then((res) => res.json())).dump;
	const img = dump.find((x) => x.name === params.img);

	if (img !== undefined) {
		return {
			name: img.name,
			timestamp: img.timestamp,
			url: img.url
		};
	}

	throw error(404, "Image not found");
};
