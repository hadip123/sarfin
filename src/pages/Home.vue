<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <p>Analyze your listening habits</p>

        <RouterLink to="/login">
            <button>Get Started!</button>
        </RouterLink>
    </div>
</template>
<style scoped>
div {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: var(--background);
    gap: 2rem;
}

p {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    margin: 0;
    line-height: 1.2;
    animation: fadeIn 0.8s ease-out;
    max-width: 800px;
}

button {
    font-size: 1.25rem;
    padding: 1rem 2.5rem;
    background-color: var(--primary-600);
    color: white;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    animation: slideUp 0.8s ease-out 0.2s both;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
    background-color: var(--primary-700);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Dark mode adjustments */
:root[data-theme="dark"] button {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
    p {
        font-size: 2rem;
    }

    button {
        font-size: 1rem;
        padding: 0.875rem 2rem;
    }
}

@media (max-width: 480px) {
    p {
        font-size: 1.5rem;
    }

    div {
        padding: 1rem;
        text-align: center;
    }
}
</style>
