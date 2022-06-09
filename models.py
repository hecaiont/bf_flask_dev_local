from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.sql import func

db = SQLAlchemy()

class Recipe(db.Model):
    __tablename__ = "recipe"

    recipe_id = db.Column(db.Integer , primary_key=True , autoincrement=True)
    rice = db.Column(db.String(100), unique=False, nullable=True)
    water = db.Column(db.String(100), unique=False, nullable=True)
    yeast = db.Column(db.String(100), unique=False, nullable=True)
    submaterials = db.Column(db.String(100), unique=False, nullable=True)
    interval = db.Column(db.String(100), unique=False, nullable=True)
    stage = db.Column(db.String(100), unique=False, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    brewer = db.Column(db.Integer, db.ForeignKey('brewer.id'))




class User(db.Model):
    __tablename__ = "brewer"

    id = db.Column(db.Integer , primary_key=True , autoincrement=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    recipe = db.relationship('Recipe')

    def __repr__(self):
        return '<User %r>' % self.username


# inital admin user
# INSERT INTO brewer (username, email) VALUES('cho_admin', 'admin@admin.com');