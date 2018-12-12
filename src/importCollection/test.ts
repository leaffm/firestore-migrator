#!/usr/bin/env node

import * as admin from 'firebase-admin';

// Firebase App Initialization
var serviceAccount = require("../../credentials.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

import * as importCollection from '.'

// TODO: replace COLLECTION_NAME with the name of a collection to import.
// Note: By default, the test will under run a dry test against the db but will not actually insert, 
// to actually insert, set the dryRun parameter to false.
importCollection.execute('test.json','COLLECTION_NAME',{verbose:false,subcolls:true,collPrefix:"collection",dryRun:true});