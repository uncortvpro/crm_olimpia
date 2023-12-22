declare interface Task {
  _id: string;
  date: string;
  creator: string;
  headline: string;
  description: string;
  participants: string[];
  responsible: string;
  deadline: string;
  status: {
    "status": string;
    "colour":string;
    "type": string;
  },
  comment: string;
}
