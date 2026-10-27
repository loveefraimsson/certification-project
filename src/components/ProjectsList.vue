<template>
    <section class="projects">
        <h2>Projekt</h2>
        <ul v-for="project in projects">
            <li><router-link :to=" '/projects/' + project.id ">{{ project.title }}</router-link></li>
        </ul>
    </section>
    
</template>


<script>
    import projects from '@/assets/projects.js';

    export default {
        name: 'projectslist',

        data() {
            return {
                projects: projects,
            }
        },
    }
</script>