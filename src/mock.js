// bring in mockjs
const Mock = require('mockjs')

// get mock.Random object
const Random = Mock.Random

// an array dates of mock
const produceNewsDate = function() {
    let article = []
    for(let i = 0; i < 2; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), // Random.csentene(min, max)
            thumbnail_pics: Random.dataImage('150x150'), // Random.dataImage( size, text) produce a length of Base64 image coding
            author_name: Random.cname(), // Random.cname() produce a chinese name of random
            data: Random.date() + ' ' + Random.time()
        }
        article.push(newArticleObject)
    }
    return {
        article: article
    }
}

const todoItems = function () {
    let items = []
    for(let i = 0; i < 20; i++) {
        let tag = false
        if(i > 10) {
            tag = true
        }
        let itemObject = {
            text: Random.csentence(5, 8),
            isCompeleted: Random.boolean(),
            isChanged: false
        }
        items.push(itemObject)
    }
    return items
}
Mock.mock('/news/index', 'post', produceNewsDate)
Mock.mock('/items', 'post', todoItems)