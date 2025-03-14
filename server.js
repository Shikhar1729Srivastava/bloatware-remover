const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

const adbPath = 'C:\\Android\\platform-tools\\adb.exe';

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(__dirname)); // Serve static files from the current directory

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); 

// Handle ADB command execution
app.post('/run-adb', (req, res) => {
    const { command } = req.body; // Get the command from the request body

    
    console.log(`Executing command: ${adbPath} ${command}`); // Log the full command

    // Execute the command using child_process
    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.json({ error: error.message });
        }
        if (stderr) {
            return res.json({ error: stderr });
        }
        res.json({ output: stdout });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:3000`);
});