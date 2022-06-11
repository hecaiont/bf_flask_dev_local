from flask import Flask, jsonify, render_template, request, redirect, url_for

from utils.zodiac import Zodiac

from time import localtime, time

from models import db
from models import Recipe

import os


app = Flask(__name__)



def commit_recipe(rice, water, yeast, submaterials, interval, stage, brewer):
    recipe = Recipe(rice=rice, water=water, yeast=yeast, submaterials=submaterials,  interval=interval, stage=stage, brewer=brewer)
    db.session.add(recipe)
    db.session.commit()
    # recipe_all = Recipe.query.all()
    # print(recipe_all)




@app.route('/')
def calc():
    return render_template("calc.html", )

@app.route('/brew')
def brew():
    return render_template("brew.html", result=[''], )



# # for ajax zodiac clock; base.html
# @app.route('/update', methods=['POST'])
# def update():
#     tm = localtime(time())
#     tz = Zodiac(tm.tm_year, tm.tm_mon, tm.tm_mday).display_k()
#     return jsonify({'time': tz})

@app.route('/zodiac')
def zodiac():
    tm = localtime(time())
    tz = Zodiac(tm.tm_year, tm.tm_mon, tm.tm_mday).display_k() 
    return render_template("zodiac.html", zodiac=tz)




@app.route('/result', methods = ['POST'])
def result():
    if request.method == 'POST':
        data = request.form

        print(data)

        current_stage_level = 0
        total_stage = []
        staged_recipe = []
        current_stage = []
        
        trice = 0
        twater = 0
        tyeast = 0
        tsubmaterials = 0
        tinterval = 0

        for key, value in data.items():            
            if value != '':
                materials, stage = key.split('#')
                if current_stage_level == 0: 
                    current_stage_level+=1
                    total_stage.append(current_stage_level)
                    current_stage = []

                elif total_stage[-1] != int(stage):
                    staged_recipe.append(current_stage)
                    current_stage_level+=1
                    total_stage.append(current_stage_level)
                    current_stage = []

                if materials == 'rice':
                    trice+=int(value)
                elif materials == 'water':
                    twater+=int(value)
                elif materials == 'yeast':
                    tyeast+=int(value)
                elif materials == 'subMaterials':
                    tsubmaterials+=int(value)
                elif materials == 'interval':
                    tinterval+=int(value)

                current_stage.append({materials:value})
            else:
                value = 0
                materials, stage = key.split('#')
                current_stage.append({materials:value})                                     

        staged_recipe.append(current_stage)

        print(staged_recipe)

        if len(total_stage) > 12:
            print('too many stage!!!')

        

        return render_template("result.html", result=staged_recipe, 
        total_rice = trice,
        total_water = twater,
        total_yeast = tyeast,
        total_submaterials = tsubmaterials,
        total_interval = tinterval,
        )
    else:
        return render_template("result.html", result=[''], )



    
    




basdir = os.path.abspath(os.path.dirname(__file__))
dbfile = os.path.join(basdir, 'db.sqlite')


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbfile
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'testrandomstringforcho'

db.init_app(app)
db.app = app
db.create_all()




if __name__ == '__main__':
    app.run(debug=True)