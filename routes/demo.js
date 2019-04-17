/**
 * Created by upc on 2019/4/16.
 */
var express = require('express');
var router = express.Router();


// 处理根目录的get请求
router.get('/',function(req,res,next){
    res.sendfile('public/index.html') ;
    console.log('main page is required ');
}) ;

// 处理/login的post请求
router.post('/login',function(req,res){
    name=req.body.name ;
    pwd=req.body.pwd   ;
    console.log(name+'--'+pwd) ;
    res.status(200).send(name+'--'+pwd) ;
});
/**
 * 测试 ABC的值
 */
router.post("/demo",function (req,res) {
    var A=req.body.A;
    var B=req.body.B;
    var C=req.body.C;
    console.log(A+B+C) ;
    res.status(200).send(A+B+C) ;
});

/**
 * 你自己的代码，不知道你要干啥的
 */
/**-----------------------------**/
//require 引入文件流
var fs =require('fs');

//requeire the neo4j module
var neo4j = require('node-neo4j');

//Define your host and port. This is where your database is running. Here it’s on localhost.
var host = 'localhost',
    port = 7474;

//This is the url where we will POST our data to fire the cypher query. This is specified in Neo4j docs.
var httpUrlForTransaction = 'http://' + host + ':' + port + '/db/data/transaction/commit';

//Let’s define a function which fires the cypher query.
function runCypherQuery(query, params, callback) {
    router.post({
            uri: httpUrlForTransaction,
            json: {statements: [{statement: query, parameters: params}]}
        },
        function (err, res, body) {
            callback(err, body);
        })
}

//Let’s fire some queries as shown below.
runCypherQuery(
    'CREATE (dis:Dis { name: {name}, id: {id}} ) RETURN dis', {
        name: '蔡甸区',
        id: 396860
    }, function (err, resp) {
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
        }
    }
);
/**-----------------------------**/

module.exports = router;
