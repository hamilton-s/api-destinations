# API Destination

This is an example repo of how to hook up an EventBridge API Destination to a HTTP Endpoint.

Here, we have used a simple Lambda endpoint which is frontend by an API Gateway.

Details on how to deploy the services are in their own READMEs. Ensure that you deploy the rest-endpoint service prior to the payments-service so you can grab the params you'll need.

In reality, we would use a API Proxy so that you don't need to do this and the services are independent.
