# Project Name

## Project Description

This project is a simple implementation designed to help you learn and understand the **MVC (Model-View-Controller)** pattern in **Node.js**. It demonstrates how to structure a Node.js application using the MVC architecture to separate concerns and improve maintainability.

### Key Concepts:
- **Model**: Represents the data and business logic of the application.
- **View**: Handles the display of data and user interface.
- **Controller**: Manages user input, updates the model, and renders the appropriate view.

This project will provide a practical understanding of how the MVC pattern works in the context of a Node.js application, making it easier to scale and maintain your web applications.

## Prerequisites

### 1. MongoDB Installation
Ensure you have **Mongosh** (MongoDB Shell) installed to interact with the MongoDB database. Follow the steps below to check if it's installed and install it if necessary.

### 2. Check if Mongosh is Installed

1. Open a terminal or command prompt.
2. Run the following command to check the installed version:

    ```bash
    mongosh --version
    ```

If **Mongosh** is installed, the version will be displayed. If it's not installed, follow the installation steps below.

---

## Installation

### 1. Install Mongosh (if not installed)

If **Mongosh** is not installed, you can download it from the official MongoDB website:

- [Download Mongosh](https://www.mongodb.com/try/download/shell)

Follow the installation instructions on the website for your specific operating system.

### 2. Start Mongosh

Once Mongosh is installed, run the following command to start the MongoDB shell:

```bash
mongosh
 ```

## MongoDB Shell Commands

### 1. Show all databases
To display a list of all databases in MongoDB:

```bash
show dbs
 ```

### 2. Switch to a specific database
To switch to a specific database:

```bash
use <database_name>
 ```
### 3. Show all collections in the current database
To display all collections in the current database:

```bash
show collections
 ```
### 4. View all documents in a specific collection
To view all records (documents) in a specific collection:
```bash
db.<collection_name>.find({})
 ```
### 5. Create a new collection
To create a new collection (MongoDB will create it automatically when you insert data):
```bash
db.createCollection("<collection_name>")
 ```
### 6. Insert a document into a collection
To insert a document into a collection:
```bash
db.<collection_name>.insert({ key: "value" })
 ```

### 7. Find a document with specific conditions
To find documents that match specific conditions:
```bash
db.<collection_name>.find({ key: "value" })
 ```

### 8. Update a document
To update a document in a collection:
```bash
db.<collection_name>.update({ query }, { $set: { key: "new_value" } })
 ```

### 9. Delete a document
To delete a specific document:
```bash
db.<collection_name>.remove({ key: "value" })
 ```

### 10. Count the number of documents in a collection
To count the number of documents in a collection:
```bash
db.<collection_name>.count()
 ```
### 11. Drop a collection
To delete an entire collection:
```bash
db.<collection_name>.drop()
 ```

### 12. Show current database
To display the current database you are using:
```bash
db
 ```

### 13. Show the indexes in a collection
To display the indexes for a collection:
```bash
db.<collection_name>.getIndexes()
 ```

### 14. Create an index on a collection
To create an index on a specific field of a collection:
```bash
db.<collection_name>.createIndex({ field_name: 1 })
 ```
### 15. Exit the MongoDB shell
To exit from the MongoDB shell:
```bash
exit
 ```

---
## Explanation of the commands:
- **show dbs**: Displays all the databases available in your MongoDB instance.
- **use <database_name>**: Switches to the specified database.
- **show collections**: Lists all collections in the current database.
- **db.<collection_name>.find({})**: Retrieves all documents from a specific collection.
- **db.createCollection("<collection_name>")**: Creates a new collection in the database.
- **db.<collection_name>.insert({})**: Inserts a new document into a collection.
- **db.<collection_name>.update()**: Updates documents in a collection.
- **db.<collection_name>.remove()**: Removes documents from a collection.
- **db.<collection_name>.count()**: Counts the number of documents in a collection.
- **db.<collection_name>.drop()**: Drops (deletes) the collection.
- **db**: Displays the name of the current database in use.
- **db.<collection_name>.getIndexes()**: Shows the indexes for a collection.
- **db.<collection_name>.createIndex()**: Creates an index for efficient queries.
- **exit**: Exits the MongoDB shell.

