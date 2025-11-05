import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://b428e1479de6b09c9060ec50057cddee@o4510308524490762.ingest.us.sentry.io/4510308530585600",
  integrations:[
    Sentry.mongooseIntegration()
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,

});