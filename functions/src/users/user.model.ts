export interface User {
  id: string;
  created_at: Date;
  email_address: string;
  name: string;
  token: Buffer;
}
