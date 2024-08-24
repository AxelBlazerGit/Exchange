from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Initialize the database
def init_db():
    with sqlite3.connect('database.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                category TEXT NOT NULL,
                price REAL NOT NULL,
                description TEXT NOT NULL
            )
        ''')
        conn.commit()

# Route to add a new product
@app.route('/api/products', methods=['POST'])
def add_product():
    data = request.json
    name = data['name']
    category = data['category']
    price = data['price']
    description = data['description']

    try:
        with sqlite3.connect('users.db') as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO products (name, category, price, description)
                VALUES (?, ?, ?, ?)
            ''', (name, category, price, description))
            conn.commit()
            return jsonify({'message': 'Product added successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Start the server
if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(debug=True)
