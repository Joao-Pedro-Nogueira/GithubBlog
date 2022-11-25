import { ExternalLink } from "../../../../components/ExternalLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/Joao-Pedro-Nogueira.png" />
      <ProfileDetails>
        <header>
          <h1>João Pedro Nogueira</h1>
          <ExternalLink text='GitHub' href='#' />
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi quaerat sapiente natus recusandae quae? Facere pariatur consequuntur, tempore nostrum consequatur optio quam hic. Cumque id amet quod et fuga!</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}/>
            Joao-Pedro-Nogueira
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding}/>
            Universidade Católica Dom Bosco
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            147 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}