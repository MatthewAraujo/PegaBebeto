from sqlite3 import Cursor
from mysql import connector
from flask import Flask
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/*": {"origins": ""}})

cnx = connector.connect(user='root', password='root', host='127.0.0.1', database='exemple')
cursor = cnx.cursor()
               

@app.route('/')
def hello():
    return 'Ainda cria!'

@app.route('/search-measurement-clima')
def search_measurement_clima():
    sql = 'SELECT * FROM clima ORDER BY clima_ID desc limit 1'
    cursor.execute(sql)
    result = cursor.fetchall()

    Data = []

    cursor.execute(sql)
    row_headers = [x[0] for x in cursor.description]
    rv = cursor.fetchall()
    cnx.commit()

    for result in rv:
        Data.append(dict(zip(row_headers, result)))

    #result = json.dumps([{'id': 1, 'name': 'teste'}]);
    return Data

@app.route('/search-measurement-acelerometro')
def search_measurement_acelerometro():
    sql = 'SELECT * FROM Acelerometro ORDER BY Acelerometro_ID desc limit 1'
    cursor.execute(sql)
    result = cursor.fetchall()

    Data = []

    cursor.execute(sql)
    row_headers = [x[0] for x in cursor.description]
    rv = cursor.fetchall()
    cnx.commit()

    for result in rv:
        Data.append(dict(zip(row_headers, result)))

    #result = json.dumps([{'id': 1, 'name': 'teste'}]);
    return Data


@app.route('/search-measurement-gases')
def search_measurement_gases():
    sql = 'SELECT * FROM gases ORDER BY Gases_ID desc limit 1'
    cursor.execute(sql)
    result = cursor.fetchall()

    Data = []

    cursor.execute(sql)
    row_headers = [x[0] for x in cursor.description]
    rv = cursor.fetchall()
    cnx.commit()

    for result in rv:
        Data.append(dict(zip(row_headers, result)))

    #result = json.dumps([{'id': 1, 'name': 'teste'}]);
    return Data

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=True)

#cnx.close() 
