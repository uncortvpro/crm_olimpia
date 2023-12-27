declare interface Task {
  _id: string;
  date: string;
  creator: string;
  headline: string;
  description: string;
  participants: string[];
  responsible: string;
  deadline: string;
  status: Status,
  comment: string;
}
