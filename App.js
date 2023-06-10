const express = require('express');
const Joi = require('joi')
const app = express()

app.use(express.json())

const courses = [
    {id:1,name:"john",description:"about blah"},
    {id:2,name:"peter",description:"about blah"},
    {id:3,name:"thomas",description:"about blah"}
]

const getAllData = (req,res) => {
    console.log(req.method, req.url,"methods")
    res.send("Home Page")
}
const getAbout = (req,res) => {
    // res.writeHead(200,{'conten-type': "text/html"})
    res.status(200).send("about page")
}
app.get('/',getAllData);
app.get('/about',getAbout)
app.get('/api/v1/posts',(req,res) => {
    res.send(courses)
})
app.get('/api/v1/posts/:id',(req,res) => {
    let data = courses.find(i => i.id === parseInt(req.params.id))
    if(!data) {
        res.status(404).send("object on this id is not existed on server")
    } else {
    res.send(data);
    }
})

app.post('/api/v1/posts',(req,res) => {
    console.log(req)
    
    const {error} = validationRequired(req.body)
    if(error) {
        res.status(400).send("name is required and its should be greater then three");
        
    } 
        const course = {
            id: courses.length + 1,
            name: req.body.name,
        }
        courses.push(course)
        res.send(courses)
    })  

app.put('/api/v1/posts/:id',(req,res) => {
    console.log(req.params.id,"id")
    const data = courses.find(i => i.id ===  parseInt(req.params.id))
    if(!data) {
        res.status(404).send("data is not existed in the db !")
    }

    // const result =  validationRequired(req.body)
    const {error} = validationRequired(req.body)
    // console.log(result)
    if(error) {
        res.status(400).send("validation error !")
    }
   data.name =  req.body.name;
   res.send(data);
})

function validationRequired(data) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(data,schema)
    // console.log(result)

}

app.delete('/api/v1/posts/:id',(req,res) => {
   const data = courses.find(i => i.id === parseInt(req.params.id)) 
   console.log(data)
   if(!data) {
       res.send(404).send("data is not existed in the db")
   }
   const courseData = courses.indexOf(data)
   console.log(courseData,"delete data")
   courses.splice(courseData,1)
   res.send(courses)
})

app.all('*',(req,res) => {
    res.status(400).send('<h1>Response not found</h1>')
})


//PORT
const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`server is listening on port ${port}...`)
})












// Methods of Express
//  app.get
//  app.post
//  app.put
//  app.delete
//  app.use
//  app.listen