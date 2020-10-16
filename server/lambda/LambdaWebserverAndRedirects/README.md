# Deploy to AWS

## Create Lambda function

* Name: use folder name
* Runtime: Node.js 12.x
* Execution role: Create a new role from AWS policy templates

  * Role name: Function name
  * Policy templates: Basic Lambda@Edge permissions (for CloudFront trigger)

## Add code

* Copy and paste the code and press **Save**

## Add CloudFront trigger(s)

* Actions -> Deploy to Lambda@Edge

  * Add distribution
  * Cache behavior: *
  * CloudFront event: Origin request
  * Acknowledge

* Deploy
