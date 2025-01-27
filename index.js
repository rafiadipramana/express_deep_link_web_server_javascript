// TODO 1: Prepare assetlinks.json file
/// Complete the assetlinks.json file with the following content:
/*
    [
        {
            "relation": ["delegate_permission/common.handle_all_urls"],
            "target": {
            "namespace": "android_app",
            "package_name": "YOUR_APPLICATION_ID",
            "sha256_cert_fingerprints": ["YOUR_APP_CERT_FINGERPRINT"]
            }
        }
    ]
*/

// TODO 2: Configure the express server
import express from 'express';

// TODO 3: Pointing the server to the assetlinks.json file
/// Import join method from path module
import { join } from 'path';

/// Import readFileSync method from fs module
import { readFileSync } from 'fs';

/// Create an express server instance
const app = express();

/// '/' route to check if the server is running
app.get('/', (_, res) => {
    res.send('Deep Link Web Server is running');
});

/// '/.well-known/assetlinks.json' route to serve the assetlinks.json file
app.get('/.well-known/assetlinks.json', (_, res) => {
    try {
        const filePath = join(process.cwd(), 'assetlinks.json');
        const data = readFileSync(filePath, 'utf8');
        
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).send(data);
    } catch (err) {
        console.error('Error reading assetlinks.json:', err);
        return res.status(500).json({ 
            error: 'Failed to read assetlinks.json file' 
        });
    }
});

/// Start the server
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

// TODO 4: Prepare vercel.json file
/// Complete the vercel.json file with the following content:
/*
    {
        "version": 2,
        "builds": [
            {
            "src": "index.js",
            "use": "@vercel/node"
            }
        ],
        "routes": [
            {
            "src": "/(.*)",
            "dest": "index.js"
            }
        ]
    }
*/
/// Deploy the server to Vercel using the Vercel CLI
/// Install the Vercel CLI
/// Run the following command in the terminal:
/// npm install -g vercel

/// Login to Vercel
/// Run the following command in the terminal:
/// vercel login

/// Deploy the server to Vercel
/// Run the following command in the terminal:
/// vercel