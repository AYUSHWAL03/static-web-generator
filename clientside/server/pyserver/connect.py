from flask import Flask,request,render_template
import pickle


app = Flask(__name__)



@app.route('/uploadimage',methods=['GET','POST'])
def uploadimage():
    data = ["jknd","akjsjd"]
    return data
    # return(request.files['imageUpload'])
    # image_path = "./images/" + imagefile.filename;
    # imagefile.save(image_path)
    
    # Code or function for the uploadimage from the machine learning model
@app.route('/uploaddescription',methods=['POST','GET'])
def uploaddescription(): 
    with open('model_pickle','rb') as f:
        mp = pickle.load(f)
        return mp


if __name__ == '__main__':
    app.run(debug=True)