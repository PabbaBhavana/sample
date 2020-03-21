
const express=require('express');
const con=require('../database/connect');
const app=express();
const routeservice=require('../services/create');
const route=express.Router();

route.use(express.json());


route.get('/getdetails',async(req,res)=>{
    try{
    let result=await routeservice.getdetails();
        res.send(result);
    }
    catch(error)
    {
        console.log("error");
    }
});
route.get("/getbyname", async (req,res)=>{
    try {
        let firstname= req.params.firstname;
        let callService = new routeService();
        let result = await callService.getbyfirstname(firstname);
        res.send(result);
    } catch (error) {
        console.log("error")
    }
});
route.delete('/delete',(req,res)=>{
    con.query('DELETE FROM emp1 WHERE emp1.firstname = ?',[req.params.firstname],(err,rows,fields)=>{
        if(!err)
        res.send('Deleted successfully');
        else
        console.log(err);
    })
});
  route.post('/insert',async(req,res)=>{
      try{
          let firstname=req.body.firstname;
          let lastname=req.body.lastname;
          let address=req.body.address;
          let city=req.body.city;
          let state=req.body.state;
          data={
              firstname:firstname,
              lastname: lastname,
              address: address,
              city:city,
              state:state
          }
          console.log(data);
          var service=new routeService();
          var result=await service.postmethod(arr);
          if(!error){
              res.send("inserted");
          }
      }
      catch(error){
          console.log("error");
      }
  });
   route.put('/update',async(req,res)=>{
    try{
        let id=req.body.id;
        let firstname=req.body.firstname;
        let lastname=req.body.lastname;
        let address=req.body.address;
        let city=req.body.city;
        let state=req.body.state;
        data={
            firstname:firstname,
            lastname: lastname,
            address: address,
            city:city,
            state:state
        }
        var service=new routeservice();
        var result=await service.updatedetails(data);
        console.log(result);
        if(!error){
            res.send("inserted");
        }
    }
    catch(error){
        console.log("error");
    }
});
  module.exports=route;