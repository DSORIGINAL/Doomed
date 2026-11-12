from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request, urllib.error

class CORSProxy(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.end_headers()

    def do_POST(self):
        body = self.rfile.read(int(self.headers.get('Content-Length', 0)))
        req = urllib.request.Request('https://googleapis.com' + self.path, data=body, method='POST')
        for k, v in self.headers.items():
            if k.lower() not in ('host', 'origin', 'referer', 'content-length'):
                req.add_header(k, v)
        try:
            with urllib.request.urlopen(req) as resp:
                self.send_response(resp.status)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-Type', resp.headers.get('Content-Type', 'application/json'))
                self.end_headers()
                while chunk := resp.read(4096):
                    self.wfile.write(chunk)
                    self.wfile.flush()
        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(e.read())

HTTPServer(('127.0.0.1', 8080), CORSProxy).serve_forever()
