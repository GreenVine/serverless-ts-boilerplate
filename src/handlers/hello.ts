import { Handler } from 'aws-lambda';

export const helloHandler: Handler = (ev, ctx, cb) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World from Serverless Typescript Boilerplate!',
      input: ev,
      context: ctx
    })
  };

  return cb(null, response);
};
