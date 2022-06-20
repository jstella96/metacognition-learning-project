import AWS from 'aws-sdk'

async function  uploadS3(blob,fileName){
    AWS.config.update({
        region: process.env.VUE_APP_BUCKET_REGION,
        credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID
    })
    });
    const s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {Bucket: process.env.VUE_APP_BUCKET_NAME}
    });
    const params = {
        Key: fileName,
        Body: blob,
        ACL: 'public-read'
        }
    const stored = await s3.upload(params).promise();
    return stored.key
}

export { uploadS3 };