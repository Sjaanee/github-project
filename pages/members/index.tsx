import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import axios from "axios";
import { getMembersAPI, Member } from "../../services/member";

interface APIResults<T = any> {
  value?: T
}

export default function Members() {
  const [members, setMembers] = useState<Member[]>()

  const getMembers = async (): Promise<void> => {
    try {
      const result: APIResults<Member[]> = await getMembersAPI()

      console.log(result)

      setMembers(result.value)
    } catch (e) {
      console.error(e)
    }
  } 

  useEffect(() => {
    getMembers().then().catch(console.error)
  }, [])

  return (
  <div className="container">
    {/* {members && (<>
      {members.map(
    </>)} */}
  </div>)
}