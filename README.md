# Serverless Typescript Boilerplate

## Environment Variables

```bash
export API_DOMAIN=hello.api.example.com # API Gateway Endpoint Domain

export AWS_REGION=us-east-1 # Deployment Region

export API_CERT_NAME=*.api.example.com # API Certificate Name (Best match)

export API_STAGE=v1 # Stage name
```

## Deployment

### SSL Certificate

The environment variable `API_CERT_NAME` specifies the certificate name for API Gateway custom domain. The Serverless plugin will do the best-match over this name. Refer to [serverless-domain-manager plugin documentation](https://github.com/amplify-education/serverless-domain-manager) for detailed guidance.

### Custom Domain

#### Set up

To set up the custom domain for API Gateway, simply run `yarn run sls create_domain` once.

Please note that this command cannot modify the existing custom domain that created previously by other means, e.g. through AWS Console, API.

Sample Output:
`
Serverless: 'hello.api.example.com' was created/updated. New domains may take up to 40 minutes to be initialized.
`

#### Tear Down

To remove the custom domain, run `yarn run sls delete_domain` once.

### Deploy Project

To deploy or update the project, run `yarn run sls deploy`.

### Destroy Project

:warning: To destroy all resources, run `yarn run sls remove`. **Be careful when running this command towards a production stage name**.

## References

### AWS as the Provider

- [Quick Start Guide](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

- Serverless Config: [serverless.yml](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml)

- [API Gateway Events](https://serverless.com/framework/docs/providers/aws/events/apigateway)