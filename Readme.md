first go to cloudinary and and copy name,apikey,secret and put them into .env.Now go to mongodbatlas and get the url of your username and password and add remmove the <password> and add your password that is described in database and add this url into .env

uske baad router ko configure kar lenge phle controller me ek file bnayega songController.js or usme do func bnake export kr denge uske baad route folder me ek file bnayenge songRoute.js or usme unhi dono func to import kar lenge or ek router bna lenge or us router ki help se dono func to alag alag url pe route kar denge ek ko /add pe or ek ko /list pe or fir router ko bhi export kar denge or use server.js me jaake import kar lenge or us router ko use kar lenge 
<!-- app.use('/api/song',songRouter) --> is tareeke se 

ab mongodb.js naam ki file bnaayenge config folder me jisme hum apne mongodburl ko connect kar lenge ek function ki help se or us function ko server.js me call kar lenge.

ab config me cloudinary.js name se file bna lenge or usme ek function bnake cloudname,api_key,api_secret ko config karke function ko export kr denge or server.js me just connectDb ke neche call kra denge.

Now create the song model and album model in models folder and export both
ab middleware me multer.js bna lenge or multer ka function bna ke export kr denge or jis route se hum image ya audio add kr rahe hai us route me is middleware ko lga denge
<!-- for ex--songRouter.post('/add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addSong) --> jitne bhi image honge utne object daal do 

ab ek api bnayi songController.js me addSong naam se jiska kaam hai songs ko add karna
ab ek api bnayi songController.js me listSong naam se jiska kaam hai jitne bhi ho unko database se nikalke list krana 
ab ek api bnayi songController.js me removeSong naam se jiska kaam hai songs ko remove karna