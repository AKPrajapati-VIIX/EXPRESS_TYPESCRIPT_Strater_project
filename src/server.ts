import express from 'express';

const app=express();

const PORT:number=400;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("press ctrl+c to stop");
});