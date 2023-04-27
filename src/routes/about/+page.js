import { PUBLIC_PROFILE_URL } from '$env/static/public';

export const load = async ({fetch}) => {

    //fetch content here
    const res = await fetch(`${PUBLIC_PROFILE_URL}`);
    const profile = await res.json();

    return {
        profile
    };
}