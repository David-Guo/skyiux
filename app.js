const express = require('express');
const app = express();

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Set the view engine to ejs for template rendering
app.set('view engine', 'ejs');
// Serve static files from the 'public' directory
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.render('todo', { tasks: tasks });
});

app.post('/addtask', (req, res) => {
    const newTask = req.body.newtask;
    tasks.push(newTask);
    res.redirect('/');
});

app.post('/removetask', (req, res) => {
    const completedTasks = req.body.check;
    if (typeof completedTasks === 'string') {
        tasks.splice(tasks.indexOf(completedTasks), 1);
    } else if (typeof completedTasks === 'object') {
        completedTasks.forEach((task) => {
            tasks.splice(tasks.indexOf(task), 1);
        });
    }
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});