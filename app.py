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
def result():
    if request.method == 'POST':
        data = request.form

        print(data)

        current_stage_level = 0
        total_stage = []
        staged_recipe = []
        current_stage = []
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

                current_stage.append({materials:value})
            else:
                value = 0
                materials, stage = key.split('#')
                current_stage.append({materials:value})                                     

        staged_recipe.append(current_stage)


        print(staged_recipe)

        print(total_stage)

        if len(total_stage) > 12:
            print('too many stage!!!')

        # return redirect(url_for('brew', result=staged_recipe))
        return render_template("brew.html", result=staged_recipe)




if __name__ == '__main__':
    app.run(debug=True)