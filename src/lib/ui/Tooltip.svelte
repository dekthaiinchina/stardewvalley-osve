<script lang="ts">
    interface Props {
        children: import("svelte").Snippet;
        text: string;
    }

    let { children, text }: Props = $props();
</script>

<div class="tooltip-wrapper">
    {@render children()}
    <div class="tooltip">
        <div class="tooltip-content">
            {text}
        </div>
    </div>
</div>

<style>
    .tooltip-wrapper {
        position: relative;
        height: max-content;
    }

    .tooltip {
        white-space: nowrap;
        position: absolute;
        z-index: 100;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        display: none; /* Hide by default */
        padding-bottom: 4px;
        pointer-events: none;
        touch-action: none;
    }

    .tooltip-wrapper:hover > .tooltip {
        display: block; /* Show on hover */
    }

    .tooltip-content {
        background: hsl(0, 0%, 20%);
        color: hsl(0, 0%, 98%);
        padding: 0.25em 0.5em;
        border-radius: 0.25em;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.75));
        border: solid 2px #555;
        pointer-events: none;
        user-select: none;
    }

    .tooltip-content::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid;
        border-top-color: inherit;
    }
</style>
