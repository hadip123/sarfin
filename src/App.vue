<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <header>
        <h2>Sarfin Analytics</h2>
    </header>
    <RouterView />
</template>

<style scoped>
header {
    padding: 1rem 2rem;
    background-color: var(--surface);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* Optional: Add a subtle teal accent to the logo text */
h2::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 24px;
    background-color: var(--primary-500);
    border-radius: 2px;
    margin-right: 0.5rem;
}

/* Smooth transition for dark mode */
header,
h2 {
    transition:
        background-color 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease;
}

/* Layout container for the router view */
:deep(.router-view-container) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    header {
        padding: 1rem;
    }

    h2 {
        font-size: 1.25rem;
    }

    :deep(.router-view-container) {
        padding: 1rem;
    }
}

/* Optional: Add a subtle hover effect on the header */
header:hover {
    background-color: var(--surface);
    border-bottom-color: var(--primary-400);
}

/* Optional: Add an active page indicator */
:deep(.router-link-active) {
    color: var(--primary-500);
    font-weight: 600;
}
</style>
