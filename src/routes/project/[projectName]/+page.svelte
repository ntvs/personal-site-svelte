<script>
    //fetched data
    export let data;
    const project = data.project;

    //components
    import Tag from "../../../lib/Tag.svelte";

    console.log(project);
</script>

<section class="heading">
    <h1>{project.name}</h1>
    <h3>{project.affiliation} • {project.date}</h3>

    <div class="tags">
        {#each project.technologies as tech}
            <Tag object={{text: tech.content, bgcolor: "lightgray"}}/>
        {/each}
    </div>
</section>

<section class="content clearFloat">
    <img src="{project.cover}" alt="{project['cover-alt']}">
    <p>{project.description}</p>
</section>

<!-- <h1>{project.name}</h1>
<p>{project.description}</p> -->


<style>

    .heading {
        text-align: left;
    }

    h1 {
        font-size: 2em;
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