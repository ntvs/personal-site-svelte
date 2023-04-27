<script>
    export let object = {
        text: "",
        color: "white",
        bgcolor: "gray"
    };
</script>

<p class="tag" style="color: {object.color}; background-color: {object.bgcolor}">{object.text}</p>

<style>
    .tag {
        color: white;
        background-color: #84253b;
        border-radius: 0.5em;
        padding: 0.3em;
        font-size: 0.9em;
        display: inline-block;
        margin: 0.1em;
    }
</style>