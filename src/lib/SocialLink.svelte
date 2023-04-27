<script>
    export let options = {
        "icon": "",
        "link": "",
        "color": "white"
    };
</script>

<a href="{options.link}" target="_blank" class="link" rel="noreferrer">
    <div class="social">
        <img class="social-icon" src="{options.icon}" alt="{options.text}">
        {#if options.text}
            <p class="social-text" style="color: {options.color};">{options.text}</p>
        {/if}
    </div>
</a>

<style>
    .social {
        font-size: 1em;
        padding: 10px;
        margin: 5px;
        color: white;
        cursor: pointer;
        transition: 0.2s;
        border-radius: 5px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    .social-icon {
        display: inline-block;
        height: 1.5em;
        width: auto;
        vertical-align: middle;
    }
    .social-text {
        padding-left: 0.5em;
        display: inline-block;
    }
</style>