from flask import Flask
app = Flask(__name__)

@app.route('/uploadimage')
def uploadimage():
    return {"Hello World":"Isko json bolte"}

if __name__ == '__main__':
    app.run(debug=True)