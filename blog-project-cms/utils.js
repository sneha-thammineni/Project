import firebase from 'firebase';
import {FirebaseClientService} from '@canner/image-service-config';
import * as GraphQLinterface from 'canner-graphql-interface';

if (!firebase.apps.length) {
  // Setup connector to connect your services
  firebase.initializeApp({
    apiKey: "AIzaSyC7wiKAmoV-jr9TIzB_2f2k0ZEo90ONtBM",
    authDomain: "blog-project-cms.firebaseapp.com",
    databaseURL: "https://blog-project-cms.firebaseio.com",
    projectId: "blog-project-cms",
    storageBucket: "blog-project-cms.appspot.com",
    messagingSenderId: "974693051517"
  });
}
const defaultApp = firebase.app();
const connector = new GraphQLinterface.FirebaseRtdbClientConnector({
  database: defaultApp.database()
});

const storage = new FirebaseClientService({
  firebase,
  dir: 'CANNER_CMS',
  filename: '',
  hash: true
}).getServiceConfig();



export default {connector, resolver: {}, storage};

