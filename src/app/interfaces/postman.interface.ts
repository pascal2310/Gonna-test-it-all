export interface PostmanCollection {
  info: {
    _postman_id: string;
    name: string;
    schema: string;
    _exporter_id: string;
  };
  item: Item[];
}

interface Item {
  name: string;
  request: Request;
}
interface Request {
  method: string;
  header: [];
  url: URL;
  response: [];
}

interface URL {
  raw: string;
  protocol: string;
  host: string[];
  path: string[];
}
