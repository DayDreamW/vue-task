<template>
  <div class="hello">
    <NewsCell :newsListShow = "newsListShow"></NewsCell>
    <ul>
      <li v-for="(item, index) in array1" v-bind:key = "index">
        {{item.isCompeleted ? 'true' : 'false'}}{{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import api from './../axios/api'
import NewsCell from './NewsCell'
export default {
  name: 'HelloWorld',
  data () {
    return {
      newsListShow: [],
      array1: [],
      array2: [],
      todos:[]
    }
  },
  components: {
    NewsCell
  },
  created() {
    this.setNewApi()
    // this.getTodoItems()
    this.tryAgain()
    // console.log(this.array1.push(...this.array2))
  },
  methods: {
    setNewApi: function() {
      api.JH_news('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res)
        this.newsListShow = res.article
      })
    },
    getTodoItems: function() {
      api.JH_news('/items', 'type=top&key=123456')
      .then(res => {
        this.todos = res
        console.log(res)
        // this.array1 = res.filter(ele => ele.isCompeleted === true)
        // this.array2 = res.filter(ele => ele.isCompeleted !== true)
        // this.array1.push(...this.array2)
        // console.log(this.array1, this.array2)
      })
    },
   async tryAgain () {
      let cc = await api.JH_news('/items', 'type=top&key=123456')
      this.array1 = cc.filter(ele => ele.isCompeleted === true)
      this.array2 = cc.filter(ele => ele.isCompeleted !== true)
      console.log(this.array1.push(...this.array2))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
