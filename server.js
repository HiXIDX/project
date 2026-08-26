const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({ message: "สวัสดีจากเซิฟเวอร์ของคุณ!" });
});

app.listen(PORT, () => {
    console.log(`เซิฟเวอร์รันที่พอร์ต ${PORT}`);
});