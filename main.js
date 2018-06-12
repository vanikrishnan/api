'use strict'
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
const studentList=[{
    id:1,
    name:"abc",
    age:20,
    dept:"cs"
},{
    id:2,
    name:"mno",
    age:23,
    dept:"it"
},{ id:3,
name:"pqr",
age:20,
dept:"cs"},{
    id:4,
    name:"xyz",
    age:22,
    dept:"it"
}]
app.get("/api/student",(req,res)=>{
    res.json(studentList);
});

app.post("/api/student",(req,res)=>{
const newstu={
    name:req.body.name,
    age:req.body.age,
    dept:req.body.dept,
    id:studentList.length+1
};
studentList.push(newstu);
res.json(newstu.id);

res.sendStatus(201);
});

app.delete("/api/student/:id",(req,res)=>{
const idToBeDeleted=parseInt(req.params.id);
const findIdToBeDeleted=studentList.findIndex(student=>student.id === idToBeDeleted);
studentList.splice(findIdToBeDeleted,1);
res.json(idToBeDeleted);
});

app.get("/api/student/:id",(req,res)=>{
    const idToBeFetched=parseInt(req.params.id);
    const findIdToBeFetched=studentList.find(student=>student.id === idToBeFetched);
    res.json(findIdToBeFetched);
    });
    


app.listen(4000);


