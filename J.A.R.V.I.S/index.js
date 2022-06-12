const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 5000

app.use(express.static('public'))

app.listen(PORT,() =>{
console.log(`Server has been started in port ${PORT}`);
})

