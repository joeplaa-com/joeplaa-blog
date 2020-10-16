# Readme

* Based on: [https://github.com/adnanrahic/lambda-mailer](https://github.com/adnanrahic/lambda-mailer)
* Tutorial: [https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0](https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0)
* Using the serverless framework

## Development

### Install dependencies

* yarn global add serverless

### Configure serverless

* Add your personal AWS credentials:

    ```ini
    serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx
    ```

    Or add them manually (better if you want multiple profiles):

    ```ini
    nano ~/.aws/credentials
    ```

    *Example file:*

    ```yaml
    [jodibooks]
    aws_access_key_id=AKIA****************
    aws_secret_access_key=****************************************
    region=eu-central-1
    output=json

    [joeplaa.com]
    aws_access_key_id=AKIA****************
    aws_secret_access_key=****************************************
    region=eu-central-1
    output=json
    ```

## Deploy

* Open `serverless.yml` and change the secrets to the applicable environment (dev or prod)

    ```yaml
    custom:
    secrets: ${file(secrets-dev.json)}
    ```

* Region must be set to the region where the receiver (email address) is verified by SES.
* Run:

    ```ini
    serverless deploy --aws-profile joeplaa.com
    ```

* Empty created S3 bucket
* Remove the created S3 bucket
* Deploy the API to DEV environment (Actions -> Deploy API)
* Copy the link to the API

## Customization

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-api-gateway.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-api-gateway.html)

* Enable VPC peerings: [https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-vpc-peering-with-aws-resources](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-vpc-peering-with-aws-resources)
* Open [AWS Certificate Manager](https://console.aws.amazon.com/acm/home?region=us-east-1#/privatewizard/)
  * Create an SSL certificate for `mail-api.joeplaa.com` in region `us-east-1`
  * Choose DNS validation, add tag `website` - `joeplaa.com` and add the record(s) to the Route 53 hosted zone or Lightsail DNS
* Open [API Gateway](https://eu-central-1.console.aws.amazon.com/apigateway/main/apis?region=eu-central-1)
  * Click the API and go to "Custom Domain Names"
  * Create a Custom domain name in API gateway for `mail-api.joeplaa.com`, add tag `website` - `joeplaa.com` and choose "Edge-optimized" as Endpoint configuration
  * Add SSL certificate
* Add API mappings:

    |API                    |Stage|Path|
    |-----------------------|-----|----|
    |dev-contact-form-api   |dev  |dev |
    |prod-contact-form-api  |prod |prod|

* Add A alias for `mail-api.joeplaa.com` to API in the Route 53 hosted zone or Lightsail DNS

* * *

## New service

### Create a new service

```ini
serverless create --template aws-nodejs --path contact-form-api
```

### Add secrets file

This is not a secrets file. It's the config file. Weird choice of words.

* Create `secrets-dev.json` and `secrets-prod.json`
* Add config

    ```json
    {
        "NODE_ENV":"dev",
        "EMAIL":"info@joeplaa.com",
        "DOMAIN":"*"
    }
    ```

    ```json
    {
        "NODE_ENV":"prod",
        "EMAIL":"info@joeplaa.com",
        "DOMAIN":"joeplaa.com"
    }
    ```
