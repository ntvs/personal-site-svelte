<script>
    //fetched data
    export let data;
    const project = data.project;

    //components
    import Tag from "../../../lib/Tag.svelte";

    console.log(project);
</script>

<main class="gridContainer">
    
</main>

<div class="content clearFloat">
    <h1>{project.name}</h1>
    <h3>{project.affiliation} • {project.date}</h3>

    <div class="tags">
        {#each project.technologies as tech}
            <Tag object={{text: tech.content, bgcolor: "lightgray"}}/>
        {/each}
    </div>

    <img src="{project.cover}" alt="{project['cover-alt']}">

    <p>{project.description}</p>
</div>

<!-- <h1>{project.name}</h1>
<p>{project.description}</p> -->


<style>

    main {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        align-items: center;
    }

    h1 {
        color: lightgray;
        padding: 1rem 1rem 0 1rem;
    }

    h3 {
        padding: 1rem;
        color: gray;
    }

    .tags {
        padding: 0 1rem 0 1rem;
    }

    p {
        color: gray;
        line-height: 2em;
        padding: 1em;
    }

    img {
        width: 50%;
        float: right;
        padding: 1rem;
    }

    .clearFloat::after {
        clear: both;
        display: block;
        content: "";
    }

    @media screen and (max-width: 1000px) {
        img {
            float: none;
            width: 100%;
        }
    }
</style>