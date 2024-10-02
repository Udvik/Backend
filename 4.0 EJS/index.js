import express from "express";

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    let type = "a weekday";
    let adv = "Work hard";

    if(dayOfWeek == 0 || dayOfWeek == 6){
        type = "a weekend";
        adv = "Relax and enjoy the day off";
    }

    res.render('index.ejs', {
        dayType: type,
        advice:adv,
    });


});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});