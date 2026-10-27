<template>
    <h2>{{ project.title }}</h2>
    <p>{{ project.content }}</p>


    <section class="imageContainer">


        <section class="images" v-for="item in project.images">

                <img 
                    :src="require(`../assets/${item[0]}.png`)" 
                    alt="" 
                >
        
                <img class="arrow" :src="require(`../assets/arrow.png`)" alt="Pil åt höger" >

                <img   
                    :src="require(`../assets/${item[1]}.png`)" 
                    alt="" 
                >
        </section>




    </section>
    
    <button @click="this.$router.back()">Tillbaka</button> <br />
</template>


<script>
    import projects from '@/assets/projects.js';

    

    export default {
    
        data() {
            return {
                project: []
            }
            
        },

        created() {
            const id = parseInt(this.$route.params.id);
            const project = projects.find(p => p.id === id);
            this.project = project
        },
    }
</script>
