import { ProfileRelationsBoxWrapper } from "../ProfileRelations";
import { createGlobalStyle } from 'styled-components'

const ProfileRelationsBoxStyle = createGlobalStyle`
  ul.ProfileRelationsBox {
    overflow-y: scroll;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 191px;
    list-style: none;
  }
  #sentinela {
    width: 100%;
    height: 5px;
  }
`;

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxStyle />
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.total})
      </h2>

      <ul className="ProfileRelationsBox">
        {propriedades.items.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={itemAtual.html_url} target="_blank" rel="noopener noreferrer" title="Site do usuário">
                <img src={itemAtual.avatar_url} alt="Avatar do usuário" />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          );
        })}
        <li id="sentinela"></li>
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default ProfileRelationsBox