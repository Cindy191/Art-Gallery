require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
//Collections - (1 Schema = 1 Collection)
const Story = require('./models/storyModel') //practice collection

const GLStories = require('./models/greenLSModel')
const GhibliStories = require('./models/ghibliStoriesModel')
const CaroselStories = require('./models/caroselStoriesModel')
const CoolingStories = require('./models/coolingMSModel')

//middleware
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}));

//routes
app.get('/', (req, res) => {
    res.send("Hello cindy");
})

//stories collection
app.get('/stories', async(req, res) => {
    try{
        const stories = await Story.find({});
        res.status(200).json(stories);
    } catch (error){
        res.status(500).json({message: error.message});
    }
})

app.get('/stories/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const story = await Story.findById(id);
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({message: error.message});   
    }
})

app.post('/stories', async(req, res) => {
    try {
        const story = await Story.create(req.body)
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Green-Lake-Collection
app.get('/Green-Lake-Stories', async(req, res) => {
    try{
        const greenLakeStories = await GLStories.find({});
        res.status(200).json(greenLakeStories);
    } catch (error){
        res.status(500).json({message: error.message});
    }
})

app.post('/Green-Lake-Stories', async(req, res) => {
    try {
        const greenLakeStories = await GLStories.create(req.body)
        res.status(200).json(greenLakeStories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


//Ghibli-House-Stories Collection
app.get('/Ghibli-House-Stories', async(req, res) => {
    try{
        const ghibliStories = await GhibliStories.find({});
        res.status(200).json(ghibliStories);
    } catch (error){
        res.status(500).json({message: error.message});
    }
})

app.post('/Ghibli-House-Stories', async(req, res) => {
    try {
        const ghibliStories = await GhibliStories.create(req.body)
        res.status(200).json(ghibliStories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Carosel-Stories Collection
app.get('/Carosel-Stories', async(req, res) => {
    try{
        const caroselStories = await CaroselStories.find({});
        res.status(200).json(caroselStories);
    } catch (error){
        res.status(500).json({message: error.message});
    }
})

app.post('/Carosel-Stories', async(req, res) => {
    try {
        const caroselStories = await CaroselStories.create(req.body)
        res.status(200).json(caroselStories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// Cooling-Mist-Stories Collection
app.get('/Cooling-Mist-Stories', async(req, res) => {
    try{
        const coolingStories = await CoolingStories.find({});
        res.status(200).json(coolingStories);
    } catch (error){
        res.status(500).json({message: error.message});
    }
})

app.post('/Cooling-Mist-Stories', async(req, res) => {
    try {
        const coolingStories = await CoolingStories.create(req.body)
        res.status(200).json(coolingStories);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})





mongoose.connect(process.env.DATABASE_URL)
.then(()=> {
    app.listen(4000, ()=> {
        console.log("Listening on port 4000");
    })
    console.log("Connected to Mongo Database.");
})
.catch((error)=> {
    console.log(error);
})

