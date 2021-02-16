#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import psycopg2

print "Content-Type: application/json"
print


conn = psycopg2.connect(
    host="127.0.0.1",
    port="5433",
    database="ManagementBNTL",
    user="postgres",
    password="Mapiusers01!");

cur = conn.cursor()

cur.execute('SELECT * FROM public.lutprojectstatus')

db_version = cur.fetchall()
print(json.dumps(db_version))
cur.close()




