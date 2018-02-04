const aws = require('aws-sdk');

aws.config.update({
  accessKeyId:"AKIAIV54CFWRE3VQQ3PA" ,
  secretAccessKey: "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",
  region: 'us-east-2'
});

module.exports = new aws.S3({
  params: {Bucket: "caloriecounter158"}
})
