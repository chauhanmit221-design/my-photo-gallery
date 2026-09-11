import os
import json
from http.server import SimpleHTTPRequestHandler, HTTPServer

IMAGE_FOLDER = "images"


class MyServer(SimpleHTTPRequestHandler):

    def do_GET(self):

        if self.path == "/api/photos":

            extensions = (".jpg", ".jpeg", ".png", ".gif", ".webp")

            photos = []

            if os.path.exists(IMAGE_FOLDER):
                for filename in os.listdir(IMAGE_FOLDER):
                    if filename.lower().endswith(extensions):
                        photos.append("/images/" + filename)

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            self.wfile.write(json.dumps(photos).encode())

        else:
            super().do_GET()


server = HTTPServer(("localhost", 8000), MyServer)

print("Photo Gallery server is running!")
print("Open: http://localhost:8000")

server.serve_forever()