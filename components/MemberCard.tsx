import Image from 'next/image'
import Link from 'next/link'
import { IMember } from "../interfaces/IMembers"

interface MemberCardProps {
  member: IMember
}

export function MemberCard({ member }: MemberCardProps) {

  return (
    <Link href={`/member/${member.login}`} key={member.login}>
    <div className="max-w-[305px] mx-auto overflow-hidden rounded-lg border transition-all shadow-nftCard hover:shadow-nftCardHover z-[3]">
      <div className="w-[305px] h-[81px] bg-black-300 overflow-hidden bg-fixed">
          <div className="w-full h-full bg-black-700"></div>
      </div>

      <div className="lg:text-[0.850rem] md:text-[0.750rem] sm:text-[0.700rem] text-[0.690rem] flex flex-col items-stretch justify-center max-w-[305px] max-h-[119px] px-2 pt-2 pb-5 bg-white">
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center rounded-full border-[4px] shadow-lg border-white bg-center bg-contain bottom-6 max-w-[53px] max-h-[53px] bg-black-300 overflow-hidden">
            <Image src={member.avatar_url} width={60} height={60} alt="Foto do usuário" />
          </div>
        </div>
        <p className="flex items-center justify-center text-black-900 font-bold">
          {member.login}
        </p>
      </div>
    </div>
    </Link>
  )
}
