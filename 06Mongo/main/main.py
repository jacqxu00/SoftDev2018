'''
Wikipedia Movie Data - A database created from scraping american movies from wikipedia
link: https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json

Import Mechanism:
First the mongo server is checked to confirm that the db isn't there, then the locally downloaded json is opened for read permissions
and passed to json.load to transform it into a python dict. The DB is a big list, so it is iterated through and each entry is added to the db.
A counter is included just so that the user can see their progress during upload because it is a large database(~18800 movies)
'''
DEBUG = False

from pymongo import MongoClient
from json import load
from flask import Flask, render_template, request

#DB ----------------------------------------
connection = MongoClient('homer.stuy.edu')
collection = connection.stan_smith_xus #the database
db = collection.movies
#DB ----------------------------------------

#Flask--------------------------------------
app = Flask(__name__)
#Flask--------------------------------------



def return_movies(movies):
    results = ""
    for i in movies:
        results += (i['title'] + " (" + str(i['year']) + ")")
    return results

def get_by_title(name):
    return db.find({"title": name})

def get_by_genre(genre):
    return db.find({"genre": genre})

def get_by_director(director):
    return db.find({"director": director})

def get_by_year(year):
    return db.find({"year": year})

def get_genre_year(genre, year):
    return db.find({'genre': genre, 'year': year})

def get_after_year(year):
    return db.find({ 'year': { '$gt': year }})

def setup_db():
    #if the database hasnt been made or it is empty, then make it and add it
    if not 'stan_smith_xus' in connection.database_names() or db.count() == 0:
        counter = 0
        f = open("movies.json", "r")
        movies = load(f)
        for movie in movies:
            if(counter % 100 == 0):
                print "Adding database...adding movie #{}".format(counter)
            db.insert_one(movie)
            counter += 1
        f.close()
    else: #for debugging, the db is removed if you run the program after making a db on the server
        print "Database is already uploaded"
        if(DEBUG):
            print "removing..."
            connection.drop_database("stan_smith_xus")

@app.route("/", methods=["GET", "POST"])
def root():
    results = ""
    if request.method == "POST":
        if "title" in request.form:
            results = return_movies(get_by_title(request.form['title']))
        elif "genre_only" in request.form:
            results = return_movies(get_by_genre(request.form['genre_only']))
        elif "director" in request.form:
            results = return_movies(get_by_director(request.form['director']))
        elif "year_only" in request.form:
            results = return_movies(get_by_year(int(request.form['year_only'])))
        elif "after_year" in request.form:
            results = return_movies(get_after_year(int(request.form['after_year'])))
        else: #by_genre_year
            results = return_movies(get_genre_year(request.form['genre'], int(request.form['year'])))
    return render_template("form.html", results = results)

if __name__ == "__main__":
    setup_db()
    app.run()

connection.close()
