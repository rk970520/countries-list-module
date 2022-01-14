export const Greeter = (name: string) => `Hello ${name}`; 

app.listen(3000,function(err,data){
    if(err) throw err;
    console.log("Server started at port 3000");
});