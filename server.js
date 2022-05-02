const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/", async (req,res) => {

    try {
        res.status(200).json({
            success: true,
            message: req.body
        });
        
    } catch (error) {
        res.status(400).json({ success: false, error: error.massage});
    }

})

app.listen(port, () => {
    console.log("Server is running on port:" + port);
})