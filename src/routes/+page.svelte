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
            
            <div class="project">
                <h2>{project.name}</h2>
            </div>

        {/each}

    {:else}
        <h2>Projects unavailable...</h2>
        
    {/if}
</div>

<style>
    .project {
        padding: 1em;
        margin: 1em 0;
    }
</style>
