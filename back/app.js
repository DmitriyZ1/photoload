const http = require('http'); 
const fs = require('fs');
const path =  require('path');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('server work');
    if (req.method == 'GET') {
        res.writeHead(200, { "Content-Type": "application/json" });
        let filepic = fs.readdirSync('../foto/public/photo');
        let dlina = filepic.length;
        let kolvo = Math.floor(dlina / 4);
        let ostatok = dlina % 4;
        
        if(req.url == '/1'){
            let min = 0;
            let max = kolvo;
            filepic = filepic.slice(min,max);
            res.end(JSON.stringify(filepic));
        }
        if(req.url == '/2'){
            let min = kolvo;
            let max = kolvo * 2;
            filepic = filepic.slice(min,max); 
            res.end(JSON.stringify(filepic));
        }
        if(req.url == '/3'){
            let min = kolvo * 2;
            let max = kolvo * 3;
            filepic = filepic.slice(min,max);
            res.end(JSON.stringify(filepic));
        }
        if(req.url == '/4'){
            let min = kolvo * 3;
            let max = kolvo * 4;
            if(ostatok) {max = max + ostatok}
            filepic = filepic.slice(min,max);
            res.end(JSON.stringify(filepic));
        }
        if(req.url == '/slider'){
            
            res.end(JSON.stringify(filepic));
        }
    }

}).listen(3500);