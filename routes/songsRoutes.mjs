
//import 
import express from 'express';

import Song from '../models/songSchema.mjs'


const router = express.Router();

//test route


//create
router.post('/', async(req, res)=>{
    try {
        //create a varible 
        const newSong = new Song(req.body);
        await newSong.save()
        res.json(newSong)
    } catch (err) {
        console.error(err)
        res.status(500).json({msg:'server error'})
        
    }
})
//read

router.get('/', async(req, res)=>{
    try {
        const allSongs = await Song.find({})

        res.json(allSongs)
    } catch (err) {
        console.error(err)
        res.status(500).json({msg:'server error'})
        
    }
})
//update

router.put('/:id', async(req, res)=>{
    try {
        let updatedSong = await Song.findByIdAndUpdate(reg.params.id, req.body, {new: true})
        res.json(updatedSong)


    } catch (err) {
        console.error(err)
        res.status(500).json({msg:'server error'})
        
    }
})
//delete
router.delete('/:id', async(req, res)=>{
    try {
        
        let deletedSong = await Song.findByIdAndDelete(req.params.id);
        res.json(deletedSong);
    } catch (err) {
        console.error(err)
        res.status(500).json({msg:'server error'})
        
    }
})
// router.get('/', (req, res)=>{
//     res.send(`testing!!!`)
// })



export default router;