<template>
  <div class="cuadro">

      <h3>{{nombre_user}}</h3>
        <ul> 
            <li>Public Repos :{{public_repos}}</li>
            <li>Number of followers:  {{followers}}</li>
            <li>Number Following: {{following}}</li>
            <li>Public Gist: {{public_gist}}</li>
            <li>Total Score: {{total_score}}</li>
        </ul>
  </div>
</template>

<script>
export default {
    name: "Datos",
    data(){
        return {
            nombre_user: "",
            public_repos: 0,
            followers: 0,
            following: 0,
            public_gist: 0,
            total_score: 0
        }
    },
   mounted() {
    // axios en forma de promesas (ES6)
    this.axios.get('https://api.github.com/users/josh-carrizo')
    .then((datos) => {
      const user = datos.data;

      this.nombre_user = user.login;
      this.public_repos= user.public_repos;
      this.followers = user.followers;
      this.following = user.following;
      this.public_gist = user.public_gists;
      this.total_score = this.public_repos + this.public_gist + this.followers + this.following;
    })
    .catch((error) => {
      alert(error);
    });

  }
}


</script>

