<template>
    <form @submit.prevent="handleSubmit" class="form-container">
        <h2 class="form-title">Jellyfin Configuration</h2>

        <div class="form-group">
            <label for="jellyfinUrl">Jellyfin URL</label>
            <input
                id="jellyfinUrl"
                v-model="formData.jellyfinUrl"
                type="url"
                required
                placeholder="https://your-jellyfin-server.com"
            />
        </div>

        <div class="form-group">
            <label for="apiKey">API Key</label>
            <input
                id="apiKey"
                v-model="formData.apiKey"
                type="password"
                required
                placeholder="Enter your API key"
            />
        </div>

        <button type="submit">Save Configuration</button>
    </form>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
    jellyfinUrl: "",
    apiKey: "",
});

const handleSubmit = () => {
    // Here you would typically make an API call or emit the form data
    console.log("Form submitted:", formData);
};
</script>

<style scoped>
.form-container {
    background-color: var(--surface);
    border-radius: 0.75rem;
    padding: 2rem;
    max-width: 480px;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border);
}

.form-title {
    color: var(--text-primary);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    position: relative;
    padding-bottom: 0.75rem;
}

.form-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--primary-500);
    border-radius: 2px;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: var(--text-primary);
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.form-group input {
    width: 90%;
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--border);
    background-color: var(--background);
    color: var(--text-primary);
    border-radius: 0.5rem;
    transition: all 0.2s ease;
}

.form-group input::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
}

.form-group input:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 2px var(--primary-100);
}

button[type="submit"] {
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-600);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

button[type="submit"]:hover {
    background-color: var(--primary-700);
}

button[type="submit"]:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-100);
}

/* Dark mode specific adjustments */
:root[data-theme="dark"] .form-container {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

:root[data-theme="dark"] .form-group input:focus {
    box-shadow: 0 0 0 2px var(--primary-900);
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .form-container {
        margin: 1rem;
        padding: 1.5rem;
    }

    .form-title {
        font-size: 1.25rem;
    }
}
</style>
