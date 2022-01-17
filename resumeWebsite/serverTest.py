from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

server_address = ('127.0.0.1', 80)    
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
os.chdir('C:/Users/MSI/Desktop/resumeWebsite/scr/')  # optional
print('Running server...')
httpd.serve_forever()
