import { baseUrl } from "../config";

export function fetchAuth(email, password) {
  return fetch(`${baseUrl}/auth/login`);
}
