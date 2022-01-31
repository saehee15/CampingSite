<template>
 <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="nav">
    <a class="navbar-brand" href='#/main'>PLAYGROUND</a>
      <div v-for="nav in navigations" :key="nav.name" class="navbar-nav">
        <RouterLink :to="nav.href" class="nav-link">{{nav.name}}</RouterLink>
      </div>
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
 </header>
</template>

<script>
export default {
 data(){
     return{
         navigations:[
             {
                 name:'SHELTER',
                 href:'/shelter'
             },
             {
                 name:'SLEEPINGBAG',
                 href:'/sleepingbag'
             },
             {
                 name:'TABLE',
                 href:'/table'
             },
             {
                 name:'STOVE',
                 href:'/stove'
             },
             {
                 name:'LANTERN',
                 href:'/lantern'
             },
             {
                 name:'ETC',
                 href:'/etc'
             },
         ]
     }
 }
}
</script>
<style lang="scss" scoped>
header{
    height: 100px;
    width: 100%;
    justify-content: space-between;
    .navbar-brand{
        margin-right: 50px;
    }
    .navbar-nav{
        margin-right: 20px;
    }
    form{
        margin-right: 100px;
    }
}
.nav{
    margin: 0 100px 0 100px;
}
</style>