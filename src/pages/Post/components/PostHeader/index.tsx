import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function Postheader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink 
          as="button" 
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />} 
          text="Voltar"
          variant="iconLeft"
        />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>Joao-Pedro-Nogueira</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 16 dias
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </li>
      </ul>

    </PostHeaderContainer>
  )
}