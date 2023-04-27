<script>
    //Data fetched by load function
    export let data;
    let projects = data.projects;

    //console.log(projects);
</script>

<svelte:head>
    <title>Portfolio | Nick Ribeiro</title>
</svelte:head>

<div class="gridContainer">
    {#if projects}
    
        {#each projects as project}
            
            <a href="/project/{project.route}" class="project" style="background-image: url({project.cover});">
                <div class="innerCover">
                    <h1>{project.name}</h1>
                    <a href="/project/{project.route}">Read More</a>
                </div>
            </a>

        {/each}

    {:else}
        <h2>Projects unavailable.</h2>
        
    {/if}
</div>

<style>
    /* .gridContainer:last-child {
        margin-bottom: 1em;
    } */

    .project {
        background-size: cover;
        background-position: center;
        height: max(30vh, 250px);

        text-decoration: none;
    }

    .innerCover {
        padding: 1em;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: end;

        opacity: 0;
        color: white;
        transition: var(--transition-slow);
    }

    .innerCover h1 {
        margin: 0.5em 0;
    }

    .project:hover .innerCover, .project:active .innerCover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .innerCover h1 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }

    .innerCover a {
        border: none;
        text-decoration: none;
        padding: 1em;
        background-color: rgb(26, 97, 121);
        color: white;
        transition: var(--transition-slow);
    }

    .innerCover a:hover, .innerCover a:active {
        background-color: rgb(37, 125, 155);
    }

    .innerCover a::after {
        content: " ➥";
    }

    @media (hover: none) {
        .innerCover {
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
</style>
