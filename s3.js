const aws = require('aws-sdk');

aws.config.update({
  accessKeyId:"AKIAIPS5WU5KQZXC5T6Q" ,
  secretAccessKey: "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",
  region: 'us-east-2'
});

module.exports = new aws.S3({
  params: {Bucket: "caloriecounter158"}
})
