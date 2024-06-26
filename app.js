const express = require('express')
const app = express()
const multer = require('multer')
const bodyParser = require('body-parser');
const path  = require('path')
const methodoverride = require('method-override')
const mongoose = require('mongoose')
const Whistleblower = require('./models/whistleblower');
const Product = require('./models/product');


mongoose.connect('mongodb://127.0.0.1:27017/food',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
{
    console.log(" mongo connection open");
})
.catch(err=>{
    console.log("oh no error mongo connection error");
    console.log(err);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodoverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/user', (req, res) => {
    res.render("user")
})
app.get('/admin', (req, res) => {
    res.render("admin")
})

app.get('/analytics', (req, res) => {
    res.render('analytics')
})

app.get('/addproducts', (req, res) => {
    res.render('index');
  });
  
  app.post('/products', async (req, res) => {
    try {
      const {
        name, description, producerName, productionDate,
        batchId, textureevaluation, ingredientsList, flavorAssessment,
        oilcontent, thickness
        } = req.body;
        
        let qualityDecision = "Reject"; // Default decision
        if (textureevaluation >= 50 &&  oilcontent <= 50 && thickness <= 50) {
            qualityDecision = "Approve";
        }
  
      const newProduct = new Product({
        name,
        description,
        producerName,
        productionDate,
        batchId,
        textureevaluation,
        ingredientsList, // If ingredientsList is comma-separated
        flavorAssessment,
        oilcontent,
          thickness,
        qualityDecision
      });
  
      await newProduct.save();
  
      res.redirect(`/lab?productId=${newProduct._id}`)
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  });


  app.get('/lab', async (req, res) => {
    try {
        const productId = req.query.productId;

        // Fetch the product details from the database using the productId
        const product = await Product.findById(productId);

        // Simulate evaluation process
        const { textureevaluation, flavorAssessment, oilcontent, thickness } = product;

        // Render the results page with the evaluation metrics
        res.render('labResults', {
            textureevaluation,
            flavorAssessment,
            oilcontent,
            thickness
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


// app.get('/whistleblower', (req, res) => {
//     res.render('wbform');
//   });
  
//   app.post('/submit', async (req, res) => {
//     const { name, report } = req.body;
  
//     // Create a new Whistleblower instance and save to MongoDB
//     const newwhistleblower = new Whistleblower({ encryptedName: name, encryptedReport: report });
//     await newwhistleblower.save();
  
//     res.json({ message: 'Report submitted successfully!' });
//   });
  
//   app.get('/admin', async (req, res) => {
//     try {
//       // Retrieve all whistleblower data, including encrypted names
//       const whistleblowerData = await Whistleblower.find();
      
//       // Decrypt whistleblower names before rendering the admin dashboard
//       const decryptedData = await Promise.all(whistleblowerData.map(async entry => ({
//         name: await entry.decryptName(),
//         report: entry.encryptedReport,
//       })));
  
//       res.render('admin_dashboard', { whistleblowerData: decryptedData });
//     } catch (error) {
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });



app.listen(3000,()=>{
    console.log('app is listiening on port 3000');
})