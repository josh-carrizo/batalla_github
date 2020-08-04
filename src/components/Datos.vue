<template>
<div class="row">
    <div class="col-sm"></div>
    <div class="card col-sm bg-dark" style="width: 18rem;">
        <input v-model="user" type="String" placeholder="Selecciona Githuber"/>
        <button class="btn btn-primary btn-jittery" @click="cargar_datos">Cargar Datos del Githuber</button>
        <img :src="avatar" class="card-img-top" alt="...">            
        <div class="card-body">
            <h5 class="card-title text-light">{{user}}</h5>
             <p class="card-text text-light">
            Esta es la información de {{user}}
            </p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Public Repos :{{public_repos}}</li>
            <li class="list-group-item">Number of followers:  {{followers}}</li>
            <li class="list-group-item">Number Following: {{following}}</li>
            <li class="list-group-item">Public Gist: {{public_gist}}</li>
            <li class="list-group-item"><li>Total Score: {{total_score}}</li>
        </ul>
    </div>
    <div class="col-sm"></div>
</div>
</template>

<script>
export default {
    name: "Datos",
    data(){
        return {
            user:"josh-carrizo",
            public_repos: 0,
            followers: 0,
            following: 0,
            public_gist: 0,
            total_score: 0
        }
    },
    methods: {
        cargar_datos(){
            this.axios.get(`https://api.github.com/users/${this.user}`)
            .then((datos) => {
            const user_github = datos.data;
            this.avatar = user_github.avatar_url;
            this.public_repos= user_github.public_repos;
            this.followers = user_github.followers;
            this.following = user_github.following;
            this.public_gist = user_github.public_gists;
            this.total_score = this.public_repos + this.public_gist + this.followers + this.following;
            })
            .catch((error) => {
            alert(error);
            });
        }
    },
      mounted() {
        // axios en forma de promesas (ES6)
        this.cargar_datos() 
    }

}

</script>
<style scoped>
p div il ul {
font-family: 'Vollkorn', serif;

}
.card-img-top{
    width: 3rem;
    height: 3rem;
    display: inline-block;
    margin-left: 13.2rem;
    }
    .btn {
    margin: 1rem;
    opacity:80%;
    }
    .btn-jittery {
    animation: jittery 4s infinite;
    }
    @keyframes jittery {
    5%, 50% {
    transform: scale(1);
    }
    10% {
    transform: scale(0.9);
    }
    15% {
    transform: scale(1.15);
    }
    20% {
    transform: scale(1.15) rotate(-5deg);
    }
    25% {
    transform: scale(1.15) rotate(5deg);
    }
    30% {
    transform: scale(1.15) rotate(-3deg);
    }
    35% {
    transform: scale(1.15) rotate(2deg);
    }
    40% {
    transform: scale(1.15) rotate(0);
    }
    }
    @keyframes jelly {
    25% {
    transform: scale(0.9, 1.1);
    }
    50% {
    transform: scale(1.1, 0.9);
    }
    75% {
    transform: scale(0.95, 1.05);
    }
    }
    @keyframes pulse {
    from {
    box-shadow: 0 0 0 0 var(--btn-bg);
    }
    }
    @keyframes move-left {
    to {
    transform: translateX(-100%);
    }
    }

</style>
