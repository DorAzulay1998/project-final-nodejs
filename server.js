import app from './app.js'
import {port} from './config/index.js'

app.listen(port , async ()=> {
    try {
        console.log(`Server running on http://localhost:${port}`);
    } catch (error) {
        console.error('Error starting the server:', error.message);
        process.exit(1);        
    }
});