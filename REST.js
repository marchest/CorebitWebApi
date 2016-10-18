
var mysql = require("mysql");
function REST_ROUTER(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection) {
	
 	router.post("/tasks",function(req,res){
        var query = "INSERT INTO ??(??,??,??,??,??,??) VALUES (?,?,?,?,?,?)";
        var table = ["tasks","id","title","description","project_id","due_date","status",req.body.id,req.body.title,req.body.description,req.body.project_id,req.body.due_date,req.body.status];
        query = mysql.format(query,table);
        console.log("girdi");
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            }
             else {
                res.json({"Error" : false, "Message" : "Task Added"});
            }
        });
    });



 router.get("/getTasks",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["tasks"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Tasks" : rows});
            }
        });
    });

}

  





module.exports = REST_ROUTER;