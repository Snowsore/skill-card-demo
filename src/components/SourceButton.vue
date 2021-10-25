<template>
    <a href='#'>
        <div class='logo'>
            <img v-if='type == "github"' src='@/assets/github.png'/>
            <img v-if='type == "stack"' src='@/assets/stack.png'/>
            <img v-if='type == "google"' src='@/assets/google.png'/>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        type: String
    }
}
</script>

<style scoped>

    a {
        margin-right: 10px;
        text-decoration: none;
    }

    .logo {
        width: 100px;
        height: 20px;


        border: 1px solid #00000060;
        border-radius: 10px;

        box-shadow: 0 0 5px 1px #00000030;

        padding: 1px;
        
        display: grid;
        justify-items: center;
        align-items: center;

        position: relative;
    }

    img {
        position: absolute;
        width: 80px;
        height: 20px;

        transform: none;
    }

</style>