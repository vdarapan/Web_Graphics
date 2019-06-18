<<<<<<< HEAD
from flask import Flask, redirect, render_template, url_for

app = Flask(__name__, template_folder='C:/Users/krish/Desktop/web_graphics/templates', static_folder='C:/Users/krish/Desktop/web_graphics/static')
app.config['DEBUG'] = True
@app.route("/")
def examples():
    return render_template("examples.html")

=======
from flask import Flask, redirect, render_template, url_for

app = Flask(__name__, template_folder='C:/Users/krish/Desktop/web_graphics/templates', static_folder='C:/Users/krish/Desktop/web_graphics/static')
app.config['DEBUG'] = True
@app.route("/")
def examples():
    return render_template("examples.html")

>>>>>>> test
app.run(debug=True, port=5000)

from flask import FLas, redirect, template






@app.route("/demo")
def demo():
    return("render_template("demo,hello"))