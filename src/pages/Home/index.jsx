import {Link} from 'react-router-dom'
import {Header} from '../../components/Header' 
import {Button} from '../../components/Button' 
const Home = () =>
{
  return 
  (<>
  <Header/>
    <h1>Home</h1>
    <Button title={'teste 1'} />
    <Link to='/login'>Ir para o Login</Link>

    </> )
}

export {Home}