# Payments Service

A simple service which creates a custom event bus with an API Destination. The API destination is configured with EventBridge Rules to trigger a HTTP Endpoint

### Deploying

- InvocationEndpoint needs to be the endpoint generated when deploying the rest endpoint service
- API Key needs to be updated in SSM
- Run `yarn` in the root of this folder
- Run `serverless deploy --aws-profile <profile>`

### Example Event

```
{
  "detail": {
    "metadata": {
      "domain": "LEGO-PAYMENTS",
      "service": "service-payments",
      "status": "success"
    },
    "data": {
      "payments_number": "payments-007",
      "email": "first@email.com",
      "country": "GB"
    }
  }
}
```
