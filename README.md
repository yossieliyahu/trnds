# mongooseproj

#########################################################

Standup meeting note application.
-----------------------------------
DB - moongoose/mongodb
nodejs/express
view-engine: HTML, swig
CSS: bootstrap 

To run the app:


Install mongodb from https://www.mongodb.org/ (follow the instructions in that site)

Define mongod.conf
--------------------------
dbpath=c:/mongodb/data
logpath=c:/mongodb/data/log
verbose=vvvvv

Run the server: (Run "cmd" as Admin)
----------------------------------------
> C:\mongodb\bin\mongod.exe --config C:\mongodb\mongod.conf

Run the node app using the shell: (Run another "cmd" as Admin)
---------------------------------------------------------------
> npm start

Connect to the server using the shell: (Run another "cmd" as Admin)
----------------------------------------------------------------------
> C:\mongodb\bin\mongo.exe
> load("lang.js")


#########################################################


