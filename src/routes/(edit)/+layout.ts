import { base } from "$app/paths";
import { saveManager } from "$lib/save.svelte";
import { redirect } from "@sveltejs/kit";

export const load = async () => {
    if (!saveManager.save) return redirect(303, `${base}/`);
};
