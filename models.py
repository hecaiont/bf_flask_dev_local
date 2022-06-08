from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Recipe(db.Model):
    __tablename__ = "recipe"

    id = db.Column(db.Integer, primary_key=True)
    rice = db.Column(db.String(100), unique=False, nullable=True)
    water = db.Column(db.String(100), unique=False, nullable=True)
    yeast = db.Column(db.String(100), unique=False, nullable=True)
    submaterials = db.Column(db.String(100), unique=False, nullable=True)
    interval = db.Column(db.String(100), unique=False, nullable=True)
    stage = db.Column(db.String(100), unique=False, nullable=True)





class User(db.Model):
    __tablename__ = "brewer"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    recipe = db.relationship('Recipe', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username