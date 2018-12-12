#!/usr/bin/env node

import * as admin from 'firebase-admin';

// Firebase App Initialization
var serviceAccount = require("../../credentials.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

import * as exportCollection from '.';

// TODO: replace COLLECTION_NAME with the name of a collection to export.
exportCollection.execute('test.json',['COLLECTION_NAME','ANOTHER_COLLECTION_NAME'],{verbose:false,subcolls:true,collPrefix:"collection"});
