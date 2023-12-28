exports.contactMail = (data) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Message from Portfolio</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }

    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }

        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="message">Message from Portfolio</div>
            <div class="body">
                <p>First Name: ${data?.name}</p>
                <p>Email: ${data?.email}</p>
                <p>Message: ${data?.message}</p>
            </div>
        </div>
    </body>
    
    </html>`;
};