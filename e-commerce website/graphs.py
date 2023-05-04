import pandas as pd

import matplotlib.pyplot as plt

import seaborn as sns

import psycopg2

 

conn = psycopg2.connect(

                        host="localhost",

                        database="postgres",

                        port=5432,

                        user="postgres",

                        password="postgresql"

                    )

cur = conn.cursor()

cur.execute('SELECT * FROM public."ProjectTable"')

rows = cur.fetchall()

 

project = pd.DataFrame(rows, columns=['Name','Product_ID','Product_Type','Contact', 'Product_MRP','Location'])

 

x=project['Product_ID']

y=project['Product_MRP']

plt.figure()

plt.scatter(x,y)

plt.title("Price vs Product ID")

plt.xlabel=("Product_ID")

plt.ylabel=("Product_MRP")

plt.savefig("E:\\web3\\public\\data_graphs\\scatter.png")

 

plt.figure(figsize=(30,6))

sns.countplot(x='Product_ID', data=project)

plt.savefig("E:\\web3\\public\\data_graphs\\bar1.png")

 

data = project.loc[:, ["Product_Type", "Location"]]

counts = data.groupby(["Product_Type", "Location"]).size().reset_index(name="Frequency")

pivot = counts.pivot(index="Location", columns="Product_Type", values="Frequency")

plt.figure()

plt.title("Product type trending in each Location")

pivot.plot(kind="bar", figsize=(20, 10))  

plt.savefig("E:\\web3\\public\\data_graphs\\bar2.png")

 

product_counts = project.groupby('Product_Type')['Product_Type'].count()

plt.figure()

plt.pie(product_counts.values, labels=product_counts.index, autopct='%1.1f%%')

plt.title('Product Type Distribution')

plt.savefig("E:\\web3\\public\\data_graphs\\pie.png")




grouped_data = project.groupby(["Location", "Product_Type"]).size().reset_index(name="count")

for location in grouped_data["Location"].unique():

    location_data = grouped_data[grouped_data["Location"] == location]

    plt.figure(figsize=(8, 6))

    plt.pie(location_data["count"], labels=location_data["Product_Type"], autopct="%1.1f%%")

    plt.title(f"Product Type Distribution in {location}")

    plt.savefig(f"E:\\web3\\public\\data_graphs\\product_type_distribution_{location}.png")

 

cur.close()

conn.close()