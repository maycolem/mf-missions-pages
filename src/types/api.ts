export interface BaseResponse {
  company: string;
  event: string;
  ip: string;
  result: "OK" | "error";
}
