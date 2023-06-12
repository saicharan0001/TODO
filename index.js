const express=require('express');
const port=8000;
const path=require('path');
const app = express();
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname + '/assets'));
const arr=[];
app.get('/',(req,res)=>{
    return res.render('home',{
        title:'TODO LIST',
        lists:arr
    });
})

app.post('/addwork',(req,res)=>{
   arr.push(req.body);
   return res.redirect('back');
})

app.get('/delete',(req,res)=>{
let i = (req.query.i);
arr.splice(i,i+1);
return res.redirect('back');
})

app.listen(port,(err)=>{
if(err) {
    console.log('error');
    return;
}
console.log('server is set');
})