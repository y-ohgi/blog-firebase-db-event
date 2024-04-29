/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {setGlobalOptions} from "firebase-functions/v2";
import {onValueWritten} from "firebase-functions/v2/database";

admin.initializeApp();

// MEMO:
//   Realtime Databaseと同じリージョンで実行したいため、asia-southeast1を指定。
setGlobalOptions({
  region: "asia-southeast1",
});

// MEMO:
//   "/users/{uid}" 配下で発生したイベントをリッスン
const onUserWritten = onValueWritten("users/{uid}", (event) => {
  logger.log(event);
});

export = {onUserWritten}
