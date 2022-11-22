from flask import Flask,request
app = Flask(__name__)

@app.route('/uploadimage')
def uploadimage():
    # data = ["jknd","akjsjd"]
    # return data
    imagefile = request.files['imagefile'];
    image_path = "./images/" + imagefile.filename;
    imagefile.save(image_path)
    # Code or function for the uploadimage from the machine learning model

if __name__ == '__main__':
    app.run(debug=True)