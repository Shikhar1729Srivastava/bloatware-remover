document.getElementById('adbForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const command = document.getElementById('command').value;
    const outputElement = document.getElementById('output');

    try {
        const response = await fetch('/run-adb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ command }),
        });

        const result = await response.json();
        outputElement.textContent = result.output || result.error;
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
});