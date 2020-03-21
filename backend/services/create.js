
let connection=require("../database/connect");
module.exports=class routeservices{
    async getdetails() {
        try {
            let result = await con('select * from emp1');
            return result;
        } catch (error) {
            console.log("error");
        }
    }
    
    async getbyfirstname(firstname) {
        try {
            let result = await con('select * from emp1 where = $1', [firstname]);
            return result;
        } catch (error) {
            console.log("error");
        }
    }
    async postmethod(data){
        try{
            let result=await con('insert into emp1 values ($1,$2,$3,$4,$5)',[data.firstname,data.lastname,data.address,data.city,data.state]);
            return result;
        }
        catch(error){
            console.log("error");
        }
    }
    async updatedetails(data){
        try{
            if(data.firstname!==undefined){
                let result;
                    if(data.lastname!=undefined){
                        result=await con('update emp1 set lastname=$1 where firstname=$2',[data.lastname],[data.firstname]);
                    }
                    if(data.address!=undefined){
                        result=await con('update emp1 set address=$1 where firstname=$2',[data.address],[data.firstname]);
                    }
                    if(data.city!=undefined){
                        result=await con('update emp1 set city=$1 where firstname=$2',[data.city],[data.firstname]);
                    }
                    if(data.state!=undefined){
                        result=await con('update emp1 set state=$1 where firstname=$2',[data.state],[data.firstname]);
                    }
                    return result;
                }
                else{
                    console.log("incorrect data");
                }
            }
            catch(error){
                console.log("error");
            }
        }
    }
