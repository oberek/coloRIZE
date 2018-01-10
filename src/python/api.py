from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

import tkinter as tk
from tkinter import filedialog

import time

root = tk.Tk()
root.withdraw()


app = Flask(__name__)
CORS(app, origins='http://localhost:9080')
api = Api(app)

@api.resource('/')
class HelloWorld(Resource):
    def get(self):
        name = filedialog.askopenfilename(filetypes=(("Image File", "*.jpg"),("Video File", "*.mp4")), title="Choose a file.")
        print(name)
        # pretend that it's processing something here
        time.sleep(3)
        return {'hello': 'world'}

if __name__ == "__main__":
    app.run()
