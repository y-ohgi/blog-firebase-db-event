import admin, { credential } from 'firebase-admin'
import { faker } from '@faker-js/faker'

admin.initializeApp({
  credential: credential.applicationDefault(),
  databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URI
})

const db = admin.database()

const userRef = db.ref('users');

(async () => {
  await userRef.set({
    one: {
      name: faker.internet.userName(),
      bio: faker.lorem.lines()
    },
    two: {
      name: faker.internet.userName(),
      bio: faker.lorem.lines()
    }
  })
    .then(() => {
      console.log('done')
    })
    .catch(console.error)

  process.exit(0)
})();
