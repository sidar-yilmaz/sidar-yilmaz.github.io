import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');
const base=process.env.NEXT_PUBLIC_BASE_PATH||'';
const host=process.env.HOST||'127.0.0.1';
const port=Number(process.env.PORT)||3000;
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.gif':'image/gif','.mp4':'video/mp4','.pdf':'application/pdf','.woff2':'font/woff2'};
http.createServer((req,res)=>{
 try{
 let url=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 if(base && !url.startsWith(base+'/') && url!==base){res.writeHead(404);res.end('Not found');return;}
 if(base)url=url.slice(base.length)||'/';
 let target=path.resolve(root,'.'+url);
 if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
 if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
 if(!fs.existsSync(target)){res.writeHead(404);res.end('Not found');return;}
 res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});fs.createReadStream(target).pipe(res);
 }catch{res.writeHead(400);res.end('Bad request');}
}).listen(port,host,()=>console.log(`Static preview: http://${host}:${port}${base}/`));
