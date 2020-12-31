import { Timestamp } from 'rxjs';

export interface Feed {
  username: string;
  feeling: string;
  text: string;
  time: number;
}
