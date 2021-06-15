var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopphi');


var products = [
    new Product({
    imagePath: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/60BA/production/_108626742_mediaitem108626741.jpg',
    title: 'T-rex 1:1',
    description: 'From Jurassic',
    selldescription: 'Hello test1',
    type: 'meat',
    tag: 'Dinosaur',
    price: 999
}),
new Product({
    imagePath: 'https://cdn.hipwallpaper.com/i/68/3/H1Y2Qm.jpg',
    title: 'Spinosaurus 1:1',
    description: 'T-rex`s natural enemies',
    selldescription: 'Hello test2',
    type: 'meat',
    tag: 'Dinosaur',
    price: 888
}),
new Product({
    imagePath: 'https://i.pinimg.com/originals/cd/2c/bd/cd2cbd5b3c86b8ff89ab727a1ade77be.jpg',
    title: 'Stegosaurus',
    description: 'I dont know XD',
    selldescription: 'Hello test3',
    type: 'herb',
    tag: 'Dinosaur',
    price: 777
}),
new Product({
    imagePath: 'https://i.natgeofe.com/n/b96b572c-98e2-4ec2-a714-08a6b95cf646/triceratopshorridus_hexdcb.jpg',
    title: 'Triceratops horridus',
    description: 'Love Vegetables',
    selldescription: 'Hello test4',
    type: 'herb',
    tag: 'Dinosaur',
    price: 666
}),
new Product({
    imagePath: 'https://wallpaperaccess.com/full/4243041.jpg',
    title: 'Brachiosaurus',
    description: 'Good bois!',
    selldescription: 'Hello test5',
    type: 'herb',
    tag: 'Dinosaur',
    price: 555
}),
new Product({
    imagePath: 'https://img.particlenews.com/img/id/0W3gr0_0ZJusayP00?type=thumbnail_1600x1200',
    title: 'Blue Raptor',
    description: 'Very Rare!',
    selldescription: 'Hello test6',
    type: 'meat',
    tag: 'Dinosaur',
    price: 15555
}),

new Product({
    imagePath: 'https://i1.wp.com/www.itmoamun.com/wp-content/uploads/2021/02/Hj98N7MkpaS6UyYWiCbb5M-1200-80.jpg?fit=970%2C546&ssl=1',
    title: 'Good Meat!',
    description: 'Delicious!!!',
    selldescription: 'Hello test7',
    type: 'meat',
    tag: 'Food',
    price: 10
}),

new Product({
    imagePath: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KW2B5W5&Format=_ML160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=toysrus090-20&language=en_US',
    title: 'T-rex cute toy',
    description: 'nice looking',
    selldescription: 'Hello test8',
    type: 'meat',
    tag: 'Toy',
    price: 20
})

];

var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done== products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}