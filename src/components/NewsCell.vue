<template>
    <ul>
        <li v-for="(item, index) in newsListShow" v-bind:key = "index">
            <div class="item_left">
                <h3>{{item.title}}</h3>
                <p>
                    <span>{{item.author_name}}</span>
                    <span>{{item.data | getYMD }}</span>
                </p>
            </div>
            <div class="item_right">
                <div class="item_img">
                    <img :src="item.thumbnail_pics" alt="">
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'newscell',
    props: ['newsListShow']
}
</script>
