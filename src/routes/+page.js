import { PUBLIC_PROJECTS_URL } from '$env/static/public';

export const load = async ({fetch}) => {

    //fetch content here
    const res = await fetch(`${PUBLIC_PROJECTS_URL}`);
    const projects = await res.json();

    //console.log(projects);

    return {
        projects
    };
}