module.exports = function(app){
   app.get("/home", function (req, res){
      return res.status(200).json({
         message: 'Olá',
        
      })
   })
   
}