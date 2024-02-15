export type LinkResponse = {
  status: string;
  data: {
    lang: string;
    author: null | string;
    title: string;
    publisher: string;
    image: {
      url: string;
      type: string;
      size: number;
      height: number;
      width: number;
      size_pretty: string;
    };
    date: string;
    description: string;
    url: string;
    logo: {
      url: string;
      type: string;
      size: number;
      height: number;
      width: number;
      size_pretty: string;
    };
    screenshot: {
      size_pretty: string;
      size: number;
      type: string;
      url: string;
      width: number;
      height: number;
    };
  };
  statusCode: number;
  headers: {
    [key: string]: string | string[];
  };
};
