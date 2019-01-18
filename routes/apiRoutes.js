// const keys = require('../config/keys');
const mongoose = require('mongoose');

// const User = mongoose.model('users');
const Courses = mongoose.model('courses');
const Lessons = mongoose.model('lessons');

const bodyParser = require('body-parser');

const { ObjectID} = require('mongodb');

const _ = require('lodash');
// const express = require('express');
// const bodyParser = require('body-parser');

// const { ObjectID} = require('mongodb');


module.exports = app => {

    // name: String,
    // picture: String,
    // author: String,
    // authorPicture: String,
    // time: String,

    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    //Courses
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    app.post('/api/courses/add', async (req, res) => {

        const body = _.pick(req.body, ['name', 'picture', 'author', 'authorPicture', 'time']);
        
        //create a new course
        const course = await new Courses(body);
        course.save();

        console.log('course', course);
        
        res.send(JSON.stringify(course));

    });

    app.post('/api/courses/update', async (req, res,) => {

        const body = _.pick(req.body, ['courseId', 'name', 'picture', 'author', 'authorPicture', 'time']);

        console.log('body', body);
        
        
        const updatedCourse = await Courses.findOneAndUpdate({
            _id: body.courseId,
        }, {
        $set: { 
            name: body.name,
            picture: body.picture,
            author: body.author,
            authorPicture: body.authorPicture,
            time: body.time
        }
        }, {
            new: true
        })


        console.log('updatedCourse', updatedCourse);
        
        res.send(JSON.stringify(updatedCourse));

    });

    app.post('/api/courses/delete', async (req, res,) => {

        const body = _.pick(req.body, ['courseId']);

        console.log('body', body);
        
        
        const deletedCourse = await Courses.findOneAndDelete({
            _id: body.courseId,
        })


        console.log('deletedCourse', deletedCourse);
        
        res.send(JSON.stringify(deletedCourse));

    });

    app.get('/api/courses/', async (req, res) => {

        try {
            const courses = await  Courses.find({});

            toSend = {
                success: 'true',
                message: '',
                data: courses
            };

        } catch (e) {
            toSend = {
                success: 'false',
                message: e,
                data: [],
            };
        }

        //test delay on real site
        // setTimeout(function() {
        //     res.send(JSON.stringify(toSend));
        //    }, 1500)

        res.send(JSON.stringify(toSend));
        

    })

    app.get('/api/courses/lessons', async (req, res) => {

        const courseId = req.query.courseId;

        try {
            const lessons = await  Lessons.find({courseId});

            toSend = {
                success: 'true',
                message: '',
                data: lessons
            };

        } catch (e) {
            toSend = {
                success: 'false',
                message: e,
                data: [],
            };
        }

        //delay to test loader
        // setTimeout(function() {
        //     res.send(JSON.stringify(toSend));
        //    }, 500)

        res.send(JSON.stringify(toSend));
        

    })


    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    //Lessons
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////

    // courseId: String,
    // name: String,
    // video: String,
    // videoThumbnail: String,
    // lessonNumber: String,
    // worksheet: String,
    // description: String
    
    app.post('/api/lessons/add', async (req, res) => {

        

        const body = _.pick(req.body, ['courseId', 'name', 'video', 'videoThumbnail', 'lessonNumber', 'worksheet', 'description']);
        
        //create a new course
        const lesson = await new Lessons(body);
        lesson.save();

        console.log('lesson', lesson);
        
        res.send(JSON.stringify(lesson));

    });

    app.get('/api/lessons/find',   async (req, res) => {

        const lessonId = req.query.lessonId;
        try {
             //create a new course
            const lesson = await Lessons.findById({_id: lessonId});
            console.log(lesson);
            

            toSend = {
                success: 'true',
                message: '',
                data: lesson,
            };

        } catch (e) {
            toSend = {
                success: 'false',
                message: e,
                data: req.body,
            };
        }

        res.send(JSON.stringify(toSend));

    });

    // app.post('/api/courses/update', async (req, res,) => {

    //     const body = _.pick(req.body, ['courseId', 'name', 'picture', 'author', 'authorPicture', 'time']);

    //     console.log('body', body);
        
        
    //     const updatedCourse = await Courses.findOneAndUpdate({
    //         _id: body.courseId,
    //     }, {
    //     $set: { 
    //         name: body.name,
    //         picture: body.picture,
    //         author: body.author,
    //         authorPicture: body.authorPicture,
    //         time: body.time
    //     }
    //     }, {
    //         new: true
    //     })


    //     console.log('updatedCourse', updatedCourse);
        
    //     res.send(JSON.stringify(updatedCourse));

    // });

    // app.post('/api/courses/delete', async (req, res,) => {

    //     const body = _.pick(req.body, ['courseId']);

    //     console.log('body', body);
        
        
    //     const deletedCourse = await Courses.findOneAndDelete({
    //         _id: body.courseId,
    //     })


    //     console.log('deletedCourse', deletedCourse);
        
    //     res.send(JSON.stringify(deletedCourse));

    // });

    // app.get('/api/courses/', async (req, res) => {

    //     try {
    //         const courses = await  Courses.find({});

    //         toSend = {
    //             success: 'true',
    //             message: '',
    //             data: courses
    //         };

    //     } catch (e) {
    //         toSend = {
    //             success: 'false',
    //             message: e,
    //             data: [],
    //         };
    //     }

    //     res.send(JSON.stringify(toSend));

    // })
    
}