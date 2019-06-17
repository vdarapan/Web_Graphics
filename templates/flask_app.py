from flask import Flask, redirect, render_template, url_for

app = Flask(__name__, template_folder='C:/Users/krish/Desktop/web_graphics/templates', static_folder='C:/Users/krish/Desktop/web_graphics/static')
app.config['DEBUG'] = True
@app.route("/")
def examples():
    return render_template("examples.html")

app.run(debug=True, port=5000)