/***
 * -----------------------------
 * MongoDB Connection
 * -----------------------------
 * 1. Create account
 * 2. Create and user with password
 * 3. Whitelist IP address
 * 4. database > connect > driver > Node > show all code 
 * 5. Change the password in the usi
 * -----------------------------
 * 1. CREATE --- POST
 * 2. app.post('/', async(req, rex) => {})
 * 3. Make the function async to use await inside it
 * 4. Make you use the express.json middleware
 * 5. Access data from the body: const user = req.body;
 * 6. const result = await col.insertOne(user)
 * 7. res.send(resullt)
 * 
 * 
 * CLIENT
 * 1. Create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type': application/json}
 * 5. add body: JSOM.Stringify(user)
 * 
 * 
 * ---------------
 * READ MANY
 * ---------------
 * 1. create a cursor = col.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * ------------------
 * DELETE
 * ------------------
 * 1. Create app.delete('users/:id', async(req, res) => {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = { _id: new ObjectId() }
 * 4. const result = await col.deleteOne(query)
 * 
 * 
 * CLIENT
 * 1. Create dynamic url with id
 * 2. mention the DELETE method
 * 
 */