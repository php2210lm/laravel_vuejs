<template>
    <nav class="navbar navbar-inverse">

        <div class="container">
            <a class="navbar-brand" href="#">Title</a>
            <ul class="nav navbar-nav">
                <li class="active">
                    <router-link :to="'/'">Home</router-link>
                </li>
                <li>
                    <router-link :to="'/about'">About Us</router-link>
                </li>
            </ul>
        </div>

    </nav>

    <div class="container">
        <router-view />
    </div>
</template>

<script>

export default ({
    name: "App"
})
</script>
