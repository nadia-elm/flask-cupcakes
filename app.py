"""Flask app for Cupcakes"""

from flask import Flask,request,redirect,render_template,flash,jsonify
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db,Cupcake

app = Flask(__name__)
app.app_context().push()

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:secret@localhost:5432/cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY']='SECRET'
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


connect_db(app)
db.create_all()

@app.route('/')
def home_page():
    cupcakes = Cupcake.query.all()
    return render_template('index.html', cupcakes = cupcakes)

@app.route('/api/cupcakes')
def get_cupcakes():
    all_cupcakes = [ cupcake.to_dict() for cupcake in Cupcake.query.all()]
    # this makes a list of dicts of each cupcake
    # print(all_cupcakes)
    return jsonify(cupcakes = all_cupcakes)

@app.route('/api/cupcakes/<int:id>')
def get_single_cupcake(id):
    cupcake = Cupcake.query.get_or_404(id)
    cupcake = cupcake.to_dict()
    # return cupcake
    return jsonify(cupcake = cupcake)

@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():
    cupcake = Cupcake(flavor=request.json["flavor"],size= request.json["size"],rating= request.json["rating"], image= request.json["image"]or None)
    db.session.add(cupcake)
    db.session.commit()
    response = jsonify(cupcake= cupcake.to_dict())
    return (response, 201)

@app.route('/api/cupcakes/<int:id>', methods=['PATCH'])
def update_cupcakes(id):
        cupcake = Cupcake.query.get_or_404(id)
        cupcake.flavor=request.json.get('flavor', cupcake.flavor)
        cupcake.size=request.json.get('size', cupcake.size)
        cupcake.rating=request.json.get('rating', cupcake.rating)
        cupcake.image=request.json.get('image', cupcake.image)
        db.session.commit()
        return jsonify(cupcake = cupcake.to_dict())

@app.route('/api/cupcakes/<int:id>', methods=['DELETE'])
def delete_cupcake(id):
    cupcake = Cupcake.query.get_or_404(id)
    db.session.delete(cupcake)
    db.session.commit()
    return jsonify(message="deleted")

    






