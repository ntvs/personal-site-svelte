import { PUBLIC_PROJECTS_URL } from '$env/static/public';

export const load = async ({fetch, params}) => {

    //fetch content here
    const res = await fetch(`${PUBLIC_PROJECTS_URL}`);
    const projects = await res.json();

    //Return filtered result
    return {
        project: projects.filter(project => project.route == params.projectName)[0]
    };
}