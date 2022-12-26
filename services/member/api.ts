import { Member } from "./types";
import axios, { AxiosResponse } from "axios"
import { Response } from "../types";

interface APIResults<T = any> {
  value?: T
}

export async function getMembersAPI(): Promise<APIResults<Member[]>> {
  let url = "https://api.github.com/orgs/angular/public_members"

  const { data }: AxiosResponse<Response<Member[]>> = await axios.get(url)

  return { value: data.response }
}