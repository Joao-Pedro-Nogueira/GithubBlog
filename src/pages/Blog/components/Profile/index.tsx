import { ExternalLink } from "../../../../components/ExternalLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

interface ProfileProps {
  avatarUrl: string;
  htmlUrl: string;
  login: string;
  name: string;
  company: string;
  followers: number;
  bio: string;
}

export function Profile({avatarUrl, htmlUrl, login, name, company, followers, bio}: ProfileProps) {
  return (
    <ProfileContainer>
      <ProfilePicture src={avatarUrl} />
      <ProfileDetails>
        <header>
          <h1>{name}</h1>
          <ExternalLink text='GitHub' href={htmlUrl} />
        </header>
        <p>{bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}/>
            {login}
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding}/>
            {company}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            {followers < 2 ?? {`${followers} seguidor`} : {`${followers} seguidores`}}
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}