const express = require("express")
const app = express();
const port =process.env.PORT || 2000;


app.set("view engine", "ejs")

app.use(express.static(__dirname));


app.get('/' , (req , res)=>{

   res.render('pages/');

})

app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})
