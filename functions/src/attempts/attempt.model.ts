export interface Attempt {
  id: string;
  created_at: Date;
  user_id: string;
  // number of moves user has to incure
  moves: number;
  // time taken in seconds
  duration: number;
}
