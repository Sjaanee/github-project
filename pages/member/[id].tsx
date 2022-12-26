import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IMemberDetails } from "../../interfaces/IMemberDetails";

export default function Member() {
  const [avatar, setAvatar] = useState<string>();
  const [member, setMember] = useState<IMemberDetails>();

  const router = useRouter();

  useEffect(() => {
    setAvatar(String(router.query.id));
  }, [router]);

  const getMemberDetails = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${avatar}`
      );

      setMember(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMemberDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex p-5 justify-center items-center">
        <div className="flex flex-col md:flex-row bg-slate-100 p-8 rounded-md">
          <div className="flex flex-row md:flex-col">
            {member && <Image src={member.avatar_url} width={60} height={60} alt="Foto do usuário" />} 
          </div>

          <div className="flex w-80 pl-5 flex-col">
            <span className="font-bold text-xl">{member?.name}</span>
            <span>{member?.bio}</span>

            <span className="text-xl mt-5 text-slate-700">
              <span className="font-bold">Bio: </span>
              <span>{member?.blog}</span>
            </span>
          </div>
          <button className="rounded-lg border border-blue pl-2 pr-2" onClick={() => router.push('/members')}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
