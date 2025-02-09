import sqlite3
conn = sqlite3.connect("rooms_data_db.db")
c = conn.cursor()

c.execute("DROP TABLE rooms_data_tb")
c.execute("""CREATE TABLE rooms_data_tb (
    room_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    floor_number INTEGER,
    bed_a_taken BOOLEAN,
    bed_b_taken BOOLEAN,
    room_type TEXT,
    room_number TEXT,
    room_occupancy TEXT,
    x_coord INTEGER,
    y_coord INTEGER
)""")

c.execute("INSERT INTO rooms_data_tb (floor_number, bed_a_taken, bed_b_taken, room_type, room_number, room_occupancy, x_coord, y_coord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          (1, False, False, "Double", "P-101", "Occupied", 5, 52))
c.execute("INSERT INTO rooms_data_tb (floor_number, bed_a_taken, bed_b_taken, room_type, room_number, room_occupancy, x_coord, y_coord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          (1, False, True, "Double", "P-102", "Occupied", 5, 34))
c.execute("INSERT INTO rooms_data_tb (floor_number, bed_a_taken, bed_b_taken, room_type, room_number, room_occupancy, x_coord, y_coord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          (1, True, False, "Double", "P-103", "Occupied", 20, 52))
c.execute("INSERT INTO rooms_data_tb (floor_number, bed_a_taken, bed_b_taken, room_type, room_number, room_occupancy, x_coord, y_coord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          (1, True, True, "Double", "P-104", "Occupied", 30, 32))
c.execute("INSERT INTO rooms_data_tb (floor_number, bed_a_taken, bed_b_taken, room_type, room_number, room_occupancy, x_coord, y_coord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
          (1, False, False, "Double", "P-105", "Occupied", 36, 53))

          

conn.commit()
conn.close()


