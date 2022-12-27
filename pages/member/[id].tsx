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

      console.log(member)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMemberDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
      <div className="flex p-5 justify-center items-center">
        <div className="flex flex-col md:flex-row bg-slate-100 p-8 rounded-md gap-4">
          <div className="flex flex-col mb-2">
            <div className="relative flex items-center justify-center rounded-full border-[4px] shadow-lg border-white bg-center bg-contain bottom-6 max-w-[53px] max-h-[53px] bg-black-300 overflow-hidden">
              {member && <Image src={member.avatar_url} width={60} height={60} alt="Foto do usuário" />}
            </div>
            <p>Total de seguidores: {member?.followers}</p>
            <p>Total de repositórios: {member?.public_repos}</p>
            <p>Data de início {member?.created_at}</p>

          </div>

          <div className="flex w-80 pl-5 flex-col">
            <span className="font-bold text-xl">{member?.name}</span>
            <span>{member?.bio}</span>

            <span className="text-xl mt-5 text-slate-700">
              {member?.blog && (<><span className="font-bold">Blog: </span>
              <span>{member?.blog}</span></>)}
              
              <button className="rounded-lg border border-blue pl-2 pr-2 mt-2 lg" onClick={() => router.push('/members')}>Voltar</button>
            </span>
          </div>
        </div>
      </div>
  );
}
