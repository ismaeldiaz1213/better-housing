import sqlite3
conn = sqlite3.connect("user_logins.db")
c = conn.cursor()

c.execute("SELECT * FROM user_table")
all_users = c.fetchall()
for user in all_users:
    print(user)

'''
c.execute("""CREATE TABLE user_table (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    net_id text,
    password text,
    gender_preference text,
    bed_time text,
    noise_level INTEGER CHECK (noise_level BETWEEN 1 AND 5),
    tidiness INTEGER CHECK (tidiness BETWEEN 1 AND 5)
)""")

# Time values are now properly quoted as strings with leading zeros for single digits
c.execute("INSERT INTO user_table (net_id, password, gender_preference, bed_time, noise_level, tidiness) VALUES (?, ?, ?, ?, ?, ?)",
         ('es123', 'ilovecats', 'female', '02:00', 3, 4))
c.execute("INSERT INTO user_table (net_id, password, gender_preference, bed_time, noise_level, tidiness) VALUES (?, ?, ?, ?, ?, ?)",
         ('id345', 'iloveamazon', 'male', '00:00', 2, 3))  # using 00:00 for midnight instead of 12:00
c.execute("INSERT INTO user_table (net_id, password, gender_preference, bed_time, noise_level, tidiness) VALUES (?, ?, ?, ?, ?, ?)",
         ('jd123', 'ilovejazz', 'male', '01:00', 1, 1))
c.execute("INSERT INTO user_table (net_id, password, gender_preference, bed_time, noise_level, tidiness) VALUES (?, ?, ?, ?, ?, ?)",
         ('aj414', 'ilovetennis', 'female', '02:00', 3, 3))
c.execute("INSERT INTO user_table (net_id, password, gender_preference, bed_time, noise_level, tidiness) VALUES (?, ?, ?, ?, ?, ?)",
         ('lj342', 'ilovedogs', 'female', '11:00', 4, 5))
'''
conn.commit()
conn.close()



