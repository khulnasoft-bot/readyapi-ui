import { describe, expect, it } from 'vitest'

import {
  isSchemaPath,
  upgradeFromThreeToThreeOne,
} from './upgradeFromThreeToThreeOne'

describe('isSchemaPath', () => {
  it('correctly identifies schema paths', () => {
    expect(isSchemaPath(['components', 'schemas', 'User'])).toBe(true)
    expect(
      isSchemaPath([
        'paths',
        '/users',
        'get',
        'responses',
        '200',
        'content',
        'application/json',
        'schema',
      ]),
    ).toBe(true)
    expect(
      isSchemaPath([
        'paths',
        '/users',
        'post',
        'requestBody',
        'content',
        'application/json',
        'schema',
      ]),
    ).toBe(true)
    expect(
      isSchemaPath(['components', 'schemas', 'User', 'properties', 'address']),
    ).toBe(true)
    expect(isSchemaPath(['components', 'schemas', 'User', 'allOf', '0'])).toBe(
      true,
    )
    expect(
      isSchemaPath(['paths', '/users', 'get', 'parameters', '0', 'schema']),
    ).toBe(true)
  })

  it('correctly identifies non-schema paths', () => {
    expect(isSchemaPath(['info'])).toBe(false)
    expect(isSchemaPath(['paths', '/users', 'get', 'summary'])).toBe(false)
    expect(isSchemaPath(['components', 'parameters', 'userId'])).toBe(false)
  })
})

describe('upgradeFromThreeToThreeOne', () => {
  describe('version', () => {
    it('doesn’t modify Swagger 2.0 files', async () => {
      const result = upgradeFromThreeToThreeOne({
        swagger: '2.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {},
      })

      expect(result.swagger).toBe('2.0')
    })

    it('changes the version to from 3.0.0 to 3.1.1', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {},
      })

      expect(result.openapi).toBe('3.1.1')
    })

    it('changes the version to 3.0.3 to 3.1.1', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.3',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {},
      })

      expect(result.openapi).toBe('3.1.1')
    })
  })

  describe('nullable types', () => {
    it('migrates nullable types', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/test': {
            get: {
              responses: {
                '200': {
                  description: 'foobar',
                  content: {
                    'application/json': {
                      schema: {
                        type: 'string',
                        nullable: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })

      expect(
        result.paths['/test'].get.responses['200'].content['application/json']
          .schema,
      ).toEqual({
        type: ['null', 'string'],
      })
    })
  })

  describe('exclusiveMinimum and exclusiveMaximum', () => {
    it('migrate exclusiveMinimum and exclusiveMaximum', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/test': {
            get: {
              responses: {
                '200': {
                  description: 'foobar',
                  content: {
                    'application/json': {
                      schema: {
                        type: 'integer',
                        minimum: 1,
                        exclusiveMinimum: true,
                        maximum: 100,
                        exclusiveMaximum: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })

      expect(
        result.paths['/test'].get.responses['200'].content['application/json']
          .schema,
      ).toEqual({
        type: 'integer',
        exclusiveMinimum: 1,
        exclusiveMaximum: 100,
      })
    })
  })

  describe('migrates example to examples', () => {
    it('uses arrays in schemas', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/test': {
            get: {
              responses: {
                '200': {
                  description: 'foobar',
                  content: {
                    'application/json': {
                      schema: {
                        type: 'integer',
                        example: 1,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })

      expect(
        result.paths['/test'].get.responses['200'].content['application/json']
          .schema,
      ).toEqual({
        type: 'integer',
        examples: [1],
      })
    })

    it('uses example objects everywhere else', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/test': {
            get: {
              parameters: [
                {
                  name: 'limit',
                  in: 'query',
                  schema: {
                    type: 'integer',
                    example: 10,
                  },
                  example: 10,
                },
              ],
            },
          },
        },
      })

      expect(result.paths['/test'].get.parameters[0]).toEqual({
        name: 'limit',
        in: 'query',
        schema: {
          type: 'integer',
          // array, because it’s in a schema
          examples: [10],
        },
        // object, because it’s not in a schema
        examples: {
          default: {
            value: 10,
          },
        },
      })
    })
  })

  describe('describing File Upload Payloads ', () => {
    it('remove schema for file uploads', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/test': {
            get: {
              requestBody: {
                content: {
                  'application/octet-stream': {
                    schema: {
                      type: 'string',
                      format: 'binary',
                    },
                  },
                },
              },
            },
          },
        },
      })

      expect(
        result.paths['/test'].get.requestBody.content[
          'application/octet-stream'
        ],
      ).toEqual({})
    })

    it('migrates base64 format to contentEncoding', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/test': {
            get: {
              requestBody: {
                content: {
                  'application/octet-stream': {
                    schema: {
                      type: 'string',
                      format: 'base64',
                    },
                  },
                },
              },
            },
          },
        },
      })

      expect(
        result.paths['/test'].get.requestBody.content[
          'application/octet-stream'
        ],
      ).toEqual({
        schema: {
          type: 'string',
          contentEncoding: 'base64',
        },
      })
    })

    it('migrates binary format for multipart file uploads', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/test': {
            get: {
              requestBody: {
                content: {
                  'multipart/form-data': {
                    schema: {
                      type: 'object',
                      properties: {
                        fileName: {
                          type: 'string',
                          format: 'binary',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })

      expect(
        result.paths['/test'].get.requestBody.content['multipart/form-data'],
      ).toEqual({
        schema: {
          type: 'object',
          properties: {
            fileName: {
              type: 'string',
              contentEncoding: 'application/octet-stream',
            },
          },
        },
      })
    })
  })

  describe.skip('declaring $schema', () => {
    it('adds a $schema', async () => {
      const result = upgradeFromThreeToThreeOne({
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {},
      })

      expect(result.$schema).toBe('http://json-schema.org/draft-07/schema#')
    })
  })
})