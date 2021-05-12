const functions = require("firebase-functions");

const algoliasearch = require("algoliasearch");
const admin = require("firebase-admin");

// const db = require('./../src/components/firebase/firebase')

admin.initializeApp();
const db = admin.firestore();

const client = algoliasearch(
    functions.config().algolia.appid,
    functions.config().algolia.apikey
);

const index = client.initIndex("movies");

exports.addToIndex = functions.firestore
    .document("movies/{movieId}")
    .onCreate((snapshot) => {
        const data = snapshot.data();
        const objectID = snapshot.id;

        return index.saveObject({ ...data, objectID });
    });

exports.updateIndex = functions.firestore
    .document("movies/{movieId}")
    .onUpdate((change) => {
        const newData = change.after.data();
        const objectID = change.after.id;
        return index.saveObject({ ...newData, objectID });
    });

exports.deleteFromIndex = functions.firestore
    .document("movies/{movieId}")
    .onDelete((snapshot) => index.deleteObject("movies/{movieId}"));

exports.sendCollectionToAlgolia = functions.https.onRequest(
    async (req, res) => {
        // This array will contain all records to be indexed in Algolia.
        // A record does not need to necessarily contain all properties of the Firestore document,
        // only the relevant ones.
        const algoliaRecords = [];

        // Retrieve all documents from the COLLECTION collection.
        const querySnapshot = await db.collection("movies").get();
        querySnapshot.docs.forEach((doc) => {
            const document = doc.data();
            // Essentially, you want your records to contain any information that facilitates search,
            // display, filtering, or relevance. Otherwise, you can leave it out.
            const record = {
                ...document,
                objectID: doc.id,
            };

            algoliaRecords.push(record);
        });

        // After all records are created, we save them to
        index.saveObjects(algoliaRecords, (_error, content) => {
            res.status(200).send(
                "COLLECTION was indexed to Algolia successfully."
            );
        });
    }
);
