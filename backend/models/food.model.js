const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const foodShema= new Schema({
    food:{type:String},
    type:{type:String},
    sus:{type:String},
    extera:{type:String},
});

const Food=mongoose.model('Food',foodShema);
module.exports=Food;