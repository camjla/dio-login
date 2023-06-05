import {Link} from 'react-router-dom'

import Banner from '../../assets/banner.png'
import {Header} from '../../components/Header' 
import {Button} from '../../components/Button' 
import {Container, TextContent,Title, TitleHighLight} from './styles'

const Home = () => {

  return (
    <><Header /><Container>
      <div>
      <TitleHighLight>Codifique</TitleHighLight>
      <br />
      <Title> o seu futuro global agora! <br /></Title>

      <TextContent>
      Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
      </TextContent>
      <Button title='Comece agora' variant='secondary'onClick={()=> null} />
      </div>
      <div>
   <img src={Banner} alt="Banner" />
      </div>
    </Container></>
  )

}

export {Home}