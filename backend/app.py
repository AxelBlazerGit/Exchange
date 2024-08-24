from flask import Flask, request, jsonify, redirect, url_for
import sqlite3
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'


def connect_db():
    return sqlite3.connect('unihub.db')  # Changed to unihub2.db

def convert_to_binary_data(file):
    return file.read()

# /sell route to add a product and redirect to /listings


@app.route('/sell', methods=['POST'])
@cross_origin()
def sell_product():
    email = request.form.get('email')
    title = request.form.get('title')
    category = request.form.get('category')
    price = float(request.form.get('price'))
    description = request.form.get('description')
    image = request.files.get('image')

    if not all([email, title, category, price, description, image]):
        return jsonify({'error': 'Missing data'}), 400

    image_data = convert_to_binary_data(image)

    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        INSERT INTO listings (email, title, category, description, img, value)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (email, title, category, description, image_data, price))

    conn.commit()
    conn.close()

    return redirect(url_for('view_listings', email=email))

# /listings route to view all listings of a signed-in user
@app.route('/listings', methods=['GET'])
@cross_origin()
def view_listings():
    email = request.args.get('email')

    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT rowid, title, category, description, img, value FROM listings WHERE email = ?
    ''', (email,))

    listings = cursor.fetchall()

    conn.close()

    result = []
    for listing in listings:
        result.append({
            'id': listing[0],
            'title': listing[1],
            'category': listing[2],
            'description': listing[3],
            'image': listing[4],  # If needed, encode this to base64 for easier frontend handling
            'price': listing[5]
        })

    return jsonify(result), 200

# /orders route to view orders of a signed-in user
@app.route('/orders', methods=['GET'])
@cross_origin()
def view_orders():
    email = request.args.get('email')

    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT product_title, product_description, img, value FROM past_orders WHERE email = ?
    ''', (email,))

    orders = cursor.fetchall()

    conn.close()

    result = []
    for order in orders:
        result.append({
            'product_title': order[0],
            'product_description': order[1],
            'image': order[2],  # If needed, encode this to base64 for easier frontend handling
            'price': order[3]
        })

    return jsonify(result), 200

# /products/:id route to get product details by ID
@app.route('/products/<int:id>', methods=['GET'])
@cross_origin()
def get_product_by_id(id):
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT title, category, description, img, value FROM listings WHERE rowid = ?
    ''', (id,))

    product = cursor.fetchone()

    conn.close()

    if product:
        result = {
            'title': product[0],
            'category': product[1],
            'description': product[2],
            'image': product[3],  # If needed, encode this to base64 for easier frontend handling
            'price': product[4]
        }
        return jsonify(result), 200
    else:
        return jsonify({'error': 'Product not found'}), 404

@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT * FROM profiles WHERE email = ? AND password = ?
    ''', (email, password))
    user = cursor.fetchone()

    if user:
        message = 'Login successful!'
    else:
        message = 'Invalid credentials'

    conn.close()
    return jsonify({'message': message}), 200


@app.route('/signup', methods=['POST'])
@cross_origin()
def sign_up():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    institution = data.get('institution')
    city = data.get('place')

    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute('''
        INSERT INTO profiles (email, name, password, institution, city)
        VALUES (?, ?, ?, ?, ?)
    ''', (email, name, password, institution, city))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Signup successful!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
