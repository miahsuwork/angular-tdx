export interface Users {
  id: string;
  metadata: string;
  data: {
    users: {
      count: number;
      list: string[];
    };
  };
}
