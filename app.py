from flask import Flask, render_template, request, redirect, url_for

from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Recipe(db.Model):
    __tablename__ = "recipe"

    id = db.Column(db.Integer, primary_key=True)
    rice = db.Column(db.String(100), unique=False, nullable=True)
    water = db.Column(db.String(100), unique=False, nullable=True)
    yeast = db.Column(db.String(100), unique=False, nullable=True)
    # flour = db.Column(db.String(100), unique=False, nullable=True)
    submaterials = db.Column(db.String(100), unique=False, nullable=True)
    interval = db.Column(db.String(100), unique=False, nullable=True)
    stage = db.Column(db.String(100), unique=False, nullable=True)




app = Flask(__name__)


@app.route('/')
def calc():
    return render_template("calc.html")

@app.route('/brew')
def brew():
    # staged_recipe = [[{'rice': '1'}, {'water': '5'}, {'yeast': '1'}, {'interval': '1'}], [{'rice': '4'}, {'interval': '4'}]]

    return render_template("brew.html", result=[''])
    # return render_template("brew.html")





@app.route('/result', methods = ['POST'])
# @app.route('/brew', methods = ['POST', 'GET'])
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
                elif materials == 'submaterials':
                    tsubmaterials+=int(value)
                elif materials == 'interval':
                    tinterval+=int(value)

                current_stage.append({materials:value})
            else:
                value = 0
                materials, stage = key.split('#')
                current_stage.append({materials:value})                                     

        staged_recipe.append(current_stage)
        # staged_recipe.append({'total_rice':trice})
        # staged_recipe.append({'total_water':twater})
        # staged_recipe.append({'total_yeast':tyeast})
        # staged_recipe.append({'total_submaterials':tsubmaterials})
        # staged_recipe.append({'total_interval':tinterval})


        print(staged_recipe)

        # print(total_stage)

        if len(total_stage) > 12:
            print('too many stage!!!')

        # return redirect(url_for('brew', result=staged_recipe))
        return render_template("result.html", result=staged_recipe, 
        total_rice = trice,
        total_water = twater,
        total_yeast = tyeast,
        total_submaterials = tsubmaterials,
        total_interval = tinterval,
        )
    else:
        return render_template("result.html", result=[''])



if __name__ == '__main__':
    app.run(debug=True)