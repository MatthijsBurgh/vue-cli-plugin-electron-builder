const fs = require('fs');
console.log('fs.readFileSync:', fs.readFileSync);
console.log('typeof mockImplementation:', typeof fs.readFileSync.mockImplementation);
