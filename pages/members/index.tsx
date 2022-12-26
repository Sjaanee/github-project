import axios from "axios";
import { MemberCard } from "../../components/MemberCard";
import { IMember } from "../../interfaces/IMembers";

export const getServerSideProps = async () => {
  let url = "https://api.github.com/orgs/angular/public_members";

  const { data } = await axios.get(url);

  return {
    props: {
      members: data || [],
    },
  };
};

interface IProps {
  members: []
}

export default function Members(props: IProps) {
  const members = props.members

  return (
    <section className="bg-black-500">
      <div className="shadow py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {members && (<>
            {members.map((el: IMember, i: number) => (<button key={i}><MemberCard member={el}/></button>))}
          </>)}
      </div>
    </section>
    )
}