import { useCallback } from 'react';

enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

interface PrefixType {
  [name: string]: any;
}

interface RequestOptions {
  method: RequestMethod;
  headers: PrefixType;
  body?: string;
}

export const useFetchWrapper = () => {
  const handleResponse = useCallback(
    (response: any,) => {
      return response.text().then(async (text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          const error = data.message || data.statusText || data.error;

          return { error, code: response.status };
        }

        return data;
      });
    },
    [],
  );

  const request = useCallback((method: RequestMethod) => {
    return (url: string, body?: any) => {
      const requestOptions: RequestOptions = {
        method,
        headers: {},
      };

      if (body) {
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.body = JSON.stringify(body);
      }

      return fetch(url, requestOptions as RequestInit)
        .then((response) =>
          handleResponse(response),
        )
        .catch((err) => {
          return { error: err };
        });
    };
  }, []);

    return {
        get: request(RequestMethod.GET),
        post: request(RequestMethod.POST),
        put: request(RequestMethod.PUT),
        delete: request(RequestMethod.DELETE),
        patch: request(RequestMethod.PATCH),
    };
};
