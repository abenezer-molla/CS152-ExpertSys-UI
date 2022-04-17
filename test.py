from multiprocessing import Lock
from flask import Flask, render_template, request,  redirect, url_for

import pyswip, ctypes

prologlock = Lock()


app = Flask(__name__)

@app.route('/results',  methods=["GET"])
def handle_x():
    q1 = prolog.query("retractall(ingredient(_))")
    q2 = prolog.query("retractall(time(_))")
    q3 = prolog.query("retractall(calories(_))")

    event_list = []
    for event in q1:
        event_list.append(event)
    for event in q2:
        event_list.append(event)
    for event in q3:
        event_list.append(event)

    return {'event': event_list}


''''''


@app.route('/results', methods = ['POST'])
def results():
    available_ingredients = request.form.getlist('ingredients[]')
    time = request.form['time']
    calories = request.form['calories']

    prolog.assertz('time('+ time +')')
    prolog.assertz('calories('+ calories +')')

    for ing in available_ingredients:
        prolog.assertz('ingredient(' + ing + ')')

    recipes = []
    for soln in prolog.query("recipe(X,Y,Z,K,L)"):
        recipe = {"id":soln["X"], "title":soln["Y"], "url":soln["Z"], "minutes":soln["K"], "calories":soln["L"]}
        recipes.append(recipe)

    return recipes


if __name__ == '__main__':
    app.run(debug=True)