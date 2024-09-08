function saveChanges(sectionId) {
    // Get the updated content
    const updatedContent = document.getElementById(sectionId).innerHTML;

    // Create a POST request to send data to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/update-section', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    // Data to send in the request body
    const data = JSON.stringify({
        section: sectionId,
        content: updatedContent
    });

    xhr.send(data);

    // Handle the server response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Section updated successfully.');
        }
    };
}
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

app.post('/update-section', (req, res) => {
    const { section, content } = req.body;

    // Update the resume data in your database or file
    console.log(`Updating section: ${section}`);
    console.log(`New content: ${content}`);

    // For simplicity, just send a success response
    res.status(200).send({ message: 'Section updated successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
