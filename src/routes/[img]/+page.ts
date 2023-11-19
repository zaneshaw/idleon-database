import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	// if (params.slug EXISTS) {

	// }

	return {
		name: "'Str'Ess_Tested_Garb.png",
		timestamp: "2022-04-09T03:15:39Z",
		url: "https://idleon.wiki/wiki/images/9/96/%27Str%27Ess_Tested_Garb.png"
	};

	throw error(404, "Not found");
};
